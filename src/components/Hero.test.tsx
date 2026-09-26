import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Hero', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('DESCUBRA COMO 4 ESPECIALISTAS PENSAM CASOS REAIS DE CABEÇA E PESCOÇO EM 4 NOITES');
  });

  it('renders all 4 expert images', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByAltText('Marianne Trajano')).toBeInTheDocument();
    expect(screen.getByAltText('Samuel Lodovichi')).toBeInTheDocument();
    expect(screen.getByAltText('Rafael Tardin')).toBeInTheDocument();
    expect(screen.getByAltText('Érika Galiza')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText('VER FORMAS DE PARTICIPAR')).toBeInTheDocument();
  });

  it('renders schedule notice', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText(/Escolha entre participar/)).toBeInTheDocument();
  });
});
