import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Hero', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText(/DISCUSSÃO DE CASOS REAIS EM/)).toBeInTheDocument();
  });

  it('renders all 3 expert images', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByAltText('Marianne Trajano')).toBeInTheDocument();
    expect(screen.getByAltText('Rafael Tardin')).toBeInTheDocument();
    expect(screen.getByAltText('Samuel Lodovichi')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText('GARANTIR VAGA NA MARATONA')).toBeInTheDocument();
  });

  it('renders parametrized schedule notice', () => {
    renderWithRouter(<Hero />);
    expect(screen.getAllByText(/em confirmação/).length).toBeGreaterThan(0);
  });
});
