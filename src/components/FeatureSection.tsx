import React from 'react';
import { Stethoscope, Pointer, Brain, ClipboardCheck, LucideIcon } from 'lucide-react';
import { FEATURES } from '../data/constants';
import Card from './ui/Card';
import SectionHeading from './ui/SectionHeading';

const ICON_MAP: Record<string, LucideIcon> = {
  medical_services: Stethoscope,
  touch_app: Pointer,
  psychology: Brain,
  assignment_turned_in: ClipboardCheck,
};

const FeatureSection: React.FC = () => (
    <section id="features" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Em apenas 7 dias você vai aprender:" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {FEATURES.map((feature, i) => {
                    const Icon = ICON_MAP[feature.icon] || Stethoscope;
                    return (
                        <Card key={i} variant="feature" className="p-8">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.colorClass}`}>
                                <Icon className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <h3 className="font-bold text-lg text-secondary dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                        </Card>
                    );
                })}
            </div>
        </div>
    </section>
);

export default FeatureSection;
