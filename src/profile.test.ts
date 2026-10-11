import { describe, expect, it } from 'vitest';
import { learnerInitials, parseUserData } from './App';

describe('learner avatar initials', () => {
  it('uses the learner name instead of a fixed letter', () => {
    expect(learnerInitials('Neeraj')).toBe('N');
  });

  it('uses up to two initials for a full name', () => {
    expect(learnerInitials('Neeraj Choithwani')).toBe('NC');
  });

  it('trims extra spaces and uses a guest initial when no name is set', () => {
    expect(learnerInitials('  Neeraj   Choithwani  ')).toBe('NC');
    expect(learnerInitials('   ')).toBe('G');
  });
});

describe('saved learner data recovery', () => {
  it('returns a safe first-visit state for malformed JSON', () => {
    const state = parseUserData('{not valid JSON');
    expect(state.onboarded).toBe(false);
    expect(state.answers).toEqual({});
    expect(state.goals).toEqual([]);
    expect(state.watch).toEqual(['NIFTY 50 Demo', 'Index Fund Alpha']);
  });

  it('returns a safe first-visit state for a non-object value', () => {
    expect(parseUserData('null').onboarded).toBe(false);
    expect(parseUserData('[]').answers).toEqual({});
  });

  it('keeps a valid profile and repairs malformed lists', () => {
    const state = parseUserData(JSON.stringify({
      version: 2,
      onboarded: true,
      answers: { name: 'Neeraj' },
      completed: 'not-a-list',
      watch: null,
      goals: {},
      holdings: [],
      tx: false,
    }));

    expect(state.answers.name).toBe('Neeraj');
    expect(state.completed).toEqual([]);
    expect(state.watch).toEqual([]);
    expect(state.goals).toEqual([]);
    expect(state.holdings).toEqual({});
    expect(state.tx).toEqual([]);
  });
});
