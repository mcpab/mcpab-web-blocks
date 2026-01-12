// src/components/sections/SectionWithAccordion/SectionWithAccordion.tsx
'use client';

import { MediaAndTextNoMessage, MediaText } from '../../../components/layout/sections';
import { LinkTypeComponent } from '../../..///core/link';
import Section from '../../..//components/Section';
import { StandardStack } from '../../..//components/styled';
import { SectionTitle } from '../../..//components/typography';
import TextWithAccordion, { TextWithAccordionBlock } from '../../../components/content';
 
import Pad from '../../../components/Pad';

export type SectionWithAccordionProps = {
  /** Section heading (rendered with StyledTitle h4). */
  title: string;
  linkComponent: LinkTypeComponent;
  /**
   * Optional media+text layout props (message will be provided by this component).
   * Omit this to render just the text/accordion content.
   */
  mediaAndTextProps?: MediaAndTextNoMessage;
  /** Content blocks. */
  blocks: TextWithAccordionBlock[];
  /** Wrap content in <Pad /> (adds inner spacing). Defaults to true. */
  pad?: boolean;
};

/**
 * Page section that renders a header + narrative/FAQ content,
 * optionally composed with `MediaText` for a split layout.
 */
const SectionWithAccordion: React.FC<SectionWithAccordionProps> = ({
  title,
  linkComponent,
    mediaAndTextProps,
  blocks,
  pad = true,
}) => {
  const text = <TextWithAccordion LinkComponent={linkComponent} blocks={blocks} />;

  // Respect right/left orientation for consistent inner padding (Pad)
  const reverse = !!(
    mediaAndTextProps &&
    'reverse' in mediaAndTextProps &&
    mediaAndTextProps.reverse
  );
  const message = pad ? <Pad reverse={reverse}>{text}</Pad> : text;

  const body = mediaAndTextProps ? <MediaText {...mediaAndTextProps} message={message} /> : message;

  return (
    <Section size="sm" sx={{ width: '100%' }}>
      <StandardStack id="stack" size="large">
        <SectionTitle gutterBottom sx={{ width: '100%' }}>
          {title}
        </SectionTitle>
        {body}
      </StandardStack>
    </Section>
  );
};

export default SectionWithAccordion;
