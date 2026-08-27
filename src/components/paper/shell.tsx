import { useEffect, useState } from "react";
import { List, X } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { TOC } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { Article } from "./article";

export function PaperShell() {
  const [selected, setSelected] = useState({ m: 2, n: 4 });
  const [active, setActive] = useState("abstract");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = TOC.map((t) => document.getElementById(t.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (nodes.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]?.target.id) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    for (const n of nodes) obs.observe(n);
    return () => obs.disconnect();
  }, []);

  return (
    <TooltipProvider delayDuration={180}>
      <div className="min-h-dvh bg-paper text-ink">
        <a
          href="#abstract"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
        >
          Skip to abstract
        </a>
        <header className="no-print sticky top-0 z-30 border-b border-rule/80 bg-paper/90 backdrop-blur-sm">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
            <div className="min-w-0">
              <p className="truncate font-sans text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase">
                Reciprocal Scale Notes
              </p>
              <p className="truncate font-serif text-sm text-ink">Native Bases</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="toc-panel"
            >
              {open ? <X className="size-4" /> : <List className="size-4" />}
              Contents
            </Button>
          </div>
        </header>

        {open && (
          <nav
            id="toc-panel"
            className="no-print border-b border-rule bg-paper-2 px-4 py-4 lg:hidden"
          >
            <TocList
              active={active}
              onJump={() => setOpen(false)}
            />
          </nav>
        )}

        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <aside className="no-print hidden lg:block">
            <nav className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-6 py-10">
              <p className="mb-3 font-sans text-[0.65rem] font-medium tracking-[0.18em] text-faint uppercase">
                Contents
              </p>
              <TocList active={active} />
            </nav>
          </aside>

          <main className="px-4 pt-10 pb-24 sm:px-8 lg:px-12 lg:pt-14">
            <Masthead />
            <Article selected={selected} onSelect={setSelected} />
            <footer className="mt-16 border-t border-rule pt-8">
              <p className="font-sans text-sm leading-relaxed text-muted">
                A longer note on the internal structure of the reciprocal scale
                matrix. Figures 1–8 follow the argument.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}

function Masthead() {
  return (
    <header className="mb-12">
      <p className="font-sans text-xs font-medium tracking-[0.22em] text-accent uppercase">
        A research note
      </p>
      <h1 className="mt-4 font-serif text-[2.15rem] leading-[1.12] font-medium tracking-tight text-ink sm:text-5xl sm:leading-[1.08]">
        Native Bases, Reciprocal Unit Steps, and the Structure of the
        Reciprocal Scale Matrix
      </h1>
      <p className="mt-5 max-w-xl font-serif text-lg leading-snug text-muted italic sm:text-xl">
        A note on the internal structure of the reciprocal scale matrix and
        the constructions that revealed it.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-sm text-muted">
        <span>Reciprocal Scale Notes</span>
        <span className="text-faint" aria-hidden>
          ·
        </span>
        <span>§ The progression</span>
      </div>
      <hr className="running-rule mt-8" />
    </header>
  );
}

function TocList({
  active,
  onJump,
}: {
  active: string;
  onJump?: () => void;
}) {
  return (
    <ol className="space-y-0.5">
      {TOC.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={onJump}
            className={cn(
              "flex min-h-9 items-baseline gap-2 rounded-sm px-2 py-1.5 font-sans text-sm transition-colors duration-150",
              item.depth === 2 && "pl-6 text-[0.8125rem]",
              active === item.id
                ? "bg-paper-2 text-ink"
                : "text-muted hover:bg-paper-2/70 hover:text-ink",
            )}
          >
            {item.n ? (
              <span className="w-7 shrink-0 text-faint tabular-nums">
                {item.n}
              </span>
            ) : (
              <span className="w-7 shrink-0" />
            )}
            <span className="leading-snug">{item.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
