import { meeting, pretty } from "@/lib/matrix";
import { FigureFrame } from "./figure-frame";
import { Tex } from "./tex";

export function PoolFigure({ m, n }: { m: number; n: number }) {
  const r = meeting(m, n);
  const inv = 1 / r;

  return (
    <FigureFrame
      n="3"
      caption={
        <>
          Complementary energy pools for the selected meeting{" "}
          <Tex i>{`R(${m},${n})`}</Tex>. The filled pool holds the form{" "}
          {pretty(r)}; the open pool holds its reciprocal. They are one meeting
          read from two sides: the product returns to 1.
        </>
      }
    >
      <div className="flex flex-col gap-0">
        <div className="flex flex-col items-center gap-5 px-4 py-6 sm:px-8">
          <div className="flex w-full max-w-md items-start justify-between gap-2 sm:gap-3">
            <PoolDisc
              filled
              name={`R(${m},${n})`}
              value={pretty(r)}
              address={`ranks ${m} and ${n}`}
            />
            <div className="flex min-w-0 flex-1 flex-col items-center pt-3">
              <span
                className="mt-1 h-px w-full bg-rule"
                aria-hidden
              />
              <span className="mt-3 font-sans text-[0.65rem] tracking-wide text-faint uppercase">
                Reciprocal
              </span>
              <span className="mt-0.5 font-sans text-xs text-muted tabular-nums">
                product = {pretty(r * inv)}
              </span>
            </div>
            <PoolDisc
              filled={false}
              name={`R(${n},${m})`}
              value={pretty(inv)}
              address={`ranks ${n} and ${m}`}
            />
          </div>
        </div>
        <div className="overflow-x-auto border-t border-rule px-4 py-3 sm:px-5">
          <table className="paper-table">
            <thead>
              <tr>
                <th>Separator</th>
                <th>Character</th>
                <th>What energy does</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Addition</td>
                <td>Communication</td>
                <td>Shares between pools at the same kind of level</td>
              </tr>
              <tr>
                <td>Multiplication</td>
                <td>A wall</td>
                <td>Must cross to move between different meetings</td>
              </tr>
              <tr>
                <td>Reciprocal</td>
                <td>Inversion</td>
                <td>Opens the complementary pool; product returns to 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </FigureFrame>
  );
}

function PoolDisc({
  filled,
  name,
  value,
  address,
}: {
  filled: boolean;
  name: string;
  value: string;
  address: string;
}) {
  return (
    <div className="flex w-28 flex-col items-center text-center sm:w-32">
      <span
        className={
          filled
            ? "size-8 rounded-full bg-accent sm:size-9"
            : "size-8 rounded-full border-2 border-accent bg-paper sm:size-9"
        }
        aria-hidden
      />
      <p className="mt-3 font-sans text-[0.7rem] tracking-wide text-faint">
        {name}
      </p>
      <p className="mt-0.5 font-serif text-2xl text-ink">{value}</p>
      <p className="mt-0.5 font-sans text-[0.7rem] text-muted">{address}</p>
    </div>
  );
}
