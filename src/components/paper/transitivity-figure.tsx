import { useMemo, useState } from "react";
import { meeting, pretty, scale } from "@/lib/matrix";
import { cn } from "@/lib/utils";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

const RANKS = [1, 2, 3, 4, 5, 6, 7];

export function TransitivityFigure({ m, n }: { m: number; n: number }) {
  const fallback = [6, 3, 5, 1, 7].find((k) => k !== m && k !== n) ?? 3;
  const [p, setP] = useState<number | null>(null);
  const via = p !== null && p !== m && p !== n ? p : fallback;
  const ranks = useMemo(() => RANKS, []);

  const am = scale(m);
  const av = scale(via);
  const an = scale(n);
  const r1 = meeting(m, via);
  const r2 = meeting(via, n);
  const direct = meeting(m, n);
  const product = r1 * r2;
  const ok = Math.abs(product / direct - 1) < 1e-9;

  return (
    <FigureFrame
      n="5"
      caption={
        <>
          Transitivity as cancellation. The middle scale{" "}
          <Tex i>{`${via}^{${via}}`}</Tex> appears in the numerator of the
          first meeting and the denominator of the second, then drops out.
          What remains is the direct meeting{" "}
          <Tex i>{`R(${m},${n})`}</Tex>.
        </>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <p className="font-sans text-xs font-medium tracking-wide text-muted uppercase">
            Middle rank
          </p>
          <div className="flex flex-wrap gap-1">
            {ranks.map((k) => (
              <button
                key={k}
                type="button"
                disabled={k === m || k === n}
                onClick={() => setP(k)}
                className={cn(
                  "flex h-9 min-w-9 items-center justify-center rounded-sm px-2 font-sans text-sm tabular-nums transition-colors duration-150",
                  k === via
                    ? "bg-accent text-accent-fg"
                    : "bg-paper-2 text-ink hover:bg-paper-3",
                  (k === m || k === n) && "cursor-not-allowed opacity-40",
                )}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <ScaleCard rank={m} value={pretty(am)} />
          <ScaleCard rank={via} value={pretty(av)} middle />
          <ScaleCard rank={n} value={pretty(an)} />
        </div>

        <p className="mt-4 text-center font-sans text-sm text-muted">
          <span className="text-ink tabular-nums">
            ({pretty(av)} / {pretty(am)}) × ({pretty(an)} / {pretty(av)}) ={" "}
            {pretty(an)} / {pretty(am)}
          </span>
        </p>
        <p className="mt-1 text-center font-sans text-sm text-muted">
          <span className="text-ink tabular-nums">
            R({m},{via}) × R({via},{n}) = {pretty(r1)} × {pretty(r2)} ={" "}
            {pretty(product)}
          </span>
          {ok ? " = " : " ≠ "}
          <span className="text-ink tabular-nums">
            R({m},{n}) = {pretty(direct)}
          </span>
        </p>
      </div>
    </FigureFrame>
  );
}

function ScaleCard({
  rank,
  value,
  middle = false,
}: {
  rank: number;
  value: string;
  middle?: boolean;
}) {
  return (
    <div
      className={
        middle
          ? "rounded-md bg-accent/10 px-3 py-3 ring-1 ring-accent/30"
          : "rounded-md bg-paper-2 px-3 py-3"
      }
    >
      <p className="font-sans text-xs tracking-wide text-faint">
        {middle ? "cancels" : `rank ${rank} scale`}
      </p>
      <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
      <p className="mt-0.5 font-sans text-xs text-muted">
        <Tex i>{`${rank}^{${rank}}`}</Tex>
      </p>
    </div>
  );
}
