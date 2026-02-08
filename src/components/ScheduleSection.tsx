import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';
import { SCHEDULE } from '../data/constants';
import Card from './ui/Card';
import Badge from './ui/Badge';
import SectionHeading from './ui/SectionHeading';

export function getDayStatus(dateStr: string): 'past' | 'today' | 'future' {
    const [dd, mm] = dateStr.split('/').map(Number);
    const now = new Date();
    const eventDate = new Date(now.getFullYear(), mm - 1, dd);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (eventDate < today) return 'past';
    if (eventDate.getTime() === today.getTime()) return 'today';
    return 'future';
}

const ScheduleSection: React.FC = () => (
    <section id="schedule" className="py-20 relative overflow-hidden bg-white dark:bg-background-dark" aria-labelledby="schedule-heading">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <SectionHeading
                title="Cronograma da Maratona"
                subtitle="Durante 7 dias vamos abrir as portas do nosso consultório e revelar como atendemos nossos pacientes:"
            />

            <div className="space-y-4 md:space-y-6">
                {SCHEDULE.map((day, i) => {
                    const status = getDayStatus(day.date);
                    const isPast = status === 'past';
                    const isToday = status === 'today';

                    return (
                        <Card
                            key={i}
                            variant={day.isExclusive ? 'exclusive' : 'default'}
                            className={`relative flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 ${isPast && !day.isExclusive ? 'opacity-60' : ''} ${isToday ? 'ring-2 ring-primary' : ''}`}
                        >
                            <div className={`md:w-32 flex flex-col justify-center items-center md:items-start md:border-r pr-6 ${day.isExclusive ? 'border-slate-700' : 'border-slate-100 dark:border-slate-700'}`}>
                                <div className={`text-3xl font-black transition-colors ${day.isExclusive ? 'text-slate-700 group-hover:text-white' : 'text-slate-200 dark:text-slate-700 group-hover:text-primary'}`}>
                                    {day.number}
                                </div>
                                <div className="text-primary font-bold text-lg leading-tight">
                                    {day.date}
                                    <span className={`block text-xs font-normal mt-0.5 ${day.isExclusive ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                                        ({day.weekday})
                                    </span>
                                </div>
                                <div className={`text-xs font-medium uppercase tracking-wide mt-1 ${day.isExclusive ? 'text-slate-400' : 'text-slate-400'}`}>
                                    {day.time}
                                </div>
                                {isPast && (
                                    <div className="flex items-center gap-1 mt-2">
                                        <CheckCircle className="w-3 h-3 text-green-500" aria-hidden="true" />
                                        <span className="text-xs font-medium text-green-500 uppercase">Realizado</span>
                                    </div>
                                )}
                                {isToday && (
                                    <Badge className="mt-2 bg-primary/20 text-primary border-primary/20 animate-pulse">Hoje</Badge>
                                )}
                            </div>

                            <div className="flex-1 flex flex-col justify-center py-2">
                                {day.isExclusive && (
                                    <div className="inline-flex items-center gap-2 mb-2">
                                        <Badge className="bg-primary/20 text-primary border-primary/20">Exclusivo</Badge>
                                        <Sparkles className="text-primary w-4 h-4 animate-pulse" aria-hidden="true" />
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
                        </Card>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ScheduleSection;
