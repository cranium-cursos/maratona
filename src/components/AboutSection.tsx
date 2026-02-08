import React from 'react';
import { EXPERTS } from '../data/constants';

const AboutSection: React.FC = () => {
    const samuel = EXPERTS.find(e => e.name === "Samuel Lodovichi");
    return (
        <section id="about" className="py-20 md:py-24 bg-gradient-to-b from-secondary to-[#0e2329] text-white relative overflow-hidden" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
                <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
                    <div>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                            O idealizador da maratona:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                                Dr. Samuel Lodovichi.
                            </span>
                        </h2>
                        <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>
                    <div className="text-slate-300 text-base md:text-lg leading-relaxed font-light space-y-4">
                        <p>Samuel Lodovichi é fisioterapeuta há mais de uma década.</p>
                        <p>Com Mestrado na área de cabeça e pescoço pela USP, e professor universitário, hoje é membro da Sociedade Brasileira de Cefaleias.</p>
                        <p>Depois de atender por anos pacientes com dores cervicais e cefaleias, fundou a Cranium Cursos, a maior escola de cabeça e pescoço do Brasil.</p>
                        <p>Na Maratona, vai trazer as maiores referências da área para te proporcionar uma verdadeira imersão na prática clínica.</p>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl rounded-full"></div>
                    <div className="relative rounded-2xl p-1.5 bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm">
                        <img
                            alt="Dr. Samuel Lodovichi"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/5] object-top"
                            src={samuel?.imageUrl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
