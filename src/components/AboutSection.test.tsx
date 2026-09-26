import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders Dr. Samuel info', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Dr\. Samuel Lodovichi/)).toBeInTheDocument();
  });

  it('renders Samuel image', () => {
    render(<AboutSection />);
    expect(screen.getByAltText('Dr. Samuel Lodovichi')).toBeInTheDocument();
  });

  it('renders bio text', () => {
    render(<AboutSection />);
    expect(screen.getByText('Samuel Lodovichi é fisioterapeuta há 18 anos.')).toBeInTheDocument();
    expect(screen.getByText(/mestrado focado no papel do exercício na migrânea pela USP/)).toBeInTheDocument();
    expect(screen.getByText(/Comitê de Cefaleia da Sociedade Brasileira para o Estudo da Dor/)).toBeInTheDocument();
    expect(screen.getByText(/diferentes áreas da fisioterapia em cabeça e pescoço/)).toBeInTheDocument();
  });
});
