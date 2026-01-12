import type React from 'react';

export type RenderNode<P = unknown> = {
  key: React.Key;
  Component: React.ComponentType<P & { children?: React.ReactNode }>;
  props: P;
  children?: Record<string, RenderNode<any>>;
};

 
export type RenderRootNode<P = unknown> = {

  'root': RenderNode<P>;
  children?: Record<string, RenderNode<any>>;


}