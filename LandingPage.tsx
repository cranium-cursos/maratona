import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EXPERTS, FEATURES, SCHEDULE } from './constants';

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className="py-4 md:py-6 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <img
                    alt="Cranium Logo"
                    className="h-8 md:h-10 dark:invert"
                    src="/images/portal-cranium-logo.webp"
                />
                <button
                    onClick={() => navigate('/proximos-passos')}
                    className="hidden md:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all text-sm tracking-wide"
                >
                    QUERO ME INSCREVER
                </button>
            </div>
        </header>
    );
};

const Hero: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,193,180,0.15)_0%,rgba(255,255,255,0)_70%)] opacity-80"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <div className="mb-10 relative group w-full max-w-4xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-slate-100 dark:bg-slate-900 aspect-[16/9] md:aspect-[21/9]">
                        <div className="absolute inset-0 grid grid-cols-6 h-full">
                            {EXPERTS.map((expert, i) => (
                                <div key={i} className="h-full relative overflow-hidden group/item">
                                    <img
                                        alt={expert.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/item:scale-110 grayscale hover:grayscale-0"
                                        src={expert.imageUrl}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1 md:p-2">
                                        <p className="text-white text-[8px] md:text-xs font-bold text-center tracking-tight">{expert.shortName}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-secondary/90 to-transparent flex items-end justify-center pb-4 pointer-events-none">
                            <p className="text-white/90 text-[10px] md:text-sm font-medium tracking-wider uppercase flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-base md:text-lg">verified</span>
                                Mentores Especialistas Cranium
                            </p>
                        </div>
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm mb-6">
                    <span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-secondary dark:text-white uppercase">
                        ONLINE E GRATUITO | DIAS 02/02 A 10/02
                    </span>
                </div>

                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-secondary dark:text-white leading-tight mb-6">
                    MARATONA FISIOTERAPIA EM <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-accent">
                        CABEÇA E PESCOÇO
                    </span>
                </h1>

                <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 px-2">
                    Aprenda como os especialistas tratam seus pacientes de cabeça e pescoço — baseado em casos clínicos reais.
                    7 dias discutindo sobre <strong className="text-secondary dark:text-primary font-bold">DTM</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> sistema vestibular</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> zumbido</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> cefaleia</strong>,
                    <strong className="text-secondary dark:text-primary font-bold"> cervical</strong> e
                    <strong className="text-secondary dark:text-primary font-bold"> disfunção oculomotora</strong>.
                </p>

                <button
                    onClick={() => navigate('/proximos-passos')}
                    className="cursor-pointer group relative inline-flex items-center justify-center w-full md:w-auto px-8 py-4 font-bold text-white transition-all duration-200 bg-primary font-display rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-primary/90 shadow-lg shadow-primary/30 overflow-hidden"
                >
                    <span className="relative flex items-center gap-3">
                        QUERO PARTICIPAR GRATUITAMENTE
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                </button>

                <div className="mt-8 flex items-center justify-center space-x-4 opacity-80">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <img
                                key={i}
                                alt="Physio Participant"
                                className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark object-cover"
                                src={`https://picsum.photos/100/100?random=${i + 10}`}
                            />
                        ))}
                    </div>
                    <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">Junte-se a +2.000 profissionais</p>
                </div>
            </div>
        </section>
    );
};

const FeatureSection: React.FC = () => (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
                    Em apenas 7 dias você vai aprender:
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {FEATURES.map((feature, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl group border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.colorClass}`}>
                            <span className="material-symbols-outlined">{feature.icon}</span>
                        </div>
                        <h3 className="font-bold text-lg text-secondary dark:text-white mb-3">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ScheduleSection: React.FC = () => (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-background-dark">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">Cronograma da Maratona</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    Durante 7 dias vamos abrir as portas do nosso consultório e revelar como atendemos nossos pacientes:
                </p>
            </div>

            <div className="space-y-4 md:space-y-6">
                {SCHEDULE.map((day, i) => (
                    <div
                        key={i}
                        className={`group relative flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border transition-all duration-300 ${day.isExclusive
                            ? 'bg-slate-900 border-slate-700 shadow-2xl'
                            : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/30'
                            }`}
                    >
                        <div className={`md:w-32 flex flex-col justify-center items-center md:items-start md:border-r pr-6 ${day.isExclusive ? 'border-slate-700' : 'border-slate-100 dark:border-slate-700'}`}>
                            <div className={`text-3xl font-black transition-colors ${day.isExclusive ? 'text-slate-700 group-hover:text-white' : 'text-slate-200 dark:text-slate-700 group-hover:text-primary'}`}>
                                {day.number}
                            </div>
                            <div className="text-primary font-bold text-lg leading-tight">
                                {day.date}
                                <span className={`block text-[10px] font-normal mt-0.5 ${day.isExclusive ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                                    ({day.weekday})
                                </span>
                            </div>
                            <div className={`text-[10px] font-medium uppercase tracking-wide mt-1 ${day.isExclusive ? 'text-slate-400' : 'text-slate-400'}`}>
                                {day.time}
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center py-2">
                            {day.isExclusive && (
                                <div className="inline-flex items-center gap-2 mb-2">
                                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase border border-primary/20">Exclusivo</span>
                                    <span className="material-symbols-outlined text-primary text-sm animate-pulse">auto_awesome</span>
                                </div>
                            )}
                            <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors ${day.isExclusive ? 'text-white' : 'text-secondary dark:text-white group-hover:text-primary'}`}>
                                {day.title}
                            </h3>
                            <ul className={`text-sm space-y-2 mb-0 ${day.isExclusive ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                {day.topics.map((topic, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`md:w-64 flex items-center gap-4 p-3 rounded-xl border ${day.isExclusive
                            ? 'bg-slate-800/50 border-slate-600'
                            : 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-700'
                            }`}>
                            <div className="relative flex-shrink-0">
                                <img
                                    alt={day.expert.name}
                                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ${day.isExclusive ? 'ring-primary' : 'ring-white dark:ring-slate-700'}`}
                                    src={day.expert.imageUrl}
                                />
                            </div>
                            <div>
                                <p className={`font-bold text-sm md:text-base ${day.isExclusive ? 'text-white' : 'text-secondary dark:text-white'}`}>
                                    {day.expert.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const AboutSection: React.FC = () => {
    const samuel = EXPERTS.find(e => e.name === "Samuel Lodovichi");
    return (
        <section className="py-20 md:py-24 bg-gradient-to-b from-secondary to-[#0e2329] text-white relative overflow-hidden">
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

const Footer: React.FC = () => {
    const navigate = useNavigate();
    return (
        <footer className="py-12 md:py-16 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div id="register" className="mb-12">
                    <h3 className="text-lg md:text-2xl font-bold text-secondary dark:text-white mb-8 leading-relaxed px-2">
                        Toque no botão, entre no grupo de whatsapp para participar e ter acesso ao material complementar gratuitamente:
                    </h3>
                    <button
                        onClick={() => navigate('/proximos-passos')}
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 w-full md:w-auto justify-center"
                    >
                        <span className="material-symbols-outlined">chat</span>
                        ENTRAR NO GRUPO VIP
                    </button>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 opacity-80">
                        <img
                            alt="Cranium"
                            className="h-6 dark:invert"
                            src="/images/portal-cranium-logo.webp"
                        />
                        <span className="text-xs text-slate-500">© 2024 Cranium.</span>
                    </div>
                    <div className="flex gap-6 text-xs md:text-sm text-slate-400 font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Termos</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">photo_camera</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <main>
                <Hero />
                <FeatureSection />
                <ScheduleSection />
                <AboutSection />
            </main>
            <Footer />

            <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-[60] bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-700">
                <button
                    onClick={() => navigate('/proximos-passos')}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-all"
                >
                    INSCREVER-SE GRATUITAMENTE
                </button>
            </div>
        </>
    );
};

export default LandingPage;
