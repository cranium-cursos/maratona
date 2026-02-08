import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FeatureSection from './FeatureSection';

describe('FeatureSection', () => {
  it('renders the section heading', () => {
    render(<FeatureSection />);
    expect(screen.getByText(/Em apenas 7 dias/)).toBeInTheDocument();
  });

  it('renders all 4 feature cards', () => {
    render(<FeatureSection />);
    expect(screen.getByText('Como manejar as principais patologias')).toBeInTheDocument();
    expect(screen.getByText('Abordagem prática')).toBeInTheDocument();
    expect(screen.getByText('Desenvolver o raciocínio clínico')).toBeInTheDocument();
    expect(screen.getByText('Com casos clínicos reais')).toBeInTheDocument();
  });
});
