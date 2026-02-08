import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/MARATONA FISIOTERAPIA/)).toBeInTheDocument();
    });
  });

  it('renders the landing page by default', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('QUERO PARTICIPAR GRATUITAMENTE')).toBeInTheDocument();
    });
  });
});
