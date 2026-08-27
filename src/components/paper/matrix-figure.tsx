import { useMemo, useState } from "react";
import { cellLabel, meeting, pretty } from "@/lib/matrix";
import { cn } from "@/lib/utils";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

const RANKS = [4, 5, 6, 7] as const;

export function MatrixFigure({
  selected,
  onSelect,
}: {
  selected: { m: number; n: number };
  onSelect: (cell: { m: number; n: number }) => void;
}) {
  const [rank, setRank] = useState(6);
  const indices = useMemo(
    () => Array.from({ length: rank }, (_, i) => i + 1),
    [rank],
  );

  const logMax = Math.log(meeting(1, rank));

  return (
    <FigureFrame
      n="1"
      caption={
        <>
          The finished meeting matrix{" "}
          <Tex i>{String.raw`R(m,n)=n^{n}/m^{m}`}</Tex> up to rank {rank}. The
          diagonal is identically 1. Off-diagonal partners multiply to 1. Tap a
          cell to carry that meeting through the figures that follow; its
          reciprocal partner is outlined.
        </>
      }
    >
      <div className="p-3 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="font-sans text-xs font-medium tracking-wide text-muted uppercase">
            Rank
          </p>
          <div className="flex gap-1">
            {RANKS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  setRank(r);
                  if (selected.m > r || selected.n > r) onSelect({ m: 1, n: 2 });
                }}
                className={cn(
                  "flex h-9 min-w-9 items-center justify-center rounded-sm px-2 font-sans text-sm tabular-nums transition-colors duration-150",
                  rank === r
                    ? "bg-accent text-accent-fg"
                    : "bg-paper-2 text-ink-soft hover:bg-paper-3",
                )}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[30rem] border-separate border-spacing-1">
            <thead>
              <tr>
                <th className="w-8 font-sans text-[0.65rem] font-medium tracking-wide text-faint uppercase">
                  m\n
                </th>
                {indices.map((n) => (
                  <th
                    key={n}
                    className="font-sans text-xs font-medium text-muted tabular-nums"
                  >
                    {n}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {indices.map((m) => (
                <tr key={m}>
                  <th className="pr-1 text-right font-sans text-xs font-medium text-muted tabular-nums">
                    {m}
                  </th>
                  {indices.map((n) => {
                    const r = meeting(m, n);
                    const isSel = selected.m === m && selected.n === n;
                    const isPartner = selected.m === n && selected.n === m;
                    const t = m === n ? 0 : Math.min(1, Math.log(Math.max(r, 1 / r)) / logMax);
                    const bg = `color-mix(in oklab, var(--color-accent) ${Math.round(t * 22)}%, var(--color-paper))`;
                    return (
                      <td key={n} className="p-0">
                        <button
                          type="button"
                          onClick={() => onSelect({ m, n })}
                          title={`R(${m},${n}) = ${pretty(r)}`}
                          className={cn(
                            "flex h-10 w-full min-w-12 items-center justify-center overflow-hidden rounded-sm px-0.5 font-sans text-[0.65rem] tabular-nums leading-none sm:h-11 sm:text-xs",
                            "transition-[box-shadow,transform] duration-150 ease-out active:scale-[0.96]",
                            isSel && "ring-2 ring-accent ring-offset-1 ring-offset-paper",
                            isPartner && !isSel && "ring-1 ring-dashed ring-accent",
                          )}
                          style={{ background: bg, color: "var(--color-ink)" }}
                        >
                          {cellLabel(r)}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FigureFrame>
  );
}
