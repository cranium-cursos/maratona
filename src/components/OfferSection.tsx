import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle, Award, Check } from 'lucide-react';
import Button from './ui/Button';

const FREE_BENEFITS = [
    'Participação ao vivo nos 4 dias',
    'Acesso ao grupo de WhatsApp da turma',
    'Materiais em PDF de cada encontro',
];

const VIP_BENEFITS = [
    'Tudo do Free',
    'Gravações de todos os encontros por 30 dias',
    'Certificado de participação de 5 horas, emitido automaticamente',
];

const OfferSection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="offer" className="py-20 md:py-24 bg-secondary text-white relative overflow-visible" aria-labelledby="offer-heading">
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[radial-gradient(circle_at_top_right,rgba(16,193,180,0.12)_0%,rgba(30,72,83,0)_70%)] pointer-events-none" aria-hidden="true"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <p className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase mb-3">Duas formas de participar</p>
                    <h2 id="offer-heading" className="font-display text-2xl md:text-4xl font-bold mb-4">
                        Escolha como participar da Maratona
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>

                <p className="text-center text-sm md:text-base text-slate-300 mb-8 max-w-xl mx-auto">
                    Aulas ao vivo de 05 a 08/10, às 20h, com conteúdo aberto até sexta 09/10.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 mb-8 items-stretch">
                    {/* FREE: rota de entrada neutra */}
                    <div className="bg-white/[0.04] border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col">
                        <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                            <PlayCircle className="w-5 h-5 text-white/80" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-base uppercase tracking-wide text-white/70 mb-1">Free</h3>
                        <p className="font-display text-3xl md:text-4xl font-black mb-5">Gratuito</p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {FREE_BENEFITS.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200 leading-snug">
                                    <Check className="w-4 h-4 text-white/50 mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button
                            onClick={() => navigate('/proximos-passos?tier=free')}
                            size="lg"
                            fullWidth
                            className="bg-transparent border-2 border-white/30 hover:border-white/60 hover:bg-white/5 text-white"
                        >
                            PARTICIPAR GRATUITAMENTE
                        </Button>
                    </div>

                    {/* VIP: escolha recomendada */}
                    <div className="bg-primary/[0.08] border-2 border-primary rounded-2xl p-6 md:p-8 pt-9 flex flex-col relative shadow-[0_8px_40px_-8px_rgba(16,193,180,0.35)]">
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-secondary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                            Recomendado · Ingresso VIP
                        </span>
                        <div className="w-11 h-11 rounded-lg bg-primary/25 flex items-center justify-center mb-5">
                            <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-base uppercase tracking-wide text-primary mb-1">VIP</h3>
                        <p className="font-display text-3xl md:text-4xl font-black mb-5">
                            R$ 10 <span className="text-sm md:text-base font-medium text-slate-300 align-middle">acesso por 30 dias</span>
                        </p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {VIP_BENEFITS.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-100 leading-snug">
                                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button
                            onClick={() => { window.location.href = 'https://lp.craniumcursos.com.br/pay/maratonaout26-ingresso-vip'; }}
                            size="lg"
                            fullWidth
                            icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
                            className="flex-row-reverse"
                        >
                            GARANTIR INGRESSO VIP
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
