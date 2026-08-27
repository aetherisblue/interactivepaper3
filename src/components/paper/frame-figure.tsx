import { useMemo, useState } from "react";
import { displacement, meeting, pretty, prettyStep } from "@/lib/matrix";
import { cn } from "@/lib/utils";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

const RANKS = [1, 2, 3, 4, 5, 6, 7];

export function FrameFigure({ m, n }: { m: number; n: number }) {
  const fallback = [1, 3, 5, 6, 7].find((k) => k !== m && k !== n) ?? 3;
  const [p, setP] = useState<number | null>(null);
  const via = p !== null && p !== m && p !== n ? p : fallback;
  const ranks = useMemo(() => RANKS, []);

  const r = meeting(m, n);
  const b = meeting(via, m);
  const Lmn = displacement(m, n);
  const Lbase = displacement(via, m);
  const native = r > 0 && r !== 1 && Number.isFinite(r);
  const other = b > 0 && b !== 1 && Number.isFinite(b) && Lbase !== 0;
  const reading = other ? Lmn / Lbase : Number.NaN;
  const nearInt =
    Number.isFinite(reading) && Math.abs(reading - Math.round(reading)) < 1e-10;

  return (
    <FigureFrame
      n="8"
      caption={
        <>
          The selected meeting <Tex i>{`R(${m},${n})`}</Tex> reread in the
          native base of <Tex i>{`R(${via},${m})`}</Tex>. For the running
          example this is <Tex i>{String.raw`\log_4 64=+3`}</Tex>. Change of
          frame is the ratio of displacements.
        </>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <p className="font-sans text-xs font-medium tracking-wide text-muted uppercase">
            Base from rank
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
          <Stat label={`native log of R(${m},${n})`} value={native ? "+1" : "—"} />
          <Stat
            label={`in base R(${via},${m}) = ${pretty(b)}`}
            value={other ? prettyStep(reading) : "—"}
          />
          <Stat
            label="integer step?"
            value={nearInt ? `yes, ${prettyStep(Math.round(reading))}` : "no"}
          />
        </div>
      </div>
    </FigureFrame>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-paper-2 px-3 py-3">
      <p className="truncate font-sans text-xs tracking-wide text-faint">
        {label}
      </p>
      <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
    </div>
  );
}
