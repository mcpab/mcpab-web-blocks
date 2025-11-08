// src/lib/script-types.tsx
import * as React from 'react';

/** Subset/superset of Next's Script strategies (string union keeps types simple) */
export type ScriptStrategy =
    | 'beforeInteractive'
    | 'afterInteractive'
    | 'lazyOnload'
    | 'worker';

/** Props your lib accepts (modeled after `next/script`, but generic) */
export type UniversalScriptProps = {
    id?: string;
    src?: string;                  // external script
    /** Inline code (mutually exclusive with `src`) */
    dangerouslySetInnerHTML?: { __html: string };

    /** Loading behavior / timing hint */
    strategy?: ScriptStrategy;

    /** Standard script attributes */
    async?: boolean;
    defer?: boolean;
    type?: string;
    crossOrigin?: 'anonymous' | 'use-credentials' | '';
    integrity?: string;
    nonce?: string;
    /** Execution blocking behavior in some browsers */
    noModule?: boolean;

    /** Data-* and other passthrough attributes */
    [dataAttr: `data-${string}`]: unknown;

    /** Lifecycle */
    onLoad?: (e: Event) => void;
    onError?: (e: Event) => void;
};

/** Any React component that can render a script with these props */
export type ScriptComponentLike = React.ComponentType<UniversalScriptProps>;
