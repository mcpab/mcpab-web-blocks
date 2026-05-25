///
///

import { ReactNode } from 'react';

export type MeaningfulValue =
  | string
  | number
  | boolean
  | null
  | MeaningfulValue[]
  | { [key: string]: MeaningfulValue };

export type MeaningfulRecord = Record<string, MeaningfulValue>;

// definitely need a definition of the type of nodes
export type RenderingNode<T extends string, A extends MeaningfulRecord = MeaningfulRecord> = A & {
  type: T;
};

export type RenderingProp = MeaningfulRecord;
 
// this is the contact between the nodes  and the props
export type RenderingContract<T extends string> = {
  [K in T]: {
    node: RenderingNode<K>;
    props: RenderingProp;
  };
};
 

export type RenderedRegistry<T extends string, D extends RenderingContract<T>> = {
  [K in T]: {
    type: K;
    rendering: ({
      node,
      overrides,
    }: {
      node: D[K]['node'];
      overrides?: Partial<D[K]['props']>;
    }) => ReactNode;
  };
};
 
