import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ScheduleSection, { getDayStatus } from './ScheduleSection';

describe('ScheduleSection', () => {
  it('renders the section heading', () => {
    render(<ScheduleSection />);
    expect(screen.getByText('Programação da Maratona')).toBeInTheDocument();
  });

  it('renders all 4 schedule days', () => {
    render(<ScheduleSection />);
    expect(screen.getAllByText("SISTEMA VESTIBULAR").length).toBeGreaterThan(0);
    expect(screen.getAllByText("DTM").length).toBeGreaterThan(0);
    expect(screen.getAllByText('[ÁREA EM CONFIRMAÇÃO]').length).toBe(2);
  });

  it('renders confirmed guest names', () => {
    render(<ScheduleSection />);
    expect(screen.getByText('Marianne Trajano')).toBeInTheDocument();
    expect(screen.getByText('Rafael Tardin')).toBeInTheDocument();
    expect(screen.getByText('Samuel Lodovichi')).toBeInTheDocument();
  });
});

describe('getDayStatus', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns "past" for a date before today', () => {
    vi.setSystemTime(new Date(2026, 9, 8)); // 08/10/2026
    expect(getDayStatus('05/10')).toBe('past');
  });

  it('returns "today" for today\'s date', () => {
    vi.setSystemTime(new Date(2026, 9, 8));
    expect(getDayStatus('08/10')).toBe('today');
  });

  it('returns "future" for a date after today', () => {
    vi.setSystemTime(new Date(2026, 9, 1));
    expect(getDayStatus('08/10')).toBe('future');
  });
});
