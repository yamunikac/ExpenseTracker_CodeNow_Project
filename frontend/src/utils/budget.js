export function getBudgetStatus(totalSpent, allowance) {
  const safeSpent = Number(totalSpent) || 0;
  const safeAllowance = Number(allowance) || 0;
  const remaining = safeAllowance - safeSpent;
  const spentPercent = safeAllowance > 0 ? (safeSpent / safeAllowance) * 100 : 0;

  const isWarning = spentPercent >= 80 && spentPercent < 100;
  const isExceeded = spentPercent >= 100;

  let progressColor = '#22c55e';
  if (spentPercent >= 80 && spentPercent < 100) {
    progressColor = '#f59e0b';
  } else if (spentPercent >= 100) {
    progressColor = '#ef4444';
  }

  return {
    totalSpent: safeSpent,
    allowance: safeAllowance,
    remaining,
    spentPercent,
    isWarning,
    isExceeded,
    progressColor,
  };
}
