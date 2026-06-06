import * as React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';
import { PageTitle, SectionTitle, type TitleProps } from '../typography/Title';
import { toTitleCase } from '../../lib/text/transform';

type TitleLocalProps = Omit<TitleProps, 'sectionType'>;
 

/** Props for {@link MainTitle}. */
export type MainTitleProps = {
  /** Primary title text rendered as a {@link PageTitle}. */
  title: string;
  /** Supporting subtitle text rendered as a {@link SectionTitle}. */
  subtitle: string;
  /**
   * When `true`, title and subtitle are passed through `toTitleCase` before rendering.
   * @defaultValue `true`
   */
  autoCapitalize?: boolean;
  /** Slot-level prop overrides applied to the wrapper and title elements. */
  slotProps?: {
    /** Props forwarded to the `Stack` wrapper. */
    stack?: StackProps;
    /** Props forwarded to the primary title. */
    title?: TitleLocalProps;
    /** Props forwarded to the subtitle. */
    subtitle?: TitleLocalProps;
  };
};

/**
 * Renders a vertical stack containing a page title and supporting subtitle.
 *
 * Typically used as foreground content inside {@link BannerCarousel} or {@link BannerStatic}.
 *
 * @example
 * ```tsx
 * <MainTitle
 *   title="Welcome to Acme"
 *   subtitle="Building the future"
 * />
 * ```
 */
export function MainTitle({ title, subtitle, autoCapitalize = true, slotProps }: MainTitleProps) {
  const renderedTitle = autoCapitalize ? toTitleCase(title) : title;
  const renderedSubtitle = autoCapitalize ? toTitleCase(subtitle) : subtitle;

  return (
    <Stack spacing={4} {...slotProps?.stack}>
      <PageTitle {...slotProps?.title}>{renderedTitle}</PageTitle>
      <SectionTitle {...slotProps?.subtitle}>{renderedSubtitle}</SectionTitle>
    </Stack>
  );
}

export default React.memo(MainTitle);
