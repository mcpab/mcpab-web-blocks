import * as React from 'react';
import { BoxProps } from '@mui/material/Box';
import { StaticImageDataLike, ImageComponentLike } from './image.cjs';
import { SxProps, Theme } from '@mui/material/styles';

/**
 * Responsive minimum-height design tokens for section-sized layout blocks.
 *
 * Values are keyed by semantic size and map to MUI breakpoint values (`xs`, `md`, `lg`).
 */

/**
 * Section min-height tokens by semantic size.
 */
declare const SECTION_MIN_H: {
    readonly micro: {
        readonly xs: "160px";
        readonly md: "200px";
        readonly lg: "240px";
    };
    readonly compact: {
        readonly xs: "300px";
        readonly md: "360px";
        readonly lg: "400px";
    };
    readonly sm: {
        readonly xs: "420px";
        readonly md: "520px";
        readonly lg: "560px";
    };
    readonly md: {
        readonly xs: "520px";
        readonly md: "640px";
        readonly lg: "720px";
    };
    readonly lg: {
        readonly xs: "600px";
        readonly md: "760px";
        readonly lg: "880px";
    };
    readonly xl: {
        readonly xs: "720px";
        readonly md: "880px";
        readonly lg: "1040px";
    };
};
/** Semantic size keys for {@link SECTION_MIN_H}. */
type SectionSize = keyof typeof SECTION_MIN_H;
/** Convenience helper for MUI `sx` usage. */
declare const sectionMinHeightSx: (size: SectionSize) => SxProps<Theme>;

/**
 * Background image configuration for {@link BackgroundBox}.
 */
type ImageConf = {
    /** Image source. Supports URL strings and static imports. */
    src: string | StaticImageDataLike;
    /**
     * `object-fit` mode used in full-bleed rendering.
     *
     * @default 'cover'
     */
    mode?: 'cover' | 'contain' | 'scale-down';
    /**
     * Optional overlay color rendered between image and content.
     */
    overlayColor?: string;
    /**
     * Image opacity for full-bleed rendering.
     *
     * @default 1
     */
    opacity?: number;
    /**
     * CSS `object-position` used to place the image focal point.
     *
     * @default '50% 50%'
     */
    objectPosition?: string;
    /**
     * CSS transform applied to the image element.
     */
    transform?: string;
    /**
     * Optional width constraint that enables width-capped mode.
     */
    width?: string;
    /**
     * `sizes` hint forwarded to the image component.
     *
     * @defaultValue '100vw' in full-bleed mode
     */
    sizes?: string;
    /**
     * Enables priority loading for critical, above-the-fold images.
     *
     * @default false
     */
    priority?: boolean;
    /**
     * Image quality passed to the image component.
     *
     * @default 70
     */
    quality?: number;
    /**
     * Placeholder behavior while image loads.
     *
     * @defaultValue 'blur' for static imports, otherwise 'empty'
     */
    placeholder?: 'blur' | 'empty';
    /**
     * Disables built-in image optimization when true.
     *
     * @default false
     */
    unoptimized?: boolean;
    /**
     * Aspect ratio used by width-capped mode (`number` or CSS ratio string).
     *
     * @defaultValue inferred from static image dimensions, otherwise '16 / 9'
     */
    aspectRatio?: string | number;
};
/**
 * Props for {@link BackgroundBox}.
 */
type BackgroundBoxProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Optional background image configuration.
     */
    imageConf?: ImageConf;
    /**
     * Foreground content rendered above image and overlay layers.
     */
    children?: React.ReactNode;
    /**
     * Additional styles applied to the root MUI `Box`.
     */
    sx?: SxProps<Theme>;
    /**
     * Class name applied to the root element.
     */
    className?: string;
    /** Image renderer compatible with Next.js Image-like props. */
    ImageComponent: ImageComponentLike;
};
/**
 * Container that renders an optional background image, optional overlay, and foreground content.
 *
 * @remarks
 * - If `imageConf.width` is set, image is rendered in width-capped mode.
 * - Without `imageConf.width`, image is rendered full-bleed.
 */
declare const BackgroundBox: React.FC<BackgroundBoxProps>;

/** Props for {@link BannerStatic}. */
type BannerStaticProps = {
    /** Background image configuration (src, overlay, transform, etc.). */
    image: ImageConf;
    /**
     * MUI `BoxProps` forwarded to the `Section` root.
     * `id` and `sx` are extracted and handled explicitly to avoid spreading conflicts.
     */
    boxProps?: BoxProps;
    /** Band height token. @defaultValue `'micro'` */
    size?: SectionSize;
    /** Foreground content rendered over the background image. */
    children: React.ReactNode;
    /** Image rendering component (e.g. Next.js `Image`). */
    ImageComponent: ImageComponentLike;
};
declare const _default: React.NamedExoticComponent<BannerStaticProps>;

export { type BackgroundBoxProps as B, type ImageConf as I, type SectionSize as S, _default as _, type BannerStaticProps as a, BackgroundBox as b, SECTION_MIN_H as c, sectionMinHeightSx as s };
