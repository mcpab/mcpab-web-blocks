import { PayloadMap } from 'src/core/hierarchy/hierarchyTypes';
import { DrawerMenu_Client } from './DrawerMenu_Client';
import { MenuProps, MenuTreeElement } from '../MenuTypes';
import prepareMenuTree from '../prepareMenuTree';

export function DrawerMenu<P extends PayloadMap<MenuTreeElement>>({
  hierarchy,
  overrides,
  indent = 2,
}: MenuProps<P>) {
  //
  //

  const treeRoot = prepareMenuTree<P>({ hierarchy, overrides, issues: [] });

  if (!treeRoot.ok) {
    const msg = treeRoot.issues[0]?.message ?? 'Unknown prepareMenuTree error';
    console.error('Failed to prepare menu tree:', treeRoot.issues);
    return <div>Menu prepare error: {msg}</div>;
  }
  const root = hierarchy.root;
  const rootOverrides = overrides.root?.payload;

  //
  return (
    <DrawerMenu_Client
      root={root}
      treeFromRoot={treeRoot.root}
      rootOverrides={rootOverrides}
      indent={indent}
    />
  );
  //
}
