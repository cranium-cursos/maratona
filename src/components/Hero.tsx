import React from 'react';
import { BadgeCheck, Calendar } from 'lucide-react';
import { EXPERTS } from '../data/constants';
import Button from './ui/Button';

const scrollToOffer = () => {
    const el = document.querySelector('#offer');
    if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
};

const Hero: React.FC = () => {
    return (
        <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,193,180,0.15)_0%,rgba(255,255,255,0)_70%)] opacity-80"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <div className="mb-10 relative group w-full max-w-4xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-slate-100 dark:bg-slate-900 aspect-[16/9] md:aspect-[21/9]">
                        <div className="absolute inset-0 grid grid-cols-4 h-full">
                            {EXPERTS.map((expert, i) => (
                                <div key={i} className="h-full relative overflow-hidden group/item">
                                    <img
                                        alt={expert.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/item:scale-110 grayscale hover:grayscale-0"
                                        src={expert.imageUrl}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1 md:p-2">
                                        <p className="text-white text-xs font-bold text-center tracking-tight">{expert.shortName}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-secondary/90 to-transparent flex items-end justify-center pb-4 pointer-events-none">
                            <p className="text-white/90 text-xs md:text-sm font-medium tracking-wider uppercase flex items-center gap-2">
                                <BadgeCheck className="text-primary w-4 h-4 md:w-5 md:h-5" />
                                Convidados Maratona Cranium
                            </p>
                        </div>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm mb-6">
                    <Calendar className="text-primary w-3.5 h-3.5" />
                    <span className="text-xs font-bold tracking-widest text-secondary dark:text-white uppercase">
                        05 A 08 DE OUTUBRO · AULAS AO VIVO ÀS 20H
                    </span>
                </div>

                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-secondary dark:text-white leading-tight mb-6">
                    DESCUBRA COMO 4 ESPECIALISTAS PENSAM <br className="hidden md:block" />
                    CASOS REAIS DE CABEÇA E PESCOÇO EM 4 ÁREAS, 4 NOITES
                </h1>

                <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 px-2">
                    De 5 a 8 de outubro, acompanhe discussões clínicas ao vivo que conectam raciocínio clínico e prática.
                    <strong className="text-secondary dark:text-primary font-bold"> De clínico para clínico.</strong>
                </p>

                <Button
                    onClick={scrollToOffer}
                    size="lg"
                    fullWidth
                    className="group cursor-pointer font-display md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                    VER FORMAS DE PARTICIPAR
                </Button>

                <div className="mt-8 flex items-center justify-center opacity-80">
                    <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">Escolha entre participar ao vivo gratuitamente ou garantir o Ingresso VIP.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
