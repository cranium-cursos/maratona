import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import OfferSection from './OfferSection';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('OfferSection', () => {
  it('renders the section heading', () => {
    renderWithRouter(<OfferSection />);
    expect(screen.getByText('Condições da semana da Maratona')).toBeInTheDocument();
  });

  it('mentions the recording price', () => {
    renderWithRouter(<OfferSection />);
    expect(screen.getByText('R$ 10')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    renderWithRouter(<OfferSection />);
    expect(screen.getByText('VER CONDIÇÕES DO PORTAL')).toBeInTheDocument();
  });
});
