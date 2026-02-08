import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Hero', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText(/MARATONA FISIOTERAPIA EM/)).toBeInTheDocument();
  });

  it('renders all 6 expert images', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByAltText('Rafael Tardin')).toBeInTheDocument();
    expect(screen.getByAltText('Gustavo Pacheco')).toBeInTheDocument();
    expect(screen.getByAltText('Bruna Cabugueira')).toBeInTheDocument();
    expect(screen.getByAltText('Samuel Lodovichi')).toBeInTheDocument();
    expect(screen.getByAltText('Leonardo Nascimento')).toBeInTheDocument();
    expect(screen.getByAltText('Thaynara Nascimento')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText('QUERO PARTICIPAR GRATUITAMENTE')).toBeInTheDocument();
  });

  it('renders social proof text', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByText(/\+2\.000 profissionais/)).toBeInTheDocument();
  });
});
