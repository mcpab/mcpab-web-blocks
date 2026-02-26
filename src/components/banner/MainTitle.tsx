import * as React from 'react';
import Stack from '@mui/material/Stack';
import type { StackProps } from '@mui/material/Stack';
import { PageTitle, SectionTitle, type TitleProps } from '../typography/Title';
import { toTitleCase } from '../../lib/text/transform';

type TitleLocalProps = Omit<TitleProps, 'sectionType'>;

/** A single title or subtitle block rendered by {@link MainTitle}. */
export type MainTitleBlock = {
  /** Text content. Strings are auto-capitalised when `autoCapitalize` is `true`. Accepts React nodes for rich content. */
  title: string | React.ReactNode;
  /**
   * Visual hierarchy level.
   * - `'primary'` — renders as `PageTitle` (h1-equivalent, large).
   * - `'secondary'` — renders as `SectionTitle` (h2-equivalent, smaller).
   * @defaultValue `'primary'`
   */
  type?: 'primary' | 'secondary';
  /** Per-block typography overrides, merged on top of `slotProps.title` / `slotProps.subtitle`. */
  titleProps?: TitleLocalProps;
};

/** Props for {@link MainTitle}. */
export type MainTitleProps = {
  /** Ordered list of title/subtitle blocks to render. */
  blocks: MainTitleBlock[];
  /**
   * When `true`, string titles are passed through `toTitleCase` before rendering.
   * Has no effect on React node titles.
   * @defaultValue `true`
   */
  autoCapitalize?: boolean;
  /** Slot-level prop overrides applied as defaults to all blocks of each type. */
  slotProps?: {
    /** Props forwarded to the `Stack` wrapper. */
    stack?: StackProps;
    /** Default typography props for all `'primary'` blocks. */
    title?: TitleLocalProps;
    /** Default typography props for all `'secondary'` blocks. */
    subtitle?: TitleLocalProps;
  };
};

/**
 * Renders a vertical stack of title and subtitle blocks.
 *
 * Each block in `blocks` is rendered as either a `PageTitle` (primary) or
 * `SectionTitle` (secondary), with per-block `titleProps` merged on top of
 * the shared `slotProps.title` / `slotProps.subtitle` defaults.
 *
 * Typically used as foreground content inside {@link BannerCarousel} or {@link BannerStatic}.
 *
 * @example
 * ```tsx
 * <MainTitle
 *   blocks={[
 *     { title: 'Welcome to Acme', type: 'primary' },
 *     { title: 'Building the future', type: 'secondary' },
 *   ]}
 * />
 * ```
 */
const MainTitle: React.FC<MainTitleProps> = ({
  blocks,
  autoCapitalize = true,
  slotProps,
}) => {
  return (
    <Stack spacing={4} {...slotProps?.stack}>
      {blocks.map((block, index) => {
        const content =
          typeof block.title === 'string' && autoCapitalize
            ? toTitleCase(block.title)
            : block.title;

        const isPrimary = (block.type ?? 'primary') === 'primary';
        const Component = isPrimary ? PageTitle : SectionTitle;
        const defaults = isPrimary ? slotProps?.title : slotProps?.subtitle;
        const componentProps = { ...defaults, ...block?.titleProps };

        return (
          <Component key={`main-title-${index}`} {...componentProps}>
            {content}
          </Component>
        );
      })}
    </Stack>
  );
};

export default React.memo(MainTitle);
