export type GoalLike = { target: number; saved: number; date: string };
export type HoldingLike = { qty: number; cost: number };
export type PricedAsset = { id: string; price: number };

/** Whole calendar months available, rounded up for a partial month. */
export function monthsUntil(date: string, now = new Date()): number {
  const target = new Date(`${date}T00:00:00`);
  if (!Number.isFinite(target.getTime()) || target <= new Date(now.getFullYear(), now.getMonth(), now.getDate())) return 0;
  return Math.max(1, (target.getFullYear() - now.getFullYear()) * 12 + target.getMonth() - now.getMonth() + (target.getDate() > now.getDate() ? 1 : 0));
}

/** Savings-only estimate. Null means the target date is today, invalid, or past. */
export function monthlySavings(goal: GoalLike, now = new Date()): number | null {
  const remaining = Math.max(0, goal.target - goal.saved);
  if (remaining === 0) return 0;
  const months = monthsUntil(goal.date, now);
  return months === 0 ? null : Math.ceil(remaining / months);
}

export function portfolioValue(cash: number, holdings: Record<string, HoldingLike>, assets: PricedAsset[]): number {
  return cash + Object.entries(holdings).reduce((sum, [id, holding]) => sum + (assets.find(asset => asset.id === id)?.price ?? 0) * holding.qty, 0);
}

export function hypotheticalPnl(holdings: Record<string, HoldingLike>, assets: PricedAsset[]): number {
  return Object.entries(holdings).reduce((sum, [id, holding]) => sum + ((assets.find(asset => asset.id === id)?.price ?? 0) - holding.cost) * holding.qty, 0);
}

export function buyHolding(holding: HoldingLike | undefined, quantity: number, price: number): HoldingLike {
  const previous = holding ?? { qty: 0, cost: 0 };
  if (!Number.isInteger(quantity) || quantity <= 0 || !Number.isFinite(price) || price <= 0) throw new Error('Quantity and price must be positive.');
  const nextQty = previous.qty + quantity;
  return { qty: nextQty, cost: (previous.qty * previous.cost + quantity * price) / nextQty };
}

export function sellHolding(holding: HoldingLike, quantity: number): HoldingLike | null {
  if (!Number.isInteger(quantity) || quantity <= 0 || quantity > holding.qty) throw new Error('Sale quantity exceeds available holdings.');
  return holding.qty === quantity ? null : { ...holding, qty: holding.qty - quantity };
}
