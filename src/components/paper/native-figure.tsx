import { FOREIGN_BASES, logBase, meeting, pretty, prettyStep, scale } from "@/lib/matrix";
import { HoverNote } from "@/components/ui/tooltip";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

export function NativeFigure({ m, n }: { m: number; n: number }) {
  const r = meeting(m, n);
  const inv = 1 / r;
  const nativeOk = r > 0 && r !== 1 && Number.isFinite(r);

  const foreign = FOREIGN_BASES.map((b) => ({
    ...b,
    plus: logBase(r, b.value),
    minus: logBase(inv, b.value),
  }));

  return (
    <FigureFrame
      n="4"
      caption={
        <>
          The unit step in the native base of{" "}
          <Tex i>{`R(${m},${n})`}</Tex>.{" "}
          <HoverNote label="The plus is the step: log_r(r) = +1 is one copy of the pool in its own base — one unit of communication. log_r(1/r) = −1 is the same step reversed. These are orientations of one step, not the integer 1 and not the quotient 1/−1.">
            +1
          </HoverNote>{" "}
          is one step forward;{" "}
          <HoverNote label="The minus is the reverse orientation of the same unit step. Together +1 and −1 are the logarithmic image of r · (1/r) = 1.">
            −1
          </HoverNote>{" "}
          is that step reversed. Foreign bases leave a non-unit jump.
        </>
      }
    >
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="flex flex-col gap-4 border-b border-rule p-4 sm:p-5 lg:border-r lg:border-b-0">
          <header className="flex items-baseline justify-between gap-3">
            <p className="font-sans text-xs font-medium tracking-wide text-muted uppercase">
              Multiplicative register
            </p>
            <p className="font-sans text-xs text-faint tabular-nums">
              ({m},{n}) ↔ ({n},{m})
            </p>
          </header>
          <div className="grid grid-cols-2 gap-3">
            <PoolCard label={`R(${m},${n})`} value={pretty(r)} tone="plus" />
            <PoolCard label={`R(${n},${m})`} value={pretty(inv)} tone="minus" />
          </div>
          <p className="font-sans text-sm leading-relaxed text-muted">
            Rank {m} coordinates:{" "}
            <Tex i>{`${m}^{${m}}=${pretty(scale(m))}`}</Tex>
            {", "}
            <Tex i>{`\\dfrac{1}{${m}^{${m}}}=${pretty(1 / scale(m))}`}</Tex>
            . The meeting is their ratio against the rank-{n} scale, not a
            jump from the diagonal 1.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          <header className="flex items-baseline justify-between gap-3">
            <p className="font-sans text-xs font-medium tracking-wide text-muted uppercase">
              Unit step in native base
            </p>
            <p className="font-sans text-xs text-faint">
              base {pretty(r)}
            </p>
          </header>
          <NumberLine enabled={nativeOk} />
          <div className="grid grid-cols-2 gap-3">
            <PoolCard
              label="Forward step"
              value={nativeOk ? "+1" : "—"}
              tone="plus"
            />
            <PoolCard
              label="Reverse step"
              value={nativeOk ? "−1" : "—"}
              tone="minus"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-rule px-4 py-3 sm:px-5">
        <p className="mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase">
          Same pair in foreign bases
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-64 text-left font-sans text-sm">
            <thead>
              <tr className="text-xs tracking-wide text-faint uppercase">
                <th className="py-1.5 font-medium">Base</th>
                <th className="py-1.5 font-medium">log(r)</th>
                <th className="py-1.5 font-medium">log(1/r)</th>
                <th className="py-1.5 font-medium">Step size</th>
              </tr>
            </thead>
            <tbody className="tabular-nums text-ink-soft">
              {nativeOk && (
                <tr className="text-accent">
                  <td className="py-1.5">{pretty(r)}</td>
                  <td className="py-1.5">+1</td>
                  <td className="py-1.5">−1</td>
                  <td className="py-1.5">+1</td>
                </tr>
              )}
              {foreign.map((b) => (
                <tr key={b.label}>
                  <td className="py-1.5">{b.label}</td>
                  <td className="py-1.5">{prettyStep(b.plus)}</td>
                  <td className="py-1.5">{prettyStep(b.minus)}</td>
                  <td className="py-1.5">{prettyStep(Math.abs(b.plus))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FigureFrame>
  );
}

function PoolCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "plus" | "minus";
}) {
  return (
    <div className="rounded-md bg-paper-2 px-3 py-3">
      <p className="truncate font-sans text-[0.7rem] tracking-wide text-faint">
        {label}
      </p>
      <p
        className={
          tone === "plus"
            ? "mt-1 font-serif text-2xl text-ink"
            : "mt-1 font-serif text-2xl text-accent"
        }
      >
        {value}
      </p>
    </div>
  );
}

function NumberLine({ enabled }: { enabled: boolean }) {
  return (
    <div>
      <svg
        viewBox="0 0 320 48"
        className="h-12 w-full text-accent"
        role="img"
        aria-label="Unit step from minus one through zero to plus one"
      >
        <line
          x1="40"
          y1="24"
          x2="280"
          y2="24"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="1.25"
        />
        <polygon points="108,24 120,19 120,29" fill="currentColor" />
        <polygon points="212,24 200,19 200,29" fill="currentColor" />
        <circle
          cx="44"
          cy="24"
          r="6"
          fill={enabled ? "var(--color-paper)" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="160" cy="24" r="2.4" fill="currentColor" fillOpacity="0.55" />
        <circle
          cx="276"
          cy="24"
          r="6"
          fill={enabled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <div className="flex justify-between px-1 font-sans">
        <StepLabel value="−1" note="reverse" />
        <StepLabel value="0" note="origin" />
        <StepLabel value="+1" note="forward" />
      </div>
      <p className="mt-2 text-center font-sans text-xs leading-snug text-muted">
        The + marks a step. +1 is one unit of communication in this base; −1 is
        the same unit, turned around.
      </p>
    </div>
  );
}

function StepLabel({ value, note }: { value: string; note: string }) {
  return (
    <span className="flex w-16 flex-col items-center">
      <span className="text-xs text-ink tabular-nums">{value}</span>
      <span className="text-[0.65rem] text-faint">{note}</span>
    </span>
  );
}
