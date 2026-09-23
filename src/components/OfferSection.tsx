import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Gift, ShieldCheck } from 'lucide-react';
import Button from './ui/Button';

const OfferSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="offer" className="py-20 md:py-24 bg-secondary text-white relative overflow-hidden" aria-labelledby="offer-heading">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <h2 id="offer-heading" className="font-display text-2xl md:text-4xl font-bold mb-4">
                        Condições da semana da Maratona
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                            <Gift className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Novas assinaturas do Portal</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Durante a semana da Maratona, novas assinaturas do Portal Cranium incluem TMF e uma condição para o XP.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Gravação do XP 2025</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Na compra do XP, a gravação do XP 2025 está incluída. Gravação avulsa: <strong className="text-white">R$ 10</strong>, acesso por 30 dias e certificado.
                        </p>
                    </div>
                </div>

                <p className="text-center text-xs md:text-sm text-slate-400 mb-8">
                    Condições válidas de segunda a sexta durante a Maratona. Elegibilidade, checkout e regras completas em confirmação.
                </p>

                <div className="flex justify-center">
                    <Button
                        onClick={() => navigate('/proximos-passos')}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        className="flex-row-reverse"
                    >
                        VER CONDIÇÕES DO PORTAL
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
