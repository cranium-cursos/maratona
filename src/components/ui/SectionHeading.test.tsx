import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionHeading from './SectionHeading';

describe('SectionHeading', () => {
  it('renders title as h2', () => {
    render(<SectionHeading title="Test Title" />);
    const heading = screen.getByText('Test Title');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeading title="Title" subtitle="Sub text" />);
    expect(screen.getByText('Sub text')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = render(<SectionHeading title="Only Title" />);
    expect(screen.getByText('Only Title')).toBeInTheDocument();
    expect(container.querySelectorAll('p')).toHaveLength(0);
  });

  it('renders decorative divider', () => {
    const { container } = render(<SectionHeading title="Title" />);
    const divider = container.querySelector('.bg-gradient-to-r');
    expect(divider).toBeInTheDocument();
  });
});
