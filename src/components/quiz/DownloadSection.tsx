import React from 'react';
import Button from '../ui/Button';
import { Download, ExternalLink } from 'lucide-react';
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

  return (
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

      <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 border border-secondary/20">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Você concluiu 7 casos clínicos. Imagine o que 38 cursos completos fariam pela sua carreira.
        </h3>
        <p className="text-sm font-medium text-primary dark:text-primary mb-6">
          Acesso imediato a +38 cursos em cabeça e pescoço, +170 aulas ao vivo gravadas, 1 curso novo todo mês, IA mentora especializada e certificado em cada curso — por menos de R$1,32 por dia.
        </p>

        <div className="text-sm text-slate-600 dark:text-slate-300 mb-6 space-y-3 text-left">
          <p>
            Nos últimos 7 dias você provou algo: que fisioterapia em cabeça e pescoço é o caminho que você quer seguir. A Maratona foi o primeiro passo. O Portal Cranium é o próximo.
          </p>
          <p>
            São mais de 50 professores especialistas, aulas ao vivo todo mês e uma IA mentora treinada para responder suas dúvidas clínicas. Tudo por R$39,70/mês — menos do que você gasta em um almoço.
          </p>
          <p>
            Quem completou a Maratona já está na frente de 90% dos fisioterapeutas que nunca se especializam. A pergunta é: você vai continuar?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
  );
};

export default DownloadSection;
