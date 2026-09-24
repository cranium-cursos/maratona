import React from 'react';
import { ArrowRight, Globe, Camera } from 'lucide-react';
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

const Footer: React.FC = () => {
    return (
        <footer className="py-12 md:py-16 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div id="register" className="mb-12">
                    <h3 className="text-lg md:text-2xl font-bold text-secondary dark:text-white mb-8 leading-relaxed px-2">
                        Pronto para discutir casos reais com a gente?
                    </h3>
                    <Button
                        onClick={scrollToOffer}
                        size="lg"
                        fullWidth
                        icon={<ArrowRight className="w-5 h-5" />}
                        className="rounded-full md:w-auto hover:scale-105"
                    >
                        GARANTIR VAGA NA MARATONA
                    </Button>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 opacity-80">
                        <img
                            alt="Cranium"
                            className="h-6 dark:invert"
                            src="/images/portal-cranium-logo.webp"
                        />
                        <span className="text-xs text-slate-500">© 2026 Cranium.</span>
                    </div>
                    <div className="flex gap-6 text-xs md:text-sm text-slate-400 font-medium">
                        <a href="https://craniumcursos.com.br/termos-de-uso" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Termos</a>
                        <a href="https://craniumcursos.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacidade</a>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://craniumcursos.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                            <Globe className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com/craniumcursos" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                            <Camera className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
