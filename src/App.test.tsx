import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/CASOS REAIS DE CABEÇA E PESCOÇO EM 4 NOITES/);
    });
  });

  it('renders the landing page by default', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getAllByText(/VER FORMAS DE PARTICIPAR/).length).toBeGreaterThan(0);
    });
  });
});
