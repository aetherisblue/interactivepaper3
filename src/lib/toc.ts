export type TocItem = {
  id: string;
  n: string | null;
  title: string;
  depth: 0 | 1 | 2;
};

export const TOC: TocItem[] = [
  { id: "abstract", n: null, title: "Abstract", depth: 0 },
  { id: "s1", n: "1", title: "The finished scales", depth: 1 },
  { id: "s2", n: "2", title: "What appears to be missing", depth: 1 },
  { id: "s3", n: "3", title: "Approaches that did not work", depth: 1 },
  { id: "s31", n: "3.1", title: "Explosive meeting", depth: 2 },
  { id: "s32", n: "3.2", title: "Continuous interpolation", depth: 2 },
  { id: "s33", n: "3.3", title: "Energy pools without a unit", depth: 2 },
  { id: "s34", n: "3.4", title: "A lookup table", depth: 2 },
  { id: "s35", n: "3.5", title: "Geometry too early", depth: 2 },
  { id: "s36", n: "3.6", title: "What the failures reveal", depth: 2 },
  { id: "s4", n: "4", title: "A meeting can measure itself", depth: 1 },
  { id: "s5", n: "5", title: "Change of register", depth: 1 },
  { id: "s6", n: "6", title: "Native and foreign frames", depth: 1 },
  { id: "s7", n: "7", title: "The composition law", depth: 1 },
  { id: "s8", n: "8", title: "Cancellation of the waypoint", depth: 1 },
  { id: "s81", n: "8.1", title: "What a waypoint is", depth: 2 },
  { id: "s82", n: "8.2", title: "Why the middle scale cancels", depth: 2 },
  { id: "s83", n: "8.3", title: "The running detour", depth: 2 },
  { id: "s84", n: "8.4", title: "The other direction", depth: 2 },
  { id: "s85", n: "8.5", title: "Why this is the central fact", depth: 2 },
  { id: "s9", n: "9", title: "Reciprocity as a closed path", depth: 1 },
  { id: "s10", n: "10", title: "Paths, loops, and consistency", depth: 1 },
  { id: "s11", n: "11", title: "The logarithmic potential", depth: 1 },
  { id: "s12", n: "12", title: "The two pictures are equivalent", depth: 1 },
  { id: "s13", n: "13", title: "The natural geometry", depth: 1 },
  { id: "s14", n: "14", title: "What is special about k^k", depth: 1 },
  { id: "s15", n: "15", title: "Growth inside the potential", depth: 1 },
  { id: "s16", n: "16", title: "Composition and change of frame", depth: 1 },
  { id: "s17", n: "17", title: "Integer numbers of meetings", depth: 1 },
  { id: "s18", n: "18", title: "What the structure already supports", depth: 1 },
  { id: "s19", n: "19", title: "What remains open", depth: 1 },
  { id: "s20", n: "20", title: "Conclusion", depth: 1 },
];
