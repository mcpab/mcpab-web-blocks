


export type SectionCore = 'header' | 'nav' | 'main' | 'aside' | 'content' |
  'footer' | 'hero' | 'banner' | 'sidebar' | 'cta';

export type Cards = `card_${number}`;

export type Blocks = `block_${number}`;

export type Rows = `row_${number}`;

export type NodeID = SectionCore | Cards | Blocks | Rows;
