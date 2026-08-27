/** Pure dimensional meeting R(m,n) = n^n / m^m. */
export function meeting(m: number, n: number): number {
  return n ** n / m ** m;
}

/** Finished scale a_k = k^k. */
export function scale(k: number): number {
  return k ** k;
}

/** Scalar potential s_k = k ln k. L(m,n) = s_n − s_m = ln R(m,n). */
export function potential(k: number): number {
  if (k <= 0) return Number.NaN;
  if (k === 1) return 0;
  return k * Math.log(k);
}

export function displacement(m: number, n: number): number {
  return potential(n) - potential(m);
}

export function logBase(x: number, base: number): number {
  return Math.log(x) / Math.log(base);
}

export function pretty(x: number): string {
  if (!Number.isFinite(x)) return "—";
  if (Math.abs(x) < 1e-15) return "0";
  if (Math.abs(x - 1) < 1e-12) return "1";
  if (Math.abs(x + 1) < 1e-12) return "−1";
  if (x < 0) return `−${pretty(-x)}`;
  const inv = 1 / x;
  if (x < 1 && Math.abs(inv - Math.round(inv)) < 1e-8 && inv > 1) {
    return `1/${Math.round(inv)}`;
  }
  if (Math.abs(x - Math.round(x)) < 1e-8 && Math.abs(x) < 1e12) {
    return String(Math.round(x));
  }
  if (x >= 1e6) return compactSci(x);
  const s = x.toPrecision(5);
  return s.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
}

/** Signed reading for logarithmic steps: +1, not 1. */
export function prettyStep(x: number): string {
  if (!Number.isFinite(x)) return "—";
  if (Math.abs(x) < 1e-12) return "0";
  if (x > 0) {
    const p = pretty(x);
    return p.startsWith("+") ? p : `+${p}`;
  }
  if (Math.abs(x + 1) < 1e-12) return "−1";
  return pretty(x);
}

function compactSci(x: number): string {
  const exp = Math.floor(Math.log10(x));
  const mant = x / 10 ** exp;
  return `${mant.toFixed(1)}e${exp}`;
}

/** Short label for matrix cells — avoids overflow at rank 6+. */
export function cellLabel(x: number): string {
  if (!Number.isFinite(x)) return "—";
  if (Math.abs(x - 1) < 1e-12) return "1";
  if (x > 0 && x < 1) {
    const inv = 1 / x;
    if (Math.abs(inv - Math.round(inv)) < 1e-8) {
      const n = Math.round(inv);
      return n >= 10000 ? `1/${compactSci(n)}` : `1/${n}`;
    }
  }
  if (x >= 10000) return compactSci(x);
  return pretty(x);
}

export const FOREIGN_BASES: { label: string; value: number }[] = [
  { label: "e", value: Math.E },
  { label: "2", value: 2 },
  { label: "10", value: 10 },
];
