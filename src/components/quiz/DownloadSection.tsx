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

      <div className="mt-10 p-6 rounded-2xl bg-secondary/5 dark:bg-secondary/20 border border-secondary/20">
        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
          Continue sua jornada no Portal Cranium
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Acesse conteúdos exclusivos, cursos e mentorias para elevar sua
          prática clínica.
        </p>
        <Button
          variant="secondary"
          size="sm"
          icon={<ExternalLink className="w-4 h-4" />}
          onClick={() => {
            trackEvent('portal_cranium_click');
            window.open('https://portalcranium.com.br', '_blank', 'noopener,noreferrer');
          }}
        >
          Conhecer o Portal
        </Button>
      </div>
    </div>
  );
};

export default DownloadSection;
