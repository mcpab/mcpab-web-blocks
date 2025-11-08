// src/lib/HtmlScript.tsx
'use client';
import * as React from 'react';
import type { UniversalScriptProps } from '../../core/script/script-types';

function insertScript(p: UniversalScriptProps) {
    const s = document.createElement('script');
    if (p.id) s.id = p.id;
    if (p.type) s.type = p.type;
    if (p.crossOrigin !== undefined) s.crossOrigin = p.crossOrigin || null;
    if (p.integrity) s.integrity = p.integrity;
    if (p.nonce) s.nonce = p.nonce!;
    if (p.noModule) (s as any).noModule = true;

    // Copy data-* attributes
    Object.keys(p).forEach((k) => {
        if (k.startsWith('data-')) s.setAttribute(k, String((p as any)[k]));
    });

    if (p.src) {
        s.src = p.src;
        // Honor async/defer; default to defer for afterInteractive
        if (p.async) s.async = true;
        if (p.defer ?? p.strategy === 'afterInteractive') s.defer = true;
    } else if (p.dangerouslySetInnerHTML?.__html) {
        s.text = p.dangerouslySetInnerHTML.__html;
    }

    if (p.onLoad) s.addEventListener('load', p.onLoad as any, { once: true });
    if (p.onError) s.addEventListener('error', p.onError as any, { once: true });

    // where to inject
    const target =
        p.strategy === 'beforeInteractive' ? document.head : document.body;
    target.appendChild(s);

    return () => {
        if (p.onLoad) s.removeEventListener('load', p.onLoad as any);
        if (p.onError) s.removeEventListener('error', p.onError as any);
        s.parentNode?.removeChild(s);
    };
}

/**
 * Generic, client-side Script fallback that mimics Next's `strategy`.
 * - beforeInteractive: injects into <head> ASAP on mount
 * - afterInteractive: injects into <body> on mount (default)
 * - lazyOnload: waits for load/idle
 * - worker: treats as afterInteractive (no worker DOM sugar here)
 */
export function HtmlScript({
    strategy = 'afterInteractive',
    ...props
}: UniversalScriptProps) {
    React.useEffect(() => {
        let cleanup: (() => void) | undefined;

        const mount = () => (cleanup = insertScript({ strategy, ...props }));

        if (strategy === 'lazyOnload') {
            // after load/idle
            if (document.readyState === 'complete') {
                // requestIdleCallback is optional
                (window as any).requestIdleCallback
                    ? (window as any).requestIdleCallback(mount)
                    : setTimeout(mount, 1);
            } else {
                const onLoad = () => {
                    (window as any).requestIdleCallback
                        ? (window as any).requestIdleCallback(mount)
                        : setTimeout(mount, 1);
                    window.removeEventListener('load', onLoad);
                };
                window.addEventListener('load', onLoad);
                return () => window.removeEventListener('load', onLoad);
            }
        } else {
            mount();
        }

        return () => cleanup?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [strategy, JSON.stringify({ ...props, onLoad: undefined, onError: undefined })]); // keep stable unless props change

    return null; // nothing at render time; we inject imperatively
}
