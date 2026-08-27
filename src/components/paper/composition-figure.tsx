import { useMemo, useState } from "react";
import { meeting, pretty } from "@/lib/matrix";
import { cn } from "@/lib/utils";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

const RANKS = [1, 2, 3, 4, 5, 6, 7];

export function CompositionFigure({ m, n }: { m: number; n: number }) {
  const fallback =
    [3, 5, 6, 1, 7].find((k) => k !== m && k !== n) ?? 1;
  const [p, setP] = useState<number | null>(null);
  const via = p !== null && p !== m && p !== n ? p : fallback;

  const rmn = meeting(m, n);
  const rmp = meeting(m, via);
  const rpn = meeting(via, n);
  const product = rmp * rpn;
  const loop = meeting(m, n) * meeting(n, via) * meeting(via, m);
  const close = Math.abs(loop - 1) < 1e-9;

  const ranks = useMemo(() => RANKS, []);

  return (
    <FigureFrame
      n="7"
      caption={
        <>
          Composition through a waypoint rank.{" "}
          <Tex i>{`R(${m},${via})\,R(${via},${n})=R(${m},${n})`}</Tex>. The
          triangle <Tex i>{`(${m},${n},${via})`}</Tex> multiplies to 1: that
          is the operation “communication” had been missing.
        </>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <p className="font-sans text-xs font-medium tracking-wide text-muted uppercase">
            Waypoint
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
          <Stat
            label={`R(${m},${via})`}
            value={pretty(rmp)}
            note="first leg"
          />
          <Stat
            label={`R(${via},${n})`}
            value={pretty(rpn)}
            note="second leg"
          />
          <Stat
            label="product"
            value={pretty(product)}
            note={`= R(${m},${n}) = ${pretty(rmn)}`}
          />
        </div>
        <p className="mt-4 font-sans text-sm text-muted">
          Closed loop R({m},{n}) × R({n},{via}) × R({via},{m}) ={" "}
          {pretty(loop)}
          {close ? " · consistent" : " · inconsistent"}
        </p>
      </div>
    </FigureFrame>
  );
}

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-md bg-paper-2 px-3 py-3">
      <p className="truncate font-sans text-xs tracking-wide text-faint">
        {label}
      </p>
      <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
      <p className="mt-0.5 font-sans text-xs text-muted">{note}</p>
    </div>
  );
}
