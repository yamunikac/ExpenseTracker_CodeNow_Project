import test from 'node:test';
import assert from 'node:assert/strict';
import { getBudgetStatus } from './budget.js';

test('detects warning state near budget limit', () => {
  const result = getBudgetStatus(850, 1000);

  assert.equal(result.spentPercent, 85);
  assert.equal(result.isWarning, true);
  assert.equal(result.isExceeded, false);
  assert.equal(result.remaining, 150);
});

test('detects exceeded budget state', () => {
  const result = getBudgetStatus(1200, 1000);

  assert.equal(result.spentPercent, 120);
  assert.equal(result.isWarning, false);
  assert.equal(result.isExceeded, true);
  assert.equal(result.remaining, -200);
});

test('returns safe values when no allowance is set', () => {
  const result = getBudgetStatus(0, 0);

  assert.equal(result.spentPercent, 0);
  assert.equal(result.isWarning, false);
  assert.equal(result.isExceeded, false);
  assert.equal(result.remaining, 0);
});
