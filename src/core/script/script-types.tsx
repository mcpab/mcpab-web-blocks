import * as React from "react";

/** Subset/superset of Next.js Script strategies */
export type ScriptStrategy =
  | "beforeInteractive"
  | "afterInteractive"
  | "lazyOnload"
  | "worker";

/** Reasonable value types for data-* attributes */
export type DataAttrValue = string | number | boolean | null | undefined;
export type DataAttributes = {
  [K in `data-${string}`]?: DataAttrValue;
};

/** Common script attributes (framework-agnostic) */
export type UniversalScriptBaseProps = {
  id?: string;
  strategy?: ScriptStrategy;
  async?: boolean;
  defer?: boolean;
  type?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  integrity?: string;
  nonce?: string;
  noModule?: boolean;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  fetchPriority?: "high" | "low" | "auto";
  onLoad?: React.ReactEventHandler<HTMLScriptElement>;
  onError?: React.ReactEventHandler<HTMLScriptElement>;
} & DataAttributes;

/**
 * Source vs inline is modeled as a union so callers can't pass both.
 * - External script: `src`
 * - Inline script: `dangerouslySetInnerHTML` OR `children` (string)
 */
export type UniversalScriptProps =
  | (UniversalScriptBaseProps & {
      src: string;
      dangerouslySetInnerHTML?: never;
      children?: never;
    })
  | (UniversalScriptBaseProps & {
      src?: never;
      dangerouslySetInnerHTML: { __html: string };
      children?: never;
    })
  | (UniversalScriptBaseProps & {
      src?: never;
      dangerouslySetInnerHTML?: never;
      /** Optional ergonomic inline form */
      children: string;
    });

/** Any React component that can render a script with these props */
export type ScriptComponentLike = React.ComponentType<UniversalScriptProps>;
