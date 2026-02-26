/**
 * @deprecated
 * Legacy renderer prop type from an earlier design where renderers received the
 * full `TextDrawerElement` and `TextDrawerElementUI` directly.
 *
 * @remarks
 * Superseded by the {@link Registry} / {@link RegistryEntry} pattern in
 * `rendersRegistryTypes.ts`, where each entry's `props` factory maps the
 * comprehensive {@link TextPolicyProps} onto a renderer-specific output type.
 *
 * Kept for reference; not used by any current renderer or component.
 */
import React from 'react';
import { TextDrawerElement, TextDrawerElementUI } from '../TextDrawerTypes';

/** @deprecated See module-level deprecation notice. */
export type TextNodeRendererProps = {
  id: string;
  textDrawerElement: TextDrawerElement;
  textDrawerElementUI: TextDrawerElementUI;
};

/** @deprecated See module-level deprecation notice. */
export type TextNodeRender = React.ComponentType<TextNodeRendererProps>;




