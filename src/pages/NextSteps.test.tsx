import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NextSteps from './NextSteps';

describe('NextSteps', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the page title', () => {
    render(<NextSteps />);
    expect(screen.getByText('Você está quase lá!')).toBeInTheDocument();
  });

  it('renders WhatsApp CTA button', () => {
    render(<NextSteps />);
    expect(screen.getByText('ENTRAR AGORA')).toBeInTheDocument();
  });

  it('shows countdown starting at 3', () => {
    render(<NextSteps />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('does not have console.log calls', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(<NextSteps />);
    expect(consoleSpy).not.toHaveBeenCalledWith('Pixel Fired');
    consoleSpy.mockRestore();
  });
});
