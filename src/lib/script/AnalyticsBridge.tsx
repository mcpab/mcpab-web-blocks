// src/components/analytics/AnalyticsBridge.tsx
'use client';
import * as React from 'react';
import type { ScriptComponentLike, UniversalScriptProps } from '../../core/script/script-types';
import { HtmlScript } from '../../lib/script/HTMLScipt';

type AnalyticsBridgeProps = {
    ScriptComponent?: ScriptComponentLike;           // <- pluggable
    gtagId?: string;
};

export function AnalyticsBridge({
    ScriptComponent = HtmlScript,
    gtagId,
}: AnalyticsBridgeProps) {
    if (!gtagId) return null;

    return (
        <>
            <ScriptComponent
                id="ga-gtag"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
                strategy="afterInteractive"
            />
            <ScriptComponent
                id="ga-inline-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', '${gtagId}', { send_page_view: true });
        `,
                }}
            />
        </>
    );
}
