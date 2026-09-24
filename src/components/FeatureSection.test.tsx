import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FeatureSection from './FeatureSection';

describe('FeatureSection', () => {
  it('renders the section heading', () => {
    render(<FeatureSection />);
    expect(screen.getByText(/Em quatro dias/)).toBeInTheDocument();
  });

  it('renders all 4 feature cards', () => {
    render(<FeatureSection />);
    expect(screen.getByText('Raciocínio clínico a partir de casos reais')).toBeInTheDocument();
    expect(screen.getByText('Diferentes recortes da mesma região')).toBeInTheDocument();
    expect(screen.getByText('Prática, não teoria isolada')).toBeInTheDocument();
    expect(screen.getByText('Certificado de participação')).toBeInTheDocument();
  });
});
