import { PayloadMap } from 'src/core/hierarchy/hierarchyTypes';
import { MenuTreeElement, MenuProps } from '../MenuTypes';
import createMenuTree from '../prepareMenuTree';
import { DropDown_Client } from  './DropDown_Client';

export function DropDown<P extends PayloadMap<MenuTreeElement>>({
  hierarchy,
  overrides,
  indent = 0,
}: MenuProps<P>) {
  //
  //

  const treeRoot = createMenuTree<P>({ hierarchy, overrides, issues: [] });

  if (!treeRoot.ok) {
    const msg = treeRoot.issues[0]?.message ?? 'Unknown prepareMenuTree error';
    console.error('Failed to prepare menu tree:', treeRoot.issues);
    return <div>Menu prepare error: {msg}</div>;
  }
  const root = hierarchy.root;
  const rootOverrides = overrides.root?.payload;

  return <DropDown_Client root={root} treeFromRoot={treeRoot.root} rootOverrides={rootOverrides} />;

  //
}
