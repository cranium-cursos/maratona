import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 p-6 text-center">
            <div className="max-w-md">
                <h1 className="font-display text-6xl md:text-8xl font-black text-primary mb-4">404</h1>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-4">
                    Página não encontrada
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                    A página que você procura não existe ou foi movida.
                </p>
                <Button
                    onClick={() => navigate('/')}
                    icon={<Home className="w-5 h-5" />}
                >
                    Voltar ao início
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
