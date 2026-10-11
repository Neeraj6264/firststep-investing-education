import { describe, expect, it } from 'vitest';
import { buyHolding, hypotheticalPnl, monthlySavings, portfolioValue, sellHolding } from './finance';

describe('savings-only goal estimate', () => {
  const now = new Date(2026, 0, 15);
  it('splits the remaining target across available months and rounds up', () => expect(monthlySavings({ target: 12000, saved: 0, date: '2027-01-15' }, now)).toBe(1000));
  it('returns zero for completed goals', () => expect(monthlySavings({ target: 1000, saved: 1000, date: '2025-01-01' }, now)).toBe(0));
  it('returns null for an invalid or past date', () => {
    expect(monthlySavings({ target: 1000, saved: 0, date: 'bad-date' }, now)).toBeNull();
    expect(monthlySavings({ target: 1000, saved: 0, date: '2025-01-01' }, now)).toBeNull();
  });
});

describe('virtual portfolio calculations', () => {
  const assets = [{ id: 'sample', price: 120 }];
  it('updates weighted average cost on buys', () => expect(buyHolding({ qty: 2, cost: 100 }, 2, 120)).toEqual({ qty: 4, cost: 110 }));
  it('prevents sales above quantity and removes fully sold holding', () => {
    expect(() => sellHolding({ qty: 1, cost: 100 }, 2)).toThrow();
    expect(sellHolding({ qty: 1, cost: 100 }, 1)).toBeNull();
  });
  it('uses the same sample price for portfolio value and hypothetical P/L', () => {
    const holdings = { sample: { qty: 2, cost: 100 } };
    expect(portfolioValue(500, holdings, assets)).toBe(740);
    expect(hypotheticalPnl(holdings, assets)).toBe(40);
  });
});
