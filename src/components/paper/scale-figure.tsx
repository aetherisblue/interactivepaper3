import { meeting, pretty } from "@/lib/matrix";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

export function ScaleFigure({ m, n }: { m: number; n: number }) {
  const mm = m ** m;
  const nn = n ** n;
  const r = meeting(m, n);
  const inv = 1 / r;

  return (
    <FigureFrame
      n="2"
      caption={
        <>
          Finished exponential scales for the selected ranks.{" "}
          <Tex i>{`${n}^{${n}}`}</Tex> and <Tex i>{`${m}^{${m}}`}</Tex> are
          complete; their ratio is the meeting{" "}
          <Tex i>{`R(${m},${n})=${pretty(r)}`}</Tex>. The complementary pool is
          the inverted ratio. The product returns to 1.
        </>
      }
    >
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-3 p-4 sm:p-5">
          <ScaleCard rank={m} value={pretty(mm)} note="denominator" />
          <ScaleCard rank={n} value={pretty(nn)} note="numerator" />
        </div>
        <div className="border-t border-rule px-4 py-4 sm:px-5">
          <p className="mb-3 text-center font-sans text-xs font-medium tracking-wide text-faint uppercase">
            The meeting is their ratio
          </p>
          <div className="mx-auto flex max-w-sm flex-col items-center gap-1 font-sans">
            <p className="text-ink">
              <span className="text-muted">{pretty(nn)}</span>
              <span className="mx-2 text-faint">/</span>
              <span className="text-muted">{pretty(mm)}</span>
              <span className="mx-2 text-faint">=</span>
              <span className="font-medium">{pretty(r)}</span>
            </p>
            <p className="text-sm text-muted">
              complementary pool {pretty(inv)}
              <span className="mx-2 text-faint">·</span>
              product = {pretty(r * inv)}
            </p>
          </div>
        </div>
      </div>
    </FigureFrame>
  );
}

function ScaleCard({
  rank,
  value,
  note,
}: {
  rank: number;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-md bg-paper-2 px-3 py-3">
      <p className="font-sans text-xs tracking-wide text-faint">
        Rank {rank} · {note}
      </p>
      <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
      <p className="mt-0.5 font-sans text-xs text-muted">
        <Tex i>{`${rank}^{${rank}}`}</Tex> finished
      </p>
    </div>
  );
}
