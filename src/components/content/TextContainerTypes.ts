import { InlineTextKind, RichText, SectionKind, SubSectionKind } from './defaultTextRegistries';
import { RenderingNode } from '../../core/rendering/RegistryTypes';

export type InlineTextNode<P extends InlineTextKind=InlineTextKind> = {
  id:string;
  node: RenderingNode<P>;
}

export type RichTextContainer = {
  id: string;
  kind: RichText;
  children: InlineTextNode[];
};

export type SectionContainer = {
  id: string;
  kind: SectionKind;
  node: RichTextContainer;
  children: (RichTextContainer | SubSectionContainer)[];
};

export type SubSectionContainer = {
  id: string;
  kind: SubSectionKind;
  node: RichTextContainer;
  children: RichTextContainer[];
};
// this is now the tree structure of the tree

export type RenderingTreeNode = RichTextContainer | SectionContainer | SubSectionContainer;

export type RenderingTree = {
  kind: 'root';
  id: 'root';
  children: RenderingTreeNode[];
};
