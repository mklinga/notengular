export function head<T>(xs: T[]): T {
  return xs[0];
}

export function tail<T>(xs: T[]): T[] {
  return xs.slice(1);
}
