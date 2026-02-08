import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ScheduleSection, { getDayStatus } from './ScheduleSection';

describe('ScheduleSection', () => {
  it('renders the section heading', () => {
    render(<ScheduleSection />);
    expect(screen.getByText('Cronograma da Maratona')).toBeInTheDocument();
  });

  it('renders all 7 schedule days', () => {
    render(<ScheduleSection />);
    expect(screen.getByText('DTM')).toBeInTheDocument();
    expect(screen.getByText('SISTEMA VESTIBULAR')).toBeInTheDocument();
    expect(screen.getByText('ZUMBIDO')).toBeInTheDocument();
    expect(screen.getByText('CEFALEIA')).toBeInTheDocument();
    expect(screen.getByText('CERVICAL')).toBeInTheDocument();
    expect(screen.getByText('DISFUNÇÃO OCULOMOTORA')).toBeInTheDocument();
    expect(screen.getByText(/INTELIGÊNCIA ARTIFICIAL/)).toBeInTheDocument();
  });

  it('renders the exclusive badge for day 7', () => {
    render(<ScheduleSection />);
    expect(screen.getByText('Exclusivo')).toBeInTheDocument();
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
    vi.setSystemTime(new Date(2026, 1, 8)); // 08/02/2026
    expect(getDayStatus('02/02')).toBe('past');
  });

  it('returns "today" for today\'s date', () => {
    vi.setSystemTime(new Date(2026, 1, 8));
    expect(getDayStatus('08/02')).toBe('today');
  });

  it('returns "future" for a date after today', () => {
    vi.setSystemTime(new Date(2026, 1, 8));
    expect(getDayStatus('10/02')).toBe('future');
  });
});
