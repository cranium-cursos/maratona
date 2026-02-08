import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const NAV_LINKS = [
  { label: 'Aprenda', href: '#features' },
  { label: 'Cronograma', href: '#schedule' },
  { label: 'Sobre', href: '#about' },
];

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
    };

    return (
        <header className="py-4 md:py-6 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md z-50" role="banner">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <img
                    alt="Cranium Logo"
                    className="h-8 md:h-10 dark:invert"
                    src="/images/portal-cranium-logo.webp"
                />
                <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        onClick={() => navigate('/proximos-passos')}
                        size="sm"
                        className="rounded-full tracking-wide"
                        aria-label="Inscrever-se na maratona"
                    >
                        QUERO ME INSCREVER
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
