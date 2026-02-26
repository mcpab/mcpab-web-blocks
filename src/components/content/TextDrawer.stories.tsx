import type { Story } from '@ladle/react';
import {
  HierarchyTree,
  HierarchyTreeOverrides
} from 'src/core/hierarchy/hierarchyTypes';
import { hierarchyToTextDrawerProps } from './hierarchyToTextDrawerProps';
import TextDrawer from './TextDrawer';
import {
  RootTextElement,
  RootTextElementUI,
  TextDrawerElementUI
} from './TextDrawerTypes';

import { DefaultRendersRegistry } from './textNodeRenderers/defaultTextPolicyRegister';
import { Payload_Rg } from './textNodeRenderers/rendersRegistryTypes';
/**
 * FAQ accordion — 3 levels of depth to show indent policy.
 *
 * depth 0 — titleAndSubStd (collapsible section header)
 * depth 1 — titledText (title + body), labelOnly, simpleText
 * depth 2 — simpleText (bare text, deepest indent)
 *
 * Plans (section)
 *   └─ Free tier      (titledText — title + content)
 *       └─ Basic      (simpleText — bare text, depth 2)
 *       └─ Advanced   (labelOnly  — label only, depth 2)
 *   └─ Pro tier       (titledText — title + content)
 * Getting started     (titledText — leaf at depth 0)
 * Support             (simpleText — bare text, defaultOpen)
 * Pricing (titleAndSubDepth — depth-aware section, shrinks at depth > 0)
 *   └─ Monthly        (titledText)
 *   └─ Annual         (titledText)
 * Resources (titleAndSubStd — section)
 *   └─ Docs           (linkedLabel — clickable href, depth 1)
 *   └─ GitHub         (linkedLabel — clickable href, depth 1)
 */
const payloads = {
  plans: {
    title: 'Plans',
    subtitle: 'Choose the right plan for you',
    type: 'section',
    renderer: 'titleAndSubStd',
    order: 1,
  },
  // freeTier uses titleAndSubDepth — nested section at depth 1, title shrinks to h4
  freeTier: {
    title: 'Free tier',
    type: 'section',
    renderer: 'titleAndSubDepth',
    order: 1,
  },
  basic: {
    title: 'Basic',
    type: 'plainText',
    renderer: 'simpleText',
    content: 'Up to 3 projects, community support. No credit card needed.',
    order: 1,
  },
  advanced: {
    title: 'Advanced',
    type: 'plainText',
    renderer: 'labelOnly',
    order: 2,
  },
  proTier: {
    title: 'Pro tier',
    subtitle: 'For teams',
    type: 'paragraph',
    renderer: 'titledText',
    content: 'Unlimited projects, priority support, and team collaboration tools.',
    order: 2,
  },
  gettingStarted: {
    title: 'Getting started',
    subtitle: 'No account needed',
    type: 'paragraph',
    renderer: 'titledText',
    content: 'Visit our website and click "Get started". No credit card required.',
    order: 2,
  },
  support: {
    title: 'Do you offer support?',
    type: 'plainText',
    renderer: 'simpleText',
    content: 'Yes — community forums for free tier, dedicated email support for Pro.',
    order: 3,
  },
  // pricing uses titleAndSubDepth at depth 0 — same size as titleAndSubStd here,
  // but would shrink if nested deeper
  pricing: {
    title: 'Pricing',
    type: 'section',
    renderer: 'titleAndSubDepth',
    order: 4,
  },
  monthly: {
    title: 'Monthly plan',
    type: 'paragraph',
    renderer: 'titledText',
    content: '$19/month, cancel any time.',
    order: 1,
  },
  annual: {
    title: 'Annual plan',
    subtitle: 'Best value',
    type: 'paragraph',
    renderer: 'titledText',
    content: '$190/year — two months free.',
    order: 2,
  },
  // resources section uses linkedLabel children — href required in payload
  resources: {
    title: 'Resources',
    type: 'section',
    renderer: 'titleAndSubStd',
    order: 5,
  },
  docs: {
    title: 'Documentation',
    type: 'plainText',
    renderer: 'linkedLabel',
    href: 'https://docs.example.com',
    order: 1,
  },
  github: {
    title: 'GitHub',
    type: 'plainText',
    renderer: 'linkedLabel',
    href: 'https://github.com/example',
    order: 2,
  },
} as const satisfies Payload_Rg<DefaultRendersRegistry>;

type P = typeof payloads;

const hierarchy = {
  root: { id: 'faq-root' },
  nodes: {
    plans: { payload: payloads.plans, parent: 'root' },
    freeTier: { payload: payloads.freeTier, parent: 'plans' },
    basic: { payload: payloads.basic, parent: 'freeTier' },
    advanced: { payload: payloads.advanced, parent: 'freeTier' },
    proTier: { payload: payloads.proTier, parent: 'plans' },
    gettingStarted: { payload: payloads.gettingStarted, parent: 'root' },
    support: { payload: payloads.support, parent: 'root' },
    pricing: { payload: payloads.pricing, parent: 'root' },
    monthly: { payload: payloads.monthly, parent: 'pricing' },
    annual: { payload: payloads.annual, parent: 'pricing' },
    resources: { payload: payloads.resources, parent: 'root' },
    docs: { payload: payloads.docs, parent: 'resources' },
    github: { payload: payloads.github, parent: 'resources' },
  },
} as const satisfies HierarchyTree<P, RootTextElement>;

const overrides: HierarchyTreeOverrides<
  P,
  typeof hierarchy,
  RootTextElementUI,
  TextDrawerElementUI
> = {
  root: { payload: {} },
  nodes: {
    // defaultOpen: section starts expanded
    plans: { payload: { defaultOpen: true } },
    freeTier: { payload: { defaultOpen: true } },

    // defaultOpen on a leaf: open state is tracked in the store but has no
    // visual effect for leaf nodes (no collapse to open). Safe to set anyway.
    support: { payload: { defaultOpen: true } },

    // sx: inject arbitrary MUI sx onto the rendered output of that node.
    // The renderer must forward sx to its root element (SimpleText, TitledText do).
    monthly: { payload: { sx: { color: 'secondary.main' } } },
    annual: { payload: { sx: { color: 'success.main', fontStyle: 'italic' } } },

    // divider: flag available for renderers / layout wrappers to draw a
    // separator above the node. Not yet consumed by any renderer — kept here
    // as a reminder of how to wire it in when needed.
    pricing: { payload: { divider: true } },
  },
};

export default {
  title: 'Content/TextDrawer',
};

const result = hierarchyToTextDrawerProps({ hierarchy, overrides });

let Component = <></>;
if (!result.ok) {
  console.error('Failed to prepare text tree for story:', result.issues);
  Component = (
    <div style={{ color: 'red' }}>
      Text tree preparation error: {result.issues[0]?.message ?? 'Unknown error'}
    </div>
  );
} else {
  Component = <TextDrawer treeFromRoot={result.treeFromRoot} indent={2} />;
}

export const TextDrawerDefault: Story = () => (
  <div style={{ padding: 24, maxWidth: 600 }}>{Component}</div>
);

TextDrawerDefault.storyName = 'TextDrawer / FAQ';
