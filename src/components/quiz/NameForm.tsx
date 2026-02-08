import React, { useState } from 'react';
import Button from '../ui/Button';
import { Award } from 'lucide-react';

interface NameFormProps {
  onSubmit: (name: string) => void;
}

const NameForm: React.FC<NameFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const trimmed = name.trim();
  const isValid = trimmed.length >= 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(trimmed);
    }
  };

  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
        <Award className="w-10 h-10 text-primary" />
      </div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Quase lá!
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Digite seu nome completo para o certificado.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label htmlFor="certificate-name" className="sr-only">
          Nome completo
        </label>
        <input
          id="certificate-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          aria-describedby={name.length > 0 && !isValid ? 'name-error' : undefined}
          aria-invalid={name.length > 0 && !isValid}
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none transition-colors text-center text-lg"
          autoFocus
        />
        {name.length > 0 && !isValid && (
          <p id="name-error" role="alert" className="text-red-500 text-sm mt-2">
            O nome deve ter pelo menos 3 caracteres.
          </p>
        )}
        <Button
          type="submit"
          disabled={!isValid}
          fullWidth
          className="mt-4"
          icon={<Award className="w-5 h-5" />}
        >
          Gerar Certificado
        </Button>
      </form>
    </div>
  );
};

export default NameForm;
