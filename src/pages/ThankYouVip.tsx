import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';

const VIP_GROUP_URL = "https://chat.whatsapp.com/L68vzdfwfwU1ihALvq8yEw?mode=gi_t";

const ThankYouVip: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100 p-6 text-center">
            <div className="max-w-lg w-full bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-2xl">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                </div>

                <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    Ingresso VIP confirmado!
                </h1>

                <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                    Sua compra foi aprovada. Entre agora no grupo VIP do WhatsApp para receber os avisos e o acesso às gravações e ao certificado.
                </p>

                <a
                    href={VIP_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all w-full justify-center shadow-lg hover:shadow-green-500/20"
                >
                    <MessageCircle className="w-5 h-5" />
                    ENTRAR NO GRUPO VIP
                </a>

                <p className="mt-6 text-sm text-slate-400">
                    Guarde este link. Você também pode acessar o grupo VIP a qualquer momento clicando no botão acima.
                </p>
            </div>
        </div>
    );
};

export default ThankYouVip;
