import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThankYouVip from './ThankYouVip';

describe('ThankYouVip', () => {
  it('renders the page title', () => {
    render(<ThankYouVip />);
    expect(screen.getByText('Ingresso VIP confirmado!')).toBeInTheDocument();
  });

  it('renders WhatsApp VIP group CTA', () => {
    render(<ThankYouVip />);
    const link = screen.getByText('ENTRAR NO GRUPO VIP').closest('a');
    expect(link).toHaveAttribute('href', 'https://chat.whatsapp.com/L68vzdfwfwU1ihALvq8yEw?mode=gi_t');
  });
});
