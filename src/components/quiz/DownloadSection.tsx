import React from 'react';
import Button from '../ui/Button';
import { Download, ExternalLink, BookOpen, Users, Bot, Award } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

interface DownloadSectionProps {
  pdfBytes: Uint8Array;
  userName: string;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({
  pdfBytes,
  userName,
}) => {
  const handleDownload = () => {
    trackEvent('certificate_download');
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeName = userName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    link.download = `certificado-maratona-cranium-${safeName}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = [
    { icon: BookOpen, value: '+38', label: 'Cursos' },
    { icon: Users, value: '+50', label: 'Professores' },
    { icon: Bot, value: 'IA', label: 'Mentora' },
    { icon: Award, value: '+170', label: 'Aulas gravadas' },
  ];

  return (
    <div className="space-y-10">
      {/* Certificate Download */}
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Download className="w-10 h-10 text-green-600 dark:text-green-400" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Certificado pronto!
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Seu certificado foi gerado com sucesso. Clique abaixo para baixar.
        </p>

        <Button
          onClick={handleDownload}
          size="lg"
          icon={<Download className="w-5 h-5" />}
        >
          Baixar Certificado
        </Button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-slate-800 px-4 text-xs font-bold uppercase tracking-widest text-primary">
            Próximo passo
          </span>
        </div>
      </div>

      {/* Sales Section */}
      <div className="rounded-2xl border border-secondary/20 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-secondary to-accent px-6 py-8 sm:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display leading-tight">
            Você concluiu 7 casos clínicos.<br className="hidden sm:block" />
            Imagine o que 38 cursos completos fariam pela sua carreira.
          </h3>
          <p className="text-primary/90 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Acesso imediato a +38 cursos em cabeça e pescoço, +170 aulas ao vivo gravadas, 1 curso novo todo mês, IA mentora especializada e certificado em cada curso — por menos de R$1,32 por dia.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-200 dark:border-slate-700">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center py-5 px-3 ${
                i < stats.length - 1 ? 'border-r border-slate-200 dark:border-slate-700' : ''
              } ${i < 2 ? 'border-b sm:border-b-0 border-slate-200 dark:border-slate-700' : ''}`}
            >
              <stat.icon className="w-5 h-5 text-primary mb-2" aria-hidden="true" />
              <span className="text-2xl font-bold text-secondary dark:text-white">{stat.value}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Body copy */}
        <div className="px-6 py-8 sm:px-8 bg-white dark:bg-slate-800/50">
          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-4 max-w-xl mx-auto leading-relaxed">
            <p>
              Nos últimos 7 dias você provou algo: que fisioterapia em cabeça e pescoço é o caminho que você quer seguir. A Maratona foi o primeiro passo. <strong className="text-secondary dark:text-white">O Portal Cranium é o próximo.</strong>
            </p>
            <p>
              São mais de 50 professores especialistas, aulas ao vivo todo mês e uma IA mentora treinada para responder suas dúvidas clínicas. Tudo por <strong className="text-secondary dark:text-white">R$39,70/mês</strong> — menos do que você gasta em um almoço.
            </p>
            <p className="text-secondary dark:text-primary font-medium">
              Quem completou a Maratona já está na frente de 90% dos fisioterapeutas que nunca se especializam. A pergunta é: você vai continuar?
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button
              size="lg"
              icon={<ExternalLink className="w-5 h-5" />}
              onClick={() => {
                trackEvent('portal_checkout_click');
                window.open('https://lp.craniumcursos.com.br/checkout/portal-cranium?utm_source=certificado', '_blank', 'noopener,noreferrer');
              }}
            >
              QUERO ACESSAR O PORTAL AGORA
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<ExternalLink className="w-4 h-4" />}
              onClick={() => {
                trackEvent('portal_landing_click');
                window.open('https://lp.craniumcursos.com.br/campaign/portal-certificado', '_blank', 'noopener,noreferrer');
              }}
            >
              Conhecer o Portal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
