// src/components/content/TextWithAccordion/TextWithAccordion.tsx
'use client';

import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box'; // CHANGED: import BoxProps for bgcolor typing
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { StandardStack, type StandardStackProps } from '@/src/components/styled';
import {
    SectionTitle,
    SubsubsectionTitle,
    type TitleProps, // type-only import
    type BodyTextProps, // CHANGED: type-only import from your typography barrel
} from '@src/components/typography';
import { mdInlineToNodes } from '@src/lib/text/inline';


/**
 * @packageDocumentation
 *
 * # TextWithAccordion
 *
 * A tiny “copy + FAQs” renderer that understands four block types:
 * - `p`          → paragraph (string processed via `mdInlineToNodes`, or pass a custom `node`)
 * - `h`          → heading (uses your `<SectionTitle>` / `<SubsubsectionTitle>` wrappers)
 * - `list`       → bullet list (items can be strings, React nodes, or `{ text, props }` objects)
 * - `accordion`  → collapsible group of nested blocks
 *
 * ## Typing highlights
 * - Paragraph props use **BodyTextProps** (Typography sans `variant`/`component`).
 * - Heading props use **Omit<TitleProps, 'sectionType'>** (semantic level is locked by the wrapper).
 * - List item bullets use `bgcolor` tokens (typed as `BoxProps['bgcolor']`).
 *
 * ## Accessibility
 * - Accordion summary uses **SectionTitleLabel** (visual size mapped to heading level) to avoid
 *   rendering an actual `<h*>` inside a button. Your document outline remains clean.
 */

type PType = {
    type: 'p';
    text: string;
    /** Optional extra props for the Typography paragraph (no variant/component). */
    props?: BodyTextProps;
    /** If provided, renders this node instead of `text`. */
    node?: React.ReactNode;
};

type HType = {
    type: 'h';
    text: string;
    /** Title vs subtitle selects h2 vs h4 wrappers. */
    variant?: 'title' | 'subtitle';
    /** Extra props for the heading wrapper (no `sectionType`). */
    props?: Omit<TitleProps, 'sectionType'>;
};

/** Permissive but ergonomic list item model. */
type ListItem =
    | string // common case
    | React.ReactNode // rare custom node
    | { text: string; props?: BodyTextProps } // per-item control
    | [text: string, props: BodyTextProps]; // tuple sugar

export type TextWithAccordionBlock =
    | PType
    | HType
    | { type: 'list'; items: ListItem[], bulletColor?: BoxProps['bgcolor']; } // CHANGED: typed for palette/system tokens}
    | { type: 'accordion'; title: string; variant?: 'title' | 'subtitle'; props?: Omit<TitleProps, 'sectionType'>; blocks: TextWithAccordionBlock[] }  ;

export type TextWithAccordionProps = {
    /** Compact/regular/loose spacing from your StandardStack. */
    size?: StandardStackProps['size'];
    /** Content blocks to render. */
    blocks: TextWithAccordionBlock[];
    /** Optional prefix for stable React keys when embedding multiple sets. */
    path?: string;
    /**
     * Bullet color for list dots (uses system `bgcolor` tokens).
     * @example 'text.primary' | 'primary.main' | '#333'
     */

};

/** Render a paragraph block. */
function PTypeToNode(p: PType, key?: string): React.ReactNode {
    if (p.node) return <React.Fragment key={key}>{p.node}</React.Fragment>;
    return (
        <Typography key={key} variant="narrative" {...p.props}>
            {mdInlineToNodes(p.text)}
        </Typography>
    );
}

/** Normalize all list item shapes to a single ReactNode. */
function ListItemToNode(item: ListItem): React.ReactNode {
    if (item == null) return null;

    if (typeof item === 'string') {
        return PTypeToNode({ type: 'p', text: item });
    }
    if (React.isValidElement(item)) {
        return <>{item}</>;
    }
    if (Array.isArray(item) && item.length === 2) {
        const [text, props] = item;
        return PTypeToNode({ type: 'p', text, props });
    }
    if (typeof item === 'object' && 'text' in item) {
        return PTypeToNode({ type: 'p', text: item.text, props: item.props });
    }

    return null;
}

/**
 * Render a narrative block with optional accordions and lists.
 * Use this as a flexible “copy + FAQs” body.
 */
const TextWithAccordion: React.FC<TextWithAccordionProps> = ({
    blocks,
    path,
    size = 'compact',
}) => {
    return <StandardStack size={size}>{renderBlocks(blocks, path)}</StandardStack>;
};

/** Bullet list with custom CSS bullet (dot) aligned to first text line. */
function BulletList({
    items,
    bulletColor = 'primary.main',
}: {
    items: ListItem[];
    bulletColor?: BoxProps['bgcolor']; // CHANGED: typed to system token
}) {
    return (
        <Box component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
            {items.map((it, i) => (
                <Box
                    key={i}
                    component="li"
                    position="relative"
                    pl={2.5}
                    mb={0.75}
                    sx={{
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 'calc(0.5lh - 3px)', // center dot on first line
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: bulletColor ?? 'text.primary', // CHANGED: use system token for palette roles
                        },
                    }}
                >
                    {ListItemToNode(it)}
                </Box>
            ))}
        </Box>
    );
}

function renderBlocks(
    blocks: TextWithAccordionBlock[],
    path = '',
): React.ReactNode {
    return blocks.map((b, i) => {
        const key = path ? `${path}.${i}` : `${i}`;

        switch (b.type) {
            case 'p':
                return PTypeToNode(b, key);

            case 'h': {
                const Component = b?.variant === 'subtitle' ? SubsubsectionTitle : SectionTitle;
                return (
                    <Component key={key} {...b.props}>
                        {mdInlineToNodes(b.text)}
                    </Component>
                );
            }

            case 'list':
                return <BulletList key={key} items={b.items} bulletColor={b.bulletColor ?? 'text.primary'} />;

            case 'accordion': {
                const Component = b?.variant === 'subtitle' ? SubsubsectionTitle : SectionTitle;
                const summaryId = `acc-s-${key}`;
                const panelId = `acc-p-${key}`;
                return (
                    <Accordion
                        key={key}
                        disableGutters
                        square
                        slotProps={{ transition: { unmountOnExit: true } }}
                        sx={{
                            bgcolor: 'transparent',
                            boxShadow: 'none',
                            '&::before': { display: 'none' }, // remove top divider
                        }}
                    >
                        <AccordionSummary
                            id={summaryId}
                            aria-controls={panelId}
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                px: 0,
                                minHeight: 0,
                                '&.Mui-expanded': { minHeight: 0 },
                                '& .MuiAccordionSummary-content': {
                                    my: 0.5,
                                    '&.Mui-expanded': { my: 0.5 },
                                },
                            }}
                        >
                            {/* Visual label sized like a heading without changing the outline. */}
                            <Component {...b.props}>{b.title}</Component>
                        </AccordionSummary>

                        <AccordionDetails id={panelId} aria-labelledby={summaryId}>
                            {renderBlocks(b.blocks, key)}
                        </AccordionDetails>
                    </Accordion>
                );
            }

            default:
                return null;
        }
    });
}

export default React.memo(TextWithAccordion); // CHANGED: memo for cheap re-renders
