import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Header', () => {
  it('renders the Cranium logo', () => {
    renderWithRouter(<Header />);
    expect(screen.getByAltText('Cranium Logo')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('QUERO ME INSCREVER')).toBeInTheDocument();
  });
});
