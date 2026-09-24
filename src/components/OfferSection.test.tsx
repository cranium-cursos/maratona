import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import OfferSection from './OfferSection';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('OfferSection', () => {
  it('renders the section heading', () => {
    renderWithRouter(<OfferSection />);
    expect(screen.getByText('Escolha como participar da Maratona')).toBeInTheDocument();
  });

  it('renders the free tier CTA', () => {
    renderWithRouter(<OfferSection />);
    expect(screen.getByText('PARTICIPAR GRATUITAMENTE')).toBeInTheDocument();
  });

  it('renders the VIP price and CTA', () => {
    renderWithRouter(<OfferSection />);
    expect(screen.getByText('VIP — R$ 19,90')).toBeInTheDocument();
    expect(screen.getByText('GARANTIR INGRESSO VIP')).toBeInTheDocument();
  });

  it('does not mention the Portal as the primary offer', () => {
    renderWithRouter(<OfferSection />);
    expect(screen.queryByText(/CONHECER O PORTAL/)).not.toBeInTheDocument();
  });
});
