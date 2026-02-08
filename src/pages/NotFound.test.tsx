import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import NotFound from './NotFound';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('NotFound', () => {
  it('renders 404 text', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders message and link to home', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
    expect(screen.getByText('Voltar ao início')).toBeInTheDocument();
  });

  it('navigates to home when button is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter(<NotFound />);
    await user.click(screen.getByText('Voltar ao início'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
