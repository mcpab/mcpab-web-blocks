/**
 * @file DirMenu.tsx
 * Collapsible drawer menu with nested items (expand/collapse) and icons.
 */

'use client';
import * as React from 'react';
import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { toTitleCase } from '@/src/lib/text/transform';
import IconPicker from './IconPicker';
import type { MenuElement, MenuProps } from './types';

 

/** Uppercase transformer. */
const upper = (s: string) => s.toUpperCase();

/** Stable, recursive sort by `order` (undefined => bottom). */
const sortMenus = (menus: MenuElement[]): MenuElement[] =>
    menus
        .map(m => ({ ...m, children: sortMenus(m.children || []) }))
        .sort((a, b) => (a.order ?? Number.POSITIVE_INFINITY) - (b.order ?? Number.POSITIVE_INFINITY));

export type DirMenuProps = MenuProps;

/**
 * Drawer-based, collapsible navigation.
 *
 * - Top-left/center/right trigger button (depends on `position`).
 * - Clicking a link closes the drawer.
 * - Items with children toggle open/closed.
 */
const DirMenu: React.FC<DirMenuProps> = ({ menus, position, capitalize = true }) => {

    const [open, setOpen] = useState(false);
    const [openCollapse, setOpenCollapse] = useState<Record<string, boolean>>({});

    const sorted = useMemo(() => sortMenus(menus.filter(m => m.display !== false)), [menus]);

    const toggleItem = (path: string) =>
        setOpenCollapse(prev => ({ ...prev, [path]: !prev[path] }));

    const transform = capitalize ? upper : toTitleCase;

    const anchor: 'left' | 'right' | 'top' | 'bottom' =
        position === 'center' ? 'right' : position; // center aligns the trigger; drawer opens from right

    return (
        <>
            {/* Trigger button */}
            <IconButton
                onClick={() => setOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon color="inherit" />
            </IconButton>

            {/* Drawer panel */} 
            <Drawer
                anchor={anchor}
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{ paper: { sx: { minWidth: 320 } } }}
            >
                <List
                    sx={{ width: '100%', maxWidth: 420 }}
                    component="nav"
                    subheader={<ListSubheader component="div"><b>Menu</b></ListSubheader>}
                >
                    {/* Recursive list */}
                    <Typography component="div" sx={{ p: 2 }}>
                        {renderMenu(sorted, 0, openCollapse, toggleItem, setOpen, transform)}
                    </Typography>
                </List>
            </Drawer>
        </>
    );
};

export default React.memo(DirMenu);

/** Render a nested list of MenuElements (recursively). */
function renderMenu(
    items: MenuElement[],
    level: number,
    openCollapse: Record<string, boolean>,
    toggleItem: (path: string) => void,
    setOpen: (o: boolean) => void,
    transform: (s: string) => string
) {
    return (
        <List disablePadding>
            {items.map((item) => {
                const hasChildren = (item.children?.length ?? 0) > 0;

                return (
                    <Fragment key={`${item.path}-${item.name}`}>
                        <ListItem disablePadding sx={{ pl: level * 2 }}>
                            {/* Use ListItemButton for better a11y + hover/active styles */}
                            <ListItemButton
                                component={hasChildren ? 'div' : Link}
                                href={hasChildren ? undefined : item.path}
                                onClick={hasChildren ? () => toggleItem(item.path) : () => setOpen(false)}
                                aria-expanded={hasChildren ? !!openCollapse[item.path] : undefined}
                                aria-controls={hasChildren ? `submenu-${item.path}` : undefined}
                                sx={{
                                    '&:hover .MuiTypography-root': {
                                        transform: 'translateX(6px)',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <IconPicker name={item.name} />
                                </ListItemIcon>

                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                transition: 'transform .2s cubic-bezier(.4,2,.6,1), color .2s',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {transform(item.name)}
                                        </Typography>
                                    }
                                />

                                {/* Toggle chevron if there are children */}
                                {hasChildren ? (openCollapse[item.path] ? <ExpandLess /> : <ExpandMore />) : null}
                            </ListItemButton>
                        </ListItem>

                        {/* Children */}
                        {hasChildren && (
                            <Collapse
                                in={!!openCollapse[item.path]}
                                timeout="auto"
                                unmountOnExit
                                id={`submenu-${item.path}`}
                            >
                                <Box sx={{ pl: (level + 1) * 2 }}>
                                    {renderMenu(item.children, level + 1, openCollapse, toggleItem, setOpen, transform)}
                                </Box>
                            </Collapse>
                        )}

                        {/* Optional divider */}
                        {item.divider ? <Divider component="li" /> : null}
                    </Fragment>
                );
            })}
            <Divider />
        </List>
    );
}
