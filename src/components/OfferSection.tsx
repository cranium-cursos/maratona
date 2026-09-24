import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, Award } from 'lucide-react';
import Button from './ui/Button';

const OfferSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="offer" className="py-20 md:py-24 bg-secondary text-white relative overflow-hidden" aria-labelledby="offer-heading">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <h2 id="offer-heading" className="font-display text-2xl md:text-4xl font-bold mb-4">
                        Escolha como participar da Maratona
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                            <PlayCircle className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Free</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                            Participação ao vivo nos 4 dias, acesso ao grupo de WhatsApp da turma e materiais em PDF de cada encontro.
                        </p>
                        <Button
                            onClick={() => navigate('/proximos-passos?tier=free')}
                            size="lg"
                            fullWidth
                            className="bg-white/10 hover:bg-white/20 text-white"
                        >
                            PARTICIPAR GRATUITAMENTE
                        </Button>
                    </div>

                    <div className="bg-primary/10 border-2 border-primary rounded-2xl p-6 md:p-8 flex flex-col relative">
                        <span className="absolute -top-3 right-6 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Ingresso VIP
                        </span>
                        <div className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center mb-4">
                            <Award className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">VIP — R$ 10</h3>
                        <p className="text-slate-200 text-sm leading-relaxed mb-6 flex-1">
                            Tudo do Free + gravações de todos os encontros por 30 dias + certificado de participação de 5 horas, emitido automaticamente após a Maratona.
                        </p>
                        <Button
                            onClick={() => navigate('/proximos-passos?tier=vip')}
                            size="lg"
                            fullWidth
                            icon={<ArrowRight className="w-5 h-5" />}
                            className="flex-row-reverse"
                        >
                            GARANTIR INGRESSO VIP
                        </Button>
                    </div>
                </div>

                <p className="text-center text-xs md:text-sm text-slate-400">
                    Aulas de 05 a 08/10, às 20h, com conteúdo aberto até sexta 09/10. Checkout e regras completas do Ingresso VIP em confirmação.
                </p>
            </div>
        </section>
    );
};

export default OfferSection;
