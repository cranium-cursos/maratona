import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies exclusive variant classes', () => {
    render(<Card variant="exclusive"><span>Exclusive</span></Card>);
    expect(screen.getByText('Exclusive').closest('div')).toHaveClass('bg-slate-900');
  });
});
