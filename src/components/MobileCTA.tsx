import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const MobileCTA: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden z-[60] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-700">
            <Button
                onClick={() => navigate('/proximos-passos')}
                size="md"
                fullWidth
                className="text-sm"
            >
                INSCREVER-SE GRATUITAMENTE
            </Button>
        </div>
    );
};

export default MobileCTA;
