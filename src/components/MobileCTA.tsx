import React from 'react';
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

const MobileCTA: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden z-[60] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-700">
            <Button
                onClick={scrollToOffer}
                size="md"
                fullWidth
                className="text-sm"
            >
                GARANTIR VAGA NA MARATONA
            </Button>
        </div>
    );
};

export default MobileCTA;
