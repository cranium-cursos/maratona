import React, { useEffect, useState } from 'react';

const NextSteps: React.FC = () => {
    const [redirectSeconds, setRedirectSeconds] = useState(3);
    // TODO: Replace with the actual WhatsApp group link
    const whatsappLink = "https://chat.whatsapp.com/Ioi8X8xvNOD17aR72a0lKZ?mode=gi_t";

    useEffect(() => {
        // Pixel tracking placeholder
        console.log("Pixel Fired");

        // Countdown and redirect
        const interval = setInterval(() => {
            setRedirectSeconds((prev) => prev - 1);
        }, 1000);

        const redirectTimeout = setTimeout(() => {
            window.location.href = whatsappLink;
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(redirectTimeout);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 p-6 text-center">
            <div className="max-w-lg w-full bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-2xl">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>

                <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    Inscrição Confirmada!
                </h1>

                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                    Você será redirecionado para o grupo VIP do WhatsApp em <span className="font-bold text-primary">{redirectSeconds > 0 ? redirectSeconds : 0}</span> segundos...
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all w-full justify-center shadow-lg hover:shadow-green-500/20"
                >
                    <span className="material-symbols-outlined">chat</span>
                    ENTRAR AGORA
                </a>

                <p className="mt-6 text-sm text-slate-400">
                    Se não for redirecionado automaticamente, clique no botão acima.
                </p>
            </div>
        </div>
    );
};

export default NextSteps;
