import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Footer', () => {
  it('renders the CTA button', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('ENTRAR NO GRUPO VIP')).toBeInTheDocument();
  });

  it('renders copyright with 2026', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('© 2026 Cranium.')).toBeInTheDocument();
  });

  it('renders legal links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Termos')).toHaveAttribute('href', 'https://craniumcursos.com.br/termos-de-uso');
    expect(screen.getByText('Privacidade')).toHaveAttribute('href', 'https://craniumcursos.com.br/politica-de-privacidade');
  });

  it('does not have any dead links (#)', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).not.toHaveAttribute('href', '#');
    });
  });
});
