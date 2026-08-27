import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as List, t as X } from "../_libs/lucide-react.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as katex } from "../_libs/katex.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bvjd686v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
function TooltipContent({ className, children, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 max-w-xs rounded-md bg-ink px-3 py-2 font-sans text-xs leading-relaxed text-paper shadow-[var(--shadow-border)]", "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out", className),
		...props,
		children
	}) });
}
function HoverNote({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "cursor-help border-b border-dotted border-accent/50 text-inherit decoration-transparent",
			children
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: label })] });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			outline: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "bg-transparent text-ink-soft hover:bg-paper-2 hover:text-ink",
			quiet: "bg-paper-2 text-ink-soft hover:bg-paper-3 hover:text-ink"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md",
			"icon-sm": "size-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var TOC = [
	{
		id: "abstract",
		n: null,
		title: "Abstract",
		depth: 0
	},
	{
		id: "s1",
		n: "1",
		title: "The finished matrix",
		depth: 1
	},
	{
		id: "s2",
		n: "2",
		title: "Energy pools",
		depth: 1
	},
	{
		id: "s3",
		n: "3",
		title: "The ratio of two finished scales",
		depth: 1
	},
	{
		id: "s4",
		n: "4",
		title: "The native-base chart",
		depth: 1
	},
	{
		id: "s5",
		n: "5",
		title: "Transitivity and the scalar potential",
		depth: 1
	},
	{
		id: "s6",
		n: "6",
		title: "Composition of meetings",
		depth: 1
	},
	{
		id: "s7",
		n: "7",
		title: "The general ratio matrix",
		depth: 1
	},
	{
		id: "s8",
		n: "8",
		title: "Approaches that did not work",
		depth: 1
	},
	{
		id: "s81",
		n: "8.1",
		title: "Explosive meeting",
		depth: 2
	},
	{
		id: "s82",
		n: "8.2",
		title: "Continuous interpolation",
		depth: 2
	},
	{
		id: "s83",
		n: "8.3",
		title: "Energy pools without frames",
		depth: 2
	},
	{
		id: "s84",
		n: "8.4",
		title: "Static lookup table",
		depth: 2
	},
	{
		id: "s85",
		n: "8.5",
		title: "Geometry too early",
		depth: 2
	},
	{
		id: "s86",
		n: "8.6",
		title: "The tautology as novelty",
		depth: 2
	},
	{
		id: "s87",
		n: "8.7",
		title: "Native-base as a dynamics",
		depth: 2
	},
	{
		id: "s88",
		n: "8.8",
		title: "Conservation as forced ontology",
		depth: 2
	},
	{
		id: "s89",
		n: "8.9",
		title: "Merely reciprocal",
		depth: 2
	},
	{
		id: "s9",
		n: "9",
		title: "Why the surviving reading succeeds",
		depth: 1
	},
	{
		id: "s10",
		n: "10",
		title: "What the mathematics already supports",
		depth: 1
	},
	{
		id: "s11",
		n: "11",
		title: "Open directions",
		depth: 1
	},
	{
		id: "s12",
		n: "12",
		title: "Conclusion",
		depth: 1
	}
];
/** Pure dimensional meeting R(m,n) = n^n / m^m. */
function meeting(m, n) {
	return n ** n / m ** m;
}
/** Scalar potential s_k = k ln k. L(m,n) = s_n − s_m = ln R(m,n). */
function potential(k) {
	if (k <= 0) return NaN;
	if (k === 1) return 0;
	return k * Math.log(k);
}
function logBase(x, base) {
	return Math.log(x) / Math.log(base);
}
function pretty(x) {
	if (!Number.isFinite(x)) return "—";
	if (Math.abs(x) < 1e-15) return "0";
	if (Math.abs(x - 1) < 1e-12) return "1";
	if (Math.abs(x + 1) < 1e-12) return "−1";
	if (x < 0) return `−${pretty(-x)}`;
	const inv = 1 / x;
	if (x < 1 && Math.abs(inv - Math.round(inv)) < 1e-8 && inv > 1) return `1/${Math.round(inv)}`;
	if (Math.abs(x - Math.round(x)) < 1e-8 && Math.abs(x) < 0xe8d4a51000) return String(Math.round(x));
	if (x >= 1e6) return compactSci(x);
	return x.toPrecision(5).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
}
/** Signed reading for logarithmic steps: +1, not 1. */
function prettyStep(x) {
	if (!Number.isFinite(x)) return "—";
	if (Math.abs(x) < 1e-12) return "0";
	if (x > 0) {
		const p = pretty(x);
		return p.startsWith("+") ? p : `+${p}`;
	}
	if (Math.abs(x + 1) < 1e-12) return "−1";
	return pretty(x);
}
function compactSci(x) {
	const exp = Math.floor(Math.log10(x));
	return `${(x / 10 ** exp).toFixed(1)}e${exp}`;
}
/** Short label for matrix cells — avoids overflow at rank 6+. */
function cellLabel(x) {
	if (!Number.isFinite(x)) return "—";
	if (Math.abs(x - 1) < 1e-12) return "1";
	if (x > 0 && x < 1) {
		const inv = 1 / x;
		if (Math.abs(inv - Math.round(inv)) < 1e-8) {
			const n = Math.round(inv);
			return n >= 1e4 ? `1/${compactSci(n)}` : `1/${n}`;
		}
	}
	if (x >= 1e4) return compactSci(x);
	return pretty(x);
}
var FOREIGN_BASES = [
	{
		label: "e",
		value: Math.E
	},
	{
		label: "2",
		value: 2
	},
	{
		label: "10",
		value: 10
	}
];
function FigureFrame({ n, caption, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("my-8 overflow-hidden rounded-xl bg-paper-2 p-3 sm:p-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-lg bg-paper",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "mt-3 px-1 font-sans text-sm leading-relaxed text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-medium text-ink-soft",
				children: [
					"Figure ",
					n,
					". "
				]
			}), caption]
		})]
	});
}
function Tex({ children, i = false, numbered }) {
	const html = katex.renderToString(children, {
		displayMode: !i,
		throwOnError: false,
		trust: false,
		strict: "ignore"
	});
	if (i) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "[&_.katex]:text-[1.02em]",
		dangerouslySetInnerHTML: { __html: html }
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "eq",
		role: "img",
		"aria-label": children,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "eq-body",
			dangerouslySetInnerHTML: { __html: html }
		}), numbered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "eq-num",
			children: [
				"(",
				numbered,
				")"
			]
		}) : null]
	});
}
var RANKS$2 = [
	1,
	2,
	3,
	4,
	5,
	6,
	7
];
function CompositionFigure({ m, n }) {
	const fallback = [
		3,
		5,
		6,
		1,
		7
	].find((k) => k !== m && k !== n) ?? 1;
	const [p, setP] = (0, import_react.useState)(null);
	const via = p !== null && p !== m && p !== n ? p : fallback;
	const rmn = meeting(m, n);
	const rmp = meeting(m, via);
	const rpn = meeting(via, n);
	const product = rmp * rpn;
	const loop = meeting(m, n) * meeting(n, via) * meeting(via, m);
	const close = Math.abs(loop - 1) < 1e-9;
	const ranks = (0, import_react.useMemo)(() => RANKS$2, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		n: "6",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Composition through a waypoint rank.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `R(${m},${via})\,R(${via},${n})=R(${m},${n})`
			}),
			". The triangle ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `(${m},${n},${via})`
			}),
			" multiplies to 1: that is the operation “communication” had been missing."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs font-medium tracking-wide text-muted uppercase",
						children: "Waypoint"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: ranks.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: k === m || k === n,
							onClick: () => setP(k),
							className: cn("flex h-9 min-w-9 items-center justify-center rounded-sm px-2 font-sans text-sm tabular-nums transition-colors duration-150", k === via ? "bg-accent text-accent-fg" : "bg-paper-2 text-ink hover:bg-paper-3", (k === m || k === n) && "cursor-not-allowed opacity-40"),
							children: k
						}, k))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: `R(${m},${via})`,
							value: pretty(rmp),
							note: "first leg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: `R(${via},${n})`,
							value: pretty(rpn),
							note: "second leg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "product",
							value: pretty(product),
							note: `= R(${m},${n}) = ${pretty(rmn)}`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-sans text-sm text-muted",
					children: [
						"Closed loop R(",
						m,
						",",
						n,
						") × R(",
						n,
						",",
						via,
						") × R(",
						via,
						",",
						m,
						") =",
						" ",
						pretty(loop),
						close ? " · consistent" : " · inconsistent"
					]
				})
			]
		})
	});
}
function Stat({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-paper-2 px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-sans text-xs tracking-wide text-faint",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-serif text-2xl text-ink",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 font-sans text-xs text-muted",
				children: note
			})
		]
	});
}
function Failure({ id, n, title, tried, failed, lesson }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative pl-6 sm:pl-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-2 left-0 size-2.5 rounded-full bg-fail",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-5 bottom-0 left-[4px] w-px bg-rule",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-serif text-xl font-medium text-ink sm:text-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 font-sans text-sm font-medium text-fail tabular-nums",
						children: n
					}), title]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "paper-prose mt-4 pr-0 pb-10 sm:pr-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "What was tried"
						}),
						tried,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-5 rounded-lg bg-paper-2 px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-2 font-sans text-xs font-medium tracking-wide text-fail uppercase",
								children: "Why it failed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "[&_p]:mb-0",
								children: failed
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "What it left"
						}),
						lesson
					]
				})
			]
		})
	});
}
var RANKS$1 = [
	4,
	5,
	6,
	7
];
function MatrixFigure({ selected, onSelect }) {
	const [rank, setRank] = (0, import_react.useState)(6);
	const indices = (0, import_react.useMemo)(() => Array.from({ length: rank }, (_, i) => i + 1), [rank]);
	const logMax = Math.log(meeting(1, rank));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		n: "1",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"The finished meeting matrix",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: String.raw`R(m,n)=n^{n}/m^{m}`
			}),
			" up to rank ",
			rank,
			". The diagonal is identically 1. Off-diagonal partners multiply to 1. Tap a cell to inspect its pools, finished scales, native chart, potential, and composition in the figures that follow; its reciprocal partner is outlined."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3 sm:p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-wide text-muted uppercase",
					children: "Rank"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: RANKS$1.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setRank(r);
							if (selected.m > r || selected.n > r) onSelect({
								m: 1,
								n: 2
							});
						},
						className: cn("flex h-9 min-w-9 items-center justify-center rounded-sm px-2 font-sans text-sm tabular-nums transition-colors duration-150", rank === r ? "bg-accent text-accent-fg" : "bg-paper-2 text-ink-soft hover:bg-paper-3"),
						children: r
					}, r))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[30rem] border-separate border-spacing-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "w-8 font-sans text-[0.65rem] font-medium tracking-wide text-faint uppercase",
						children: "m\\n"
					}), indices.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "font-sans text-xs font-medium text-muted tabular-nums",
						children: n
					}, n))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: indices.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "pr-1 text-right font-sans text-xs font-medium text-muted tabular-nums",
						children: m
					}), indices.map((n) => {
						const r = meeting(m, n);
						const isSel = selected.m === m && selected.n === n;
						const isPartner = selected.m === n && selected.n === m;
						const t = m === n ? 0 : Math.min(1, Math.log(Math.max(r, 1 / r)) / logMax);
						const bg = `color-mix(in oklab, var(--color-accent) ${Math.round(t * 22)}%, var(--color-paper))`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onSelect({
									m,
									n
								}),
								title: `R(${m},${n}) = ${pretty(r)}`,
								className: cn("flex h-10 w-full min-w-12 items-center justify-center overflow-hidden rounded-sm px-0.5 font-sans text-[0.65rem] tabular-nums leading-none sm:h-11 sm:text-xs", "transition-[box-shadow,transform] duration-150 ease-out active:scale-[0.96]", isSel && "ring-2 ring-accent ring-offset-1 ring-offset-paper", isPartner && !isSel && "ring-1 ring-dashed ring-accent"),
								style: {
									background: bg,
									color: "var(--color-ink)"
								},
								children: cellLabel(r)
							})
						}, n);
					})] }, m)) })]
				})
			})]
		})
	});
}
function NativeFigure({ m, n }) {
	const r = meeting(m, n);
	const inv = 1 / r;
	const nativeOk = r > 0 && r !== 1 && Number.isFinite(r);
	const foreign = FOREIGN_BASES.map((b) => ({
		...b,
		plus: logBase(r, b.value),
		minus: logBase(inv, b.value)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FigureFrame, {
		n: "4",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"The unit step in the native base of",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `R(${m},${n})`
			}),
			".",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverNote, {
				label: "The plus is the step: log_r(r) = +1 is one copy of the pool in its own base — one unit of communication. log_r(1/r) = −1 is the same step reversed. These are orientations of one step, not the integer 1 and not the quotient 1/−1.",
				children: "+1"
			}),
			" ",
			"is one step forward;",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverNote, {
				label: "The minus is the reverse orientation of the same unit step. Together +1 and −1 are the logarithmic image of r · (1/r) = 1.",
				children: "−1"
			}),
			" ",
			"is that step reversed. Foreign bases leave a non-unit jump."
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-0 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 border-b border-rule p-4 sm:p-5 lg:border-r lg:border-b-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "Multiplicative register"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-sans text-xs text-faint tabular-nums",
							children: [
								"(",
								m,
								",",
								n,
								") ↔ (",
								n,
								",",
								m,
								")"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: `R(${m},${n})`,
							value: pretty(r),
							tone: "plus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: `R(${n},${m})`,
							value: pretty(inv),
							tone: "minus"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans text-sm leading-relaxed text-muted",
						children: [
							"Product",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-ink tabular-nums",
								children: [
									pretty(r),
									" × ",
									pretty(inv),
									" = ",
									pretty(r * inv)
								]
							}),
							". Conservation, not a step: the meeting returns to 1."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-medium tracking-wide text-muted uppercase",
							children: "Unit step in native base"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-sans text-xs text-faint",
							children: ["base ", pretty(r)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberLine, { enabled: nativeOk }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: "Forward step",
							value: nativeOk ? "+1" : "—",
							tone: "plus"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolCard, {
							label: "Reverse step",
							value: nativeOk ? "−1" : "—",
							tone: "minus"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-rule px-4 py-3 sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-sans text-xs font-medium tracking-wide text-muted uppercase",
				children: "Same pair in foreign bases"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-64 text-left font-sans text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-xs tracking-wide text-faint uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "Base"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "log(r)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "log(1/r)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-1.5 font-medium",
								children: "Step size"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
						className: "tabular-nums text-ink-soft",
						children: [nativeOk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: pretty(r)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: "+1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: "−1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-1.5",
									children: "+1"
								})
							]
						}), foreign.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: b.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: prettyStep(b.plus)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: prettyStep(b.minus)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-1.5",
								children: prettyStep(Math.abs(b.plus))
							})
						] }, b.label))]
					})]
				})
			})]
		})]
	});
}
function PoolCard({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-paper-2 px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate font-sans text-[0.7rem] tracking-wide text-faint",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: tone === "plus" ? "mt-1 font-serif text-2xl text-ink" : "mt-1 font-serif text-2xl text-accent",
			children: value
		})]
	});
}
function NumberLine({ enabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 320 48",
			className: "h-12 w-full text-accent",
			role: "img",
			"aria-label": "Unit step from minus one through zero to plus one",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "40",
					y1: "24",
					x2: "280",
					y2: "24",
					stroke: "currentColor",
					strokeOpacity: "0.4",
					strokeWidth: "1.25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "108,24 120,19 120,29",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "212,24 200,19 200,29",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "44",
					cy: "24",
					r: "6",
					fill: enabled ? "var(--color-paper)" : "none",
					stroke: "currentColor",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "24",
					r: "2.4",
					fill: "currentColor",
					fillOpacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "276",
					cy: "24",
					r: "6",
					fill: enabled ? "currentColor" : "none",
					stroke: "currentColor",
					strokeWidth: "2"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between px-1 font-sans",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepLabel, {
					value: "−1",
					note: "reverse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepLabel, {
					value: "0",
					note: "origin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepLabel, {
					value: "+1",
					note: "forward"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-center font-sans text-xs leading-snug text-muted",
			children: "The + marks a step. +1 is one unit of communication in this base; −1 is the same unit, turned around."
		})
	] });
}
function StepLabel({ value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex w-16 flex-col items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-ink tabular-nums",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.65rem] text-faint",
			children: note
		})]
	});
}
function PoolFigure({ m, n }) {
	const r = meeting(m, n);
	const inv = 1 / r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		n: "2",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Complementary energy pools for the selected meeting",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `R(${m},${n})`
			}),
			". The filled pool holds the form",
			" ",
			pretty(r),
			"; the open pool holds its reciprocal. They are one meeting read from two sides: the product returns to 1."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col items-center gap-5 px-4 py-6 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full max-w-md items-start justify-between gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolDisc, {
							filled: true,
							name: `R(${m},${n})`,
							value: pretty(r),
							address: `ranks ${m} and ${n}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col items-center pt-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 h-px w-full bg-rule",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-3 font-sans text-[0.65rem] tracking-wide text-faint uppercase",
									children: "Reciprocal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-0.5 font-sans text-xs text-muted tabular-nums",
									children: ["product = ", pretty(r * inv)]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolDisc, {
							filled: false,
							name: `R(${n},${m})`,
							value: pretty(inv),
							address: `ranks ${n} and ${m}`
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto border-t border-rule px-4 py-3 sm:px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "paper-table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Separator" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Character" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "What energy does" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Addition" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Communication" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Shares between pools at the same kind of level" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Multiplication" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "A wall" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Must cross to move between different meetings" })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Reciprocal" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Inversion" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "Opens the complementary pool; product returns to 1" })
						] })
					] })]
				})
			})]
		})
	});
}
function PoolDisc({ filled, name, value, address }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-28 flex-col items-center text-center sm:w-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: filled ? "size-8 rounded-full bg-accent sm:size-9" : "size-8 rounded-full border-2 border-accent bg-paper sm:size-9",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-sans text-[0.7rem] tracking-wide text-faint",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 font-serif text-2xl text-ink",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 font-sans text-[0.7rem] text-muted",
				children: address
			})
		]
	});
}
var RANKS = [
	1,
	2,
	3,
	4,
	5,
	6,
	7
];
function PotentialFigure({ m, n }) {
	const values = RANKS.map((k) => ({
		k,
		s: potential(k)
	}));
	const max = Math.max(...values.map((v) => v.s));
	const sm = potential(m);
	const sn = potential(n);
	const L = sn - sm;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		n: "5",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"The scalar potential ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: String.raw`s_k=k\ln k`
			}),
			". The selected meeting is the directed displacement",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `s_{${n}}-s_{${m}}`
			}),
			" = ",
			prettyStep(L),
			", which is",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `\ln R(${m},${n})`
			}),
			"."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-40 items-end gap-2 sm:gap-3",
				children: values.map(({ k, s }) => {
					const h = max > 0 ? Math.max(8, Math.round(s / max * 120)) : 8;
					const isM = k === m;
					const isN = k === n;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[0.65rem] text-muted tabular-nums",
								children: pretty(s)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: isM || isN ? "w-full rounded-sm bg-accent" : "w-full rounded-sm bg-paper-3",
								style: { height: `${h}px` },
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-xs text-ink tabular-nums",
								children: k
							})
						]
					}, k);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center font-sans text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-ink tabular-nums",
					children: [
						"L(",
						m,
						",",
						n,
						") = ",
						pretty(sn),
						" − ",
						pretty(sm),
						" = ",
						prettyStep(L)
					]
				})
			})]
		})
	});
}
function ScaleFigure({ m, n }) {
	const mm = m ** m;
	const nn = n ** n;
	const r = meeting(m, n);
	const inv = 1 / r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureFrame, {
		n: "3",
		caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Finished exponential scales for the selected ranks.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `${n}^{${n}}`
			}),
			" and ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `${m}^{${m}}`
			}),
			" are complete; their ratio is the meeting",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
				i: true,
				children: `R(${m},${n})=${pretty(r)}`
			}),
			". The complementary pool is the inverted ratio. The product returns to 1."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleCard, {
					rank: m,
					value: pretty(mm),
					note: "denominator"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleCard, {
					rank: n,
					value: pretty(nn),
					note: "numerator"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-rule px-4 py-4 sm:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-center font-sans text-xs font-medium tracking-wide text-faint uppercase",
					children: "The meeting is their ratio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-sm flex-col items-center gap-1 font-sans",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: pretty(nn)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-faint",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: pretty(mm)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-faint",
								children: "="
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: pretty(r)
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"complementary pool ",
							pretty(inv),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-faint",
								children: "·"
							}),
							"product = ",
							pretty(r * inv)
						]
					})]
				})]
			})]
		})
	});
}
function ScaleCard({ rank, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-paper-2 px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-sans text-xs tracking-wide text-faint",
				children: [
					"Rank ",
					rank,
					" · ",
					note
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-serif text-2xl text-ink",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0.5 font-sans text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
					i: true,
					children: `${rank}^{${rank}}`
				}), " finished"]
			})
		]
	});
}
function Article({ selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "paper-prose",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "abstract",
				className: "scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase",
					children: "Abstract"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[1.05rem] leading-[1.65] text-ink-soft sm:text-lg",
					children: [
						"The matrix of pure dimensional meetings",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(m,n)=n^{n}/m^{m}`
						}),
						" is stronger than a table of reciprocal pairs. Writing",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`a_k=k^{k}`
						}),
						", every entry is a ratio",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`a_n/a_m`
						}),
						", so the matrix is generated by a single scalar potential and obeys the composition law",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(m,n)\,R(n,p)=R(m,p)`
						}),
						". Native bases then supply a local chart: for ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r=R(m,n)`
						}),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\log_r(r)=+1`
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\log_r(1/r)=-1`
						}),
						". Those two identities hold for every positive ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r\neq 1`
						}),
						"; they are not the novelty. The structural claim is that the matrix supplies its own candidate frames, and that composition of meetings — not the isolated unit step — is the operation that makes “communication” precise. This note develops that stack, records the approaches that failed, and distinguishes what is special to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						" from what survives for an arbitrary positive ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "f"
						}),
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "running-rule my-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s1",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "1",
						title: "The finished matrix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "drop-cap",
						children: "We begin with the matrix whose entries are the pure meetings of complete dimensional scales:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "1",
						children: String.raw`R(m,n)=\dfrac{n^{n}}{m^{m}}.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Each index ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "k"
						}),
						" is a complete dimensional rank; the quantity ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						" is the native size of that rank. A matrix entry is therefore not an arbitrary ratio. It is the meeting of two finished scales: the scale of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "n"
						}),
						", measured in the scale of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "m"
						}),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The diagonal is identically 1. A rank meeting itself is a closed, normalized event; nothing is left over and nothing is owed. Every off-diagonal pair satisfies the reciprocal identity" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "2",
						children: String.raw`R(m,n)\cdot R(n,m)=1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"This identity is not an extra axiom. It is the immediate consequence of the definition: the meeting of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "n"
						}),
						" with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "m"
						}),
						" ",
						"is the inverse of the meeting of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "m"
						}),
						" with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "n"
						}),
						". The product of a pair is the multiplicative identity because the pair is a single meeting read from two sides. Calling that identity “energy conservation” is a model one may later adopt; it is not forced by the algebra. §8.8 records the cost of treating it as forced."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We treat this matrix as finished. All further structure is read from it rather than imposed upon it. Reciprocity is only the first identity. Transitivity of ratios, a scalar potential, and a composition law are already present and are developed in §§5–7." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatrixFigure, {
						selected,
						onSelect
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s2",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "2",
						title: "Energy pools"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"An energy pool is a place the underlying energy is allowed to sit when it takes the form of an equation. It is not a new object besides the matrix. A pool ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "is" }),
						" a cell of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(m,n)`
						}),
						": a magnitude together with a dimensional address."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The running example is the meeting of rank 2 with rank 4.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(2,4)=4^{4}/2^{2}=64`
						}),
						" is one pool: energy sitting at that meeting, in the shape “64.”",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(4,2)=1/64`
						}),
						" is the complementary pool: same meeting, other side of the inversion. The pair is invariant under inversion:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "3",
						children: String.raw`64\cdot\frac{1}{64}=1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The reciprocal does not create extra energy. It opens a complementary pool on the other side of an inversion. Equation (2) is this fact in general; (3) is the same fact at one cell." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pools are separated by operators, and the operators are not of one kind. Addition is ordinary communication: energy can share between pools at the same kind of level relatively freely (intra-field, same-level exchange). Multiplication is a wall: energy has to cross it to get from one pool to another (inter-field, a meeting across levels). The reciprocal is the special separator that creates the complementary pool while sending the product back to 1." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolFigure, {
						m: selected.m,
						n: selected.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This language is a working ontology, not a completed dynamics. “Pool” names a cell. “Communication” is not yet an operation: addition, multiplication, composition of meetings, a change of frame, and a walk on a graph are different candidates, and §8.7 records what fails if one pretends the native-base chart has already chosen among them. The origin of the magnitude is §3. The local chart is §4. The operation that composes meetings is §6." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s3",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "3",
						title: "The ratio of two finished scales"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An energy pool is a cell of the matrix. What fills the cell is not a free number. It is the ratio of two finished exponential scales." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A complete dimensional scale is the pure power",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						". The exponent equals the rank: the scale of 2 is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`2^{2}=4`
						}),
						", the scale of 4 is",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`4^{4}=256`
						}),
						". Nothing is left partial. The matrix entry is the meeting of two such finished objects:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "4",
						children: String.raw`r=R(m,n)=\dfrac{n^{n}}{m^{m}}.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"So ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "r"
						}),
						" is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`n^{n}`
						}),
						" measured in",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`m^{m}`
						}),
						". Its reciprocal partner is the same meeting read the other way:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`1/r=m^{m}/n^{n}=R(n,m)`
						}),
						". The exponential is not decorative. It is what fills the pools."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The elementary identity of a single rank is the same fact before any pair is formed:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "5",
						children: String.raw`n^{n}\cdot\dfrac{1}{n^{n}}=1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The matrix lifts that identity from one rank to every pair of ranks. Equation (2) is the lift; equation (5) is the seed. In either reading, the exponential and its inverse cancel. Nothing is left over. Reciprocal inversion across a pair is the cancellation of two finished scales, not an extra axiom." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleFigure, {
						m: selected.m,
						n: selected.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The pure logarithmic identities of the next section,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\log_{r}(r)=+1`
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\log_{r}(1/r)=-1`
						}),
						", hold for any positive",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r\neq 1`
						}),
						". They are not unique to the matrix. What is unique is the origin of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "r"
						}),
						":"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "my-5 list-disc space-y-2 pl-5 marker:text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
								i: true,
								children: "r"
							}), " is not an arbitrary positive number."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"It is a ratio of two finished exponential scales",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`n^{n}`
								}),
								" and",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`m^{m}`
								}),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Therefore the unit step ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`+1,-1`
								}),
								" is a reading of a dimensional meeting, not a free-floating change of units."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The layers stack without remainder. The exponential",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						" fills the pool. The ratio",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`n^{n}/m^{m}`
						}),
						" is the meeting. The product",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r\cdot(1/r)=1`
						}),
						" is inversion in the multiplicative register. The native logarithm of §4 is that same inversion read as a unit step in a local chart. Each layer is a change of register on an object the previous layer already supplied. What the stack does not yet give is a relation among ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "different" }),
						" ",
						"meetings. That arrives in §5."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s4",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "4",
						title: "The native-base chart"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "r"
						}),
						" of §3 is now in hand: a ratio of two finished scales, not an arbitrary positive number. For",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`r\neq 1`
						}),
						", taking the logarithm with base",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "r"
						}),
						" itself yields"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "6",
						children: String.raw`\log_{r}(r)=+1,\qquad \log_{r}\bigl(\tfrac{1}{r}\bigr)=-1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The multiplicative statement “product equals 1” is thereby translated into the additive statement “the two values form a unit step about zero.” The plus on ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`+1`
						}),
						" is the step itself: one unit of communication in the pool’s own base.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`-1`
						}),
						" is the same unit, reversed. They are orientations of one step, not the integer 1 and its negative written for bookkeeping."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The translation is not a change of meaning. It is a change of register. In the multiplicative register the pair occupies two complementary pools whose product is the identity. In the logarithmic register whose base is the pool itself, the same pair occupies two complementary unit displacements whose signed sum is zero." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Consequences follow at once." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "my-5 list-decimal space-y-3 pl-5 marker:font-sans marker:text-sm marker:text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Every elementary pool can serve as its own unit reference frame. The matrix is not measured from outside; it supplies a family of internal measuring sticks, one per entry." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"The elementary act of additive communication between a pool and its complement is identical with the reciprocal relation read in the matching base. There is no second primitive called “addition” that must be glued onto the reciprocal. The unit step",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "is" }),
								" the reciprocal, seen from inside."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Addition, as unit communication, and the reciprocal are two registers of the same underlying identity. Which one appears depends on the choice of frame, not on a change of ontology." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A short computation makes the tautology honest rather than empty. By definition" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "7",
						children: String.raw`\log_{r}(r)=\frac{\ln r}{\ln r}=+1,\qquad \log_{r}\bigl(\tfrac{1}{r}\bigr)=\frac{\ln(1/r)}{\ln r}=-1.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A mathematically sophisticated reader will see (6) at once. The novelty is not that a number is one copy of itself in its own base. Write" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "8",
						children: String.raw`\varphi_r(x)=\log_{r}x.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Then ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\varphi_r(xy)=\varphi_r(x)+\varphi_r(y)`
						}),
						", with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\varphi_r(r)=+1`
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\varphi_r(r^{-1})=-1`
						}),
						". The two registers are the same relation under the isomorphism between the multiplicative group of positive reals and the additive group of reals. “Unit communication,” so far, is the coordinate representation of that group in its logarithmic chart."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Where the matrix enters is that ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "r"
						}),
						" is not chosen from outside. It is generated by the matrix’s own pairwise construction. The matrix supplies a family of candidate frames, one per off-diagonal cell, and those frames turn the reciprocal relation into a canonical local coordinate description. That is the structural claim. It is a claim about a chart, not yet a claim about a dynamics. §8.6 and §8.7 record what fails if those two claims are confused."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The meeting of dimension 2 with dimension 4 is a useful running example.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(2,4)=4^{4}/2^{2}=256/4=64`
						}),
						", and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(4,2)=1/64`
						}),
						". In any foreign base the jump from the diagonal pool ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(2,2)=1`
						}),
						" to the 64-pool is a sizable displacement — about 4.159 in natural log, 6 in base 2, 1.806 in base 10. In base 64 the jump is exactly",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`+1`
						}),
						", and the complementary pool sits at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`-1`
						}),
						". The costly-looking transition was an artefact of measuring the pools with a stick that did not belong to them."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeFigure, {
						m: selected.m,
						n: selected.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"When the logarithm base is chosen to be the pool value itself, the previously costly jump collapses into a unit step of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`+1`
						}),
						" (and its reverse",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`-1`
						}),
						"). The choice of base is therefore not a neutral change of units. It is the choice of which pool will serve as the shared reference frame for reading the others. When the reference frame is taken from inside the system, certain transitions simplify dramatically. The unit step",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`+1,-1`
						}),
						" is the logarithmic image of inversion. It is not, by itself, a rule for moving from one meeting to a different meeting. If",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(m,n)=64`
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(p,q)=27/4`
						}),
						", the native chart of the first pair does not say what operation takes one to the other. Composition of meetings, not the isolated unit step, is that operation. It is stated in §6."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s5",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "5",
						title: "Transitivity and the scalar potential"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The matrix is not an arbitrary reciprocal array. Write",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`a_k=k^{k}`
						}),
						". Then"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "9",
						children: String.raw`R(m,n)=\dfrac{a_n}{a_m}.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every pairwise meeting is a ratio of two values of a single positive function of rank. Reciprocity follows at once. A stronger identity also follows:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "10",
						children: String.raw`R(m,n)\,R(n,p)=R(m,p).`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"For the running ranks,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(2,4)\,R(4,6)=R(2,6)`
						}),
						". The intermediate scale ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`4^{4}`
						}),
						" cancels. Meetings compose. That is much stronger than ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(m,n)\,R(n,m)=1`
						}),
						", which is the special case ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`p=m`
						}),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Taking logarithms makes the same fact a difference structure. Let" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "11",
						children: String.raw`L(m,n)=\ln R(m,n)=n\ln n-m\ln m.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Then ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`L(m,n)+L(n,p)=L(m,p)`
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`L(n,m)=-L(m,n)`
						}),
						". Define the scalar potential"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "12",
						children: String.raw`s_k=k\ln k.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every matrix entry is a directed displacement on a one-dimensional axis:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "13",
						children: String.raw`L(m,n)=s_n-s_m.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The pools of §2 are therefore not an unstructured collection of reciprocal magnitudes. They are the pairwise differences of a single potential attached to rank. The native-base chart of §4 reads one such difference in units of itself. The potential reads all of them in one global additive coordinate. Relationships among different meetings live here, not in the isolated identity",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\log_r(r)=+1`
						}),
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PotentialFigure, {
						m: selected.m,
						n: selected.n
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s6",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "6",
						title: "Composition of meetings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"§4 asked what “move from one pool to another” could mean and refused to answer by metaphor. The answer is the product already sitting in (10). For a path of ranks ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`i\to j\to k\to \ell`
						}),
						","
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "14",
						children: String.raw`R(i,j)\,R(j,k)\,R(k,\ell)=R(i,\ell).`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In logarithmic coordinates the same path is ordinary addition of displacements. A closed path is the identity:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "15",
						children: String.raw`R(i,j)\,R(j,k)\,R(k,i)=1,`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"or equivalently",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`L(i,j)+L(j,k)+L(k,i)=0`
						}),
						". That is the operation. Communication along a sequence of meetings is multiplication of ratios, equivalently addition of potential differences. A loop that fails to return to 1 is inconsistent with the generating scales."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Two compositions must be kept distinct. Composing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "meetings" }),
						" ",
						"is (14): the entries multiply and the intermediates cancel. Composing",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "native frames" }),
						" — taking a logarithm in base",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(i,j)`
						}),
						", then switching to base",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(j,k)`
						}),
						" — is a different question, and remains open (§11). The first is already a law of the matrix. The second would be a dynamics of charts."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositionFigure, {
						m: selected.m,
						n: selected.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The isolated unit step of §4 now has a home. In the native chart of a single pair, the pair is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`+1,-1`
						}),
						". Along a path, those local units are not needed for the product to be defined. They become useful when one wants to read a particular leg in units of that leg. The global law does not run through them."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s7",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "7",
						title: "The general ratio matrix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Almost none of §§5–6 used the specific form",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						". Replace the finished scale by an arbitrary positive function of rank:"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "16",
						children: String.raw`R_f(m,n)=\dfrac{f(n)}{f(m)}.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Reciprocity, transitivity, path composition, closed-loop identity, and the difference structure",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`L_f(m,n)=\ln f(n)-\ln f(m)`
						}),
						" all survive. Native bases still turn each off-diagonal entry into a local unit step. A general ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`N\times N`
						}),
						" reciprocal matrix has ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`N(N-1)/2`
						}),
						" independent pairwise numbers. A ratio matrix ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R_f`
						}),
						" is determined by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "N"
						}),
						" values of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "f"
						}),
						". It is not merely reciprocal. It is globally factorizable."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"What is special to the present choice",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`f(k)=k^{k}`
						}),
						" is the particular potential",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`s_k=k\ln k`
						}),
						" and the interpretation of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						" as a finished dimensional scale. Those are modelling commitments. The algebra of ratios is not. Any later physical reading, ranking system, or network of pairwise comparisons that uses this matrix is using a realisation of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R_f`
						}),
						". Tests that purport to show something unique to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						" have to fail on a generic",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "f"
						}),
						", or they have not isolated the specialisation."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s8",
				className: "scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					n: "8",
					title: "Approaches that did not work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The constructions below were pursued in earnest. Each failed for a definite reason. Some failed as mathematics; some failed as claims about the mathematics. Recording both is part of the result." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s81",
				n: "8.1",
				title: "Explosive dimensional meeting as a binary operation",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"An early attempt defined a meeting operation on dimensional dual pairs by sending labels ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(k,\ell)`
					}),
					" to the product ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k\ell`
					}),
					" and then scaling by the full tower ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(k\ell)^{k\ell}`
					}),
					". The hope was to obtain a binary composition law on meetings that would be dimensionally faithful: combining two ranks should produce the rank of their product, at the size of that product’s own complete scale."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The operation was dimensionally faithful. It was numerically catastrophic. After two or three iterations the normalized values underflowed to zero while the duals overflowed to infinity." })] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The growth rate of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(k\ell)^{k\ell}`
					}),
					" ",
					"outruns any useful bookkeeping. The operation could not be iterated and therefore could not serve as a practical composition law. Logarithmic duals — recording the log of the tower rather than the tower itself — delayed the collapse by a single step. They did not remove the underlying violence. A composition law that cannot be applied twice is not a composition law."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dimensional fidelity is not a license for explosive encoding. The finished matrix already records complete meetings as ordinary ratios of complete scales. Nothing is gained by re-towering what has already been finished." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s82",
				n: "8.2",
				title: "Continuous interpolation of the explosive meeting",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"A continuous parameter ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: "t"
					}),
					" was introduced so that the discrete meeting became a path, and the derivative at",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`t=0`
					}),
					" was computed. An explicit infinitesimal meeting rate was obtained. The construction was mathematically correct: the space of dual pairs can be given a smooth structure, and a directional derivative exists."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The derivative remained a formal rate on an abstract space of dual pairs. It did not reconnect to the original matrix entries in a way that clarified energy movement or communication between concrete pools. One could write down the infinitesimal, but one could not point to a cell of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`R(m,n)`
					}),
					" and say what had been learned about it. The construction was conceptually downstream of the simpler native-base observation."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Existence of a derivative is not evidence that the continuous object is the right foundation. If the derivative does not speak back to the finished matrix, it is a neighboring theory, not a support for this one. Once native bases are in hand, the desire for an infinitesimal meeting rate looks like a request for extra structure that the discrete correspondence does not need." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s83",
				n: "8.3",
				title: "Energy pools without internal reference frames",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The language of §2 was first taken as a dynamics of operators rather than as a change of register. Energy occupies pools separated by addition (free communication), multiplication (a wall), and the reciprocal (an inversion that opens a complementary pool). The picture was evocative and already consistent with conservation via equation (2)." }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"It lacked a mechanism that could turn costly transitions into free ones. Inside the raw multiplicative numbers, even same-parity meetings such as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`(2,2)\to(2,4)`
					}),
					" look expensive: the value jumps from 1 to 64. Without the ability to choose a native logarithmic base drawn from the matrix itself, the distinction between “wall” and “free communication” stayed absolute and external. One had two kinds of operator, declared by hand. The pools of §2 were in place; the unit in which they move was not."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A metaphor for operators is not a dynamics. Native bases supply a local unit in which a single pair can be read. They do not, by themselves, say how to move from one pair to another. That operation is composition of meetings (§6). The pool picture survives as language; what failed was using it as a dynamics of hand-declared operators, and then, later, taking the native chart to have already supplied the missing operation." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s84",
				n: "8.4",
				title: "Treating the matrix as a static lookup table",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Several attempts used ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`R(m,n)`
					}),
					" merely as a dictionary of reference scales for embedding ordinary numbers. A datum would be expressed as a ratio against a chosen cell, and the cell would supply a “dimensional address.”"
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The approach never engaged the reciprocal identity as a generative relation, nor did it explain why logarithms of different bases produce qualitatively different communicative behavior. It remained a passive representational tool rather than an active structural account. Any table of positive numbers could have served the same embedding role; nothing about the construction used the fact that off-diagonal partners multiply to 1, or that",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k^{k}`
					}),
					" is a complete scale."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A matrix that is only consulted is not yet a structure. The matrix is a source of frames (§4) and, more strongly, a factorizable family of ratios (§§5–7), not a list of constants." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s85",
				n: "8.5",
				title: "Forcing geometric interpretations too early",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Circles, loops, radii, and curvature were repeatedly tried as immediate readings of the scales",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k^{k}`
					}),
					". The temptation is obvious: a complete scale wants to be a closed figure, a meeting wants to be an intersection, a reciprocal wants to be an inversion in a circle."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Each geometric reading added interpretive load without clarifying the algebraic or energetic relations inside the matrix. One could draw a circle of circumference related to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k^{k}`
					}),
					", but the drawing did not explain why ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`\log_{r}(r)=+1`
					}),
					" is the right unit of communication, and it did not explain why the explosive meeting failed. Geometry was being asked to do the work of a change of register."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The native-base correspondence required no geometric commitment; it lives entirely at the level of the numerical and reciprocal structure. Geometry may later be recovered — a unit step about zero is not hostile to a picture of a directed loop — but it is not required for the observation, and introducing it first concealed the observation. Pictures that are not forced by the algebra are optional. Optional pictures should wait." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s86",
				n: "8.6",
				title: "Selling the tautology as novelty",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"An early presentation treated",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`\log_r(r)=+1`
					}),
					" as the discovery. The identities are genuine, they match the reciprocal pair, and they are easy to state. It is tempting to stop there."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"They hold for every positive",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`r\neq 1`
					}),
					". Nothing about",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`k^{k}`
					}),
					", finished scales, or the matrix is used. A reader who knows what a logarithm is will see them at once and conclude that the note has restated a definition. The observation is correct and uninteresting as a novelty claim."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The native-base identities are a chart, honestly tautological as arithmetic, and interesting only as a claim that the matrix supplies the objects to which the chart is applied. §4 now states that distinction in the main line rather than leaving it to a footnote." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s87",
				n: "8.7",
				title: "Taking the native-base chart for a dynamics",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Language of unit communication, energy movement, and additive steps was used as if the chart had produced a rule for passing from one meeting to another. Given",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`r=64`
					}),
					" and another entry",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`27/4`
					}),
					", one still wants to say what operation takes the first pool to the second."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The chart does not say. Addition, multiplication, composition of pairwise meetings, a graph transition, and a change of logarithmic frame are different operations. Native bases choose a coordinate description of a single pair. They do not choose among those operations. Claiming a dynamics here repeats the defect of §8.3 with better notation." }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A coordinate system and a dynamics are different claims. The dynamics the matrix actually possesses is composition of meetings (§6). Native frames remain available as local units in which to read a particular leg. They are not the composition law." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s88",
				n: "8.8",
				title: "Conservation as a forced ontology",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The identity ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`r\cdot(1/r)=1`
					}),
					" was read as energy conservation. The language is natural once pools are in play, and it matches the cancellation of finished scales."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Inversion is mathematically forced. Energy is not. Without an independent definition of energy, the reading adds an ontology the algebra does not require. The paper is strongest when it says: here is the structure; these are interpretations it permits. It is weaker when it says: this equation means energy is conserved." }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Speak of inversion and the multiplicative identity first. If a later model defines energy as a quantity obeying that algebra, the physical reading becomes a model, not an assertion. Pools remain useful language. They are not a proof of an energetic substrate." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Failure, {
				id: "s89",
				n: "8.9",
				title: "Treating the matrix as merely reciprocal",
				tried: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Reciprocity ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`R(m,n)\,R(n,m)=1`
					}),
					" was taken as the characteristic property, and native bases as the characteristic reading. The note was, in that form, a note about reciprocal pairs."
				] }),
				failed: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The matrix is a ratio matrix",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`R(m,n)=a_n/a_m`
					}),
					". Transitivity, path composition, closed-loop identity, and a scalar potential all follow, and they survive for arbitrary positive",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: "f"
					}),
					". A construction that uses only reciprocity has not used the object. Isolated ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`+1/-1`
					}),
					" looks like the theory of communication; composition of meetings is closer to one."
				] }),
				lesson: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Reciprocity is the two-point shadow of a difference structure. Once the potential ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						i: true,
						children: String.raw`s_k=k\ln k`
					}),
					" is in view, native bases are a local chart on that structure, not the structure itself."
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s9",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "9",
						title: "Why the surviving reading succeeds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What survives is a stack, not a single trick." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "my-5 list-disc space-y-2 pl-5 marker:text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"It stays inside the original matrix:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`R(m,n)=a_n/a_m`
								}),
								" with",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`a_k=k^{k}`
								}),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Reciprocity is the special case of transitivity that returns home." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Composition of meetings is an iterable operation that does not explode." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Native bases are a local chart on that structure, not a new object and not a dynamics." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"The same algebra holds for general",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`R_f`
								}),
								"; ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`k^{k}`
								}),
								" ",
								"is a realisation, not the whole class."
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Failed approaches added an object — a tower, a path in an abstract dual space, a metaphor, a dictionary, a circle, a novelty claim, a dynamics, an ontology, a weaker symmetry — and then had to control it. The surviving reading adds no object. It rereads the ratio structure the definition already is." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s10",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "10",
						title: "What the mathematics already supports"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "These uses follow from the algebra as it stands. They do not require a new primitive, and they do not require the word energy." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-medium text-ink",
							children: ["10.1 Relational coordinates.", " "]
						}),
						"Given positive quantities ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`f_i`
						}),
						", the matrix",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R_{ij}=f_j/f_i`
						}),
						" records relative scale, reciprocity, composition, identity, and logarithmic displacement",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\log R_{ij}=\log f_j-\log f_i`
						}),
						" at once. Absolute units need not be chosen first. Relationships can be primary; the underlying scale is recovered, up to a global multiplier, from the ratios."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-medium text-ink",
							children: ["10.2 Ranking and pairwise comparison.", " "]
						}),
						"If ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R_{AB}=3`
						}),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R_{BC}=2`
						}),
						", transitivity gives",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R_{AC}=6`
						}),
						". Reciprocal comparison matrices in decision theory are the same object. The present formulation reverses the usual order: start with relationships, recover the scale."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						className: "font-medium text-ink",
						children: ["10.3 Path consistency.", " "]
					}), "On a directed graph of ratios, a loop should multiply to 1. The loop error"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
						numbered: "17",
						children: String.raw`E_{\mathrm{loop}}=\ln R_{ij}+\ln R_{jk}+\ln R_{ki}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"vanishes on a consistent cycle. Noisy observations",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`\widetilde R_{ij}\approx f_j/f_i`
						}),
						" can be tested, and the latent ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`f_i`
						}),
						" recovered, by driving loop errors to zero. That is an actual quantity to optimise. It is the first computation the composition law supports that isolated native bases do not."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-medium text-ink",
							children: ["10.4 Compression.", " "]
						}),
						"Storing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "N"
						}),
						" values of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "f"
						}),
						" determines every relationship. A generic reciprocal table stores",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`N(N-1)/2`
						}),
						" independent pairs. Factorizability is a computational property, not a slogan."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						className: "font-medium text-ink",
						children: ["10.5 Self-normalising frames.", " "]
					}), "Each relationship can serve as its own unit. Different regions of a network may read in different native bases, with the ratio matrix supplying the change of chart. Hierarchical and multi-scale representations are permitted by the algebra; they are not yet constructed here."] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s11",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "11",
						title: "Open directions that remain legitimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The following remain open after the composition law is in hand." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
						className: "font-medium text-ink",
						children: ["11.1 Classification of frames.", " "]
					}), "Every reciprocal pair is a unit step in its own base. Which foreign bases turn a given non-reciprocal transition into a small integer step is still a catalogue, not a theorem."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-medium text-ink",
							children: ["11.2 Composition of native frames.", " "]
						}),
						"Composing meetings is settled. Composing charts — carrying a quantity written in base ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(i,j)`
						}),
						" across a change to base ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`R(j,k)`
						}),
						" — is not. That would be a dynamics of frames, and it is the remaining sense of “communication” the native-base language pointed at without defining."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-medium text-ink",
							children: [
								"11.3 What is special to",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
									i: true,
									children: String.raw`k^{k}`
								}),
								".",
								" "
							]
						}),
						"Tests that survive for generic ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: "f"
						}),
						" have not isolated the finished-scale choice. A criterion that fails for, say,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`f(k)=k`
						}),
						" or",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`f(k)=e^{k}`
						}),
						" would."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "font-medium text-ink",
							children: ["11.4 Geometry, later.", " "]
						}),
						"If geometry is to be reintroduced, it should be required by the difference structure on ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`s_k`
						}),
						", not draped over the scales ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`k^{k}`
						}),
						"."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "s12",
				className: "scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						n: "12",
						title: "Conclusion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"The reciprocal scale matrix is a ratio matrix generated by finished scales. Reciprocity, transitivity, a scalar potential, and composition of meetings are already in the definition. Native bases supply a local chart in which a single pair becomes the unit step",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tex, {
							i: true,
							children: String.raw`+1,-1`
						}),
						"; those identities are tautological as arithmetic and interesting only as a claim about whose frames they are. “Communication,” once it is an operation, is composition of meetings, equivalently addition of potential differences. Closed paths multiply to 1; a loop that does not is inconsistent."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Earlier approaches failed by exploding, by remaining too formal, by using pools as a metaphor, by consulting the matrix as a table, by reaching for geometry, by selling a tautology, by mistaking a chart for a dynamics, by forcing an energy ontology, or by stopping at reciprocity. The surviving reading avoids each of those defects. It is the structure the matrix already was." })
				]
			})
		]
	});
}
function SectionHead({ n, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "mb-5 font-serif text-2xl font-medium text-ink sm:text-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-3 font-sans text-sm font-medium text-muted tabular-nums sm:text-base",
			children: n
		}), title]
	});
}
function PaperShell() {
	const [selected, setSelected] = (0, import_react.useState)({
		m: 2,
		n: 4
	});
	const [active, setActive] = (0, import_react.useState)("abstract");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const nodes = TOC.map((t) => document.getElementById(t.id)).filter((el) => Boolean(el));
		if (nodes.length === 0) return;
		const obs = new IntersectionObserver((entries) => {
			const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (vis[0]?.target.id) setActive(vis[0].target.id);
		}, {
			rootMargin: "-20% 0px -60% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		for (const n of nodes) obs.observe(n);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 180,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#abstract",
					className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
					children: "Skip to abstract"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "no-print sticky top-0 z-30 border-b border-rule/80 bg-paper/90 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-sans text-[0.65rem] font-medium tracking-[0.22em] text-muted uppercase",
								children: "Reciprocal Scale Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-serif text-sm text-ink",
								children: "Native Bases"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							className: "lg:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-controls": "toc-panel",
							children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" }), "Contents"]
						})]
					})
				}),
				open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					id: "toc-panel",
					className: "no-print border-b border-rule bg-paper-2 px-4 py-4 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocList, {
						active,
						onJump: () => setOpen(false)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "no-print hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-6 py-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-sans text-[0.65rem] font-medium tracking-[0.18em] text-faint uppercase",
								children: "Contents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocList, { active })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						className: "px-4 pt-10 pb-24 sm:px-8 lg:px-12 lg:pt-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Masthead, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Article, {
								selected,
								onSelect: setSelected
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-16 border-t border-rule pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-sm leading-relaxed text-muted",
									children: "A longer note on the internal structure of the reciprocal scale matrix. Figures 1–6 are live: choose a meeting, then a waypoint, and watch composition return the same meeting while closed loops multiply to 1."
								})
							})
						]
					})]
				})
			]
		})
	});
}
function Masthead() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs font-medium tracking-[0.22em] text-accent uppercase",
				children: "A research note"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-[2.15rem] leading-[1.12] font-medium tracking-tight text-ink sm:text-5xl sm:leading-[1.08]",
				children: "Native Bases, Reciprocal Unit Steps, and the Approaches That Failed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl font-serif text-lg leading-snug text-muted italic sm:text-xl",
				children: "A longer note on the internal structure of the reciprocal scale matrix and the paths that did not lead here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reciprocal Scale Notes" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-faint",
						"aria-hidden": true,
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "§ Ratio structure" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "running-rule mt-8" })
		]
	});
}
function TocList({ active, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-0.5",
		children: TOC.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `#${item.id}`,
			onClick: onJump,
			className: cn("flex min-h-9 items-baseline gap-2 rounded-sm px-2 py-1.5 font-sans text-sm transition-colors duration-150", item.depth === 2 && "pl-6 text-[0.8125rem]", active === item.id ? "bg-paper-2 text-ink" : "text-muted hover:bg-paper-2/70 hover:text-ink"),
			children: [item.n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-7 shrink-0 text-faint tabular-nums",
				children: item.n
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-7 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "leading-snug",
				children: item.title
			})]
		}) }, item.id))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperShell, {});
}
//#endregion
export { Home as component };
