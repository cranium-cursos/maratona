import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders Dr. Samuel info', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Dr\. Samuel Lodovichi/)).toBeInTheDocument();
  });

  it('renders Samuel image', () => {
    render(<AboutSection />);
    expect(screen.getByAltText('Dr. Samuel Lodovichi')).toBeInTheDocument();
  });

  it('renders bio text', () => {
    render(<AboutSection />);
    expect(screen.getByText(/fisioterapeuta há mais de uma década/)).toBeInTheDocument();
  });
});
