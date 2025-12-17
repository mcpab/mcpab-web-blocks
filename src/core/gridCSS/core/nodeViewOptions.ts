
export type GridNodeViewOptions = Partial<{
  zIndex: number;
  minWidth0: boolean;
  minHeight0: boolean;
  justifySelf: "start" | "end" | "center" | "stretch";
  alignSelf: "start" | "end" | "center" | "stretch";
  pointerEvents: "auto" | "none";
  dataAttrs: Record<string, string>;
  aria: { role?: string; label?: string; labelledBy?: string; describedBy?: string }
  visibility: "visible" | "hidden" | "visuallyHidden";
}>;
