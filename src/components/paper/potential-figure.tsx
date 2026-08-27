import { potential, pretty, prettyStep } from "@/lib/matrix";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

const RANKS = [1, 2, 3, 4, 5, 6, 7];

export function PotentialFigure({ m, n }: { m: number; n: number }) {
  const values = RANKS.map((k) => ({ k, s: potential(k) }));
  const max = Math.max(...values.map((v) => v.s));
  const sm = potential(m);
  const sn = potential(n);
  const L = sn - sm;

  return (
    <FigureFrame
      n="6"
      caption={
        <>
          The scalar potential <Tex i>{String.raw`s_k=k\ln k`}</Tex>. The
          selected meeting is the directed displacement{" "}
          <Tex i>{`s_{${n}}-s_{${m}}`}</Tex> = {prettyStep(L)}, which is{" "}
          <Tex i>{`\ln R(${m},${n})`}</Tex>.
        </>
      }
    >
      <div className="p-4 sm:p-5">
        <div className="flex h-40 items-end gap-2 sm:gap-3">
          {values.map(({ k, s }) => {
            const h = max > 0 ? Math.max(8, Math.round((s / max) * 120)) : 8;
            const isM = k === m;
            const isN = k === n;
            return (
              <div key={k} className="flex flex-1 flex-col items-center gap-1">
                <span className="font-sans text-[0.65rem] text-muted tabular-nums">
                  {pretty(s)}
                </span>
                <span
                  className={
                    isM || isN
                      ? "w-full rounded-sm bg-accent"
                      : "w-full rounded-sm bg-paper-3"
                  }
                  style={{ height: `${h}px` }}
                  aria-hidden
                />
                <span className="font-sans text-xs text-ink tabular-nums">
                  {k}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center font-sans text-sm text-muted">
          <span className="text-ink tabular-nums">
            L({m},{n}) = {pretty(sn)} − {pretty(sm)} = {prettyStep(L)}
          </span>
        </p>
      </div>
    </FigureFrame>
  );
}
