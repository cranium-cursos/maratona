import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BadgeCheck, Calendar, ArrowRight } from 'lucide-react';
import { EXPERTS } from '../data/constants';
import Button from './ui/Button';

const Hero: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,193,180,0.15)_0%,rgba(255,255,255,0)_70%)] opacity-80"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <div className="mb-10 relative group w-full max-w-4xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-slate-100 dark:bg-slate-900 aspect-[16/9] md:aspect-[21/9]">
                        <div className="absolute inset-0 grid grid-cols-6 h-full">
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
                                Mentores Especialistas Cranium
                            </p>
                        </div>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm mb-6">
                    <Calendar className="text-primary w-3.5 h-3.5" />
                    <span className="text-xs font-bold tracking-widest text-secondary dark:text-white uppercase">
                        ONLINE E GRATUITO | DIAS 02/02 A 10/02
                    </span>
                </div>

                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-secondary dark:text-white leading-tight mb-6">
                    MARATONA FISIOTERAPIA EM <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-accent">
                        CABEÇA E PESCOÇO
                    </span>
                </h1>

                <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 px-2">
                    Aprenda como os especialistas tratam seus pacientes de cabeça e pescoço — baseado em casos clínicos reais.
                    7 dias discutindo sobre <strong className="text-secondary dark:text-primary font-bold">DTM</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> sistema vestibular</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> zumbido</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> cefaleia</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> cervical</strong> e
                    <strong className="text-secondary dark:text-primary font-bold"> disfunção oculomotora</strong>.
                </p>

                <Button
                    onClick={() => navigate('/proximos-passos')}
                    size="lg"
                    fullWidth
                    icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    className="group cursor-pointer font-display md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden flex-row-reverse"
                >
                    QUERO PARTICIPAR GRATUITAMENTE
                </Button>

                <div className="mt-8 flex items-center justify-center opacity-80">
                    <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">Junte-se a +2.000 profissionais</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
