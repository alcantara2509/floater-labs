'use client';

import { memo } from 'react';
import Link from 'next/link';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';

interface Params {
  pathname: string;
  setOpen: Function;
  path: string;
  title: string;
}

function NavList({ pathname, setOpen, path, title } : Params) {
  const handlePathname = (currPath: string) => (currPath === pathname ? 'selected w-full' : 'w-full');

  return (
    <List>
      <ListItem disablePadding>
        <Link
          href={path}
          className={handlePathname(path)}
          onClick={() => setOpen(false)}
        >
          <ListItemButton>
            <ListItemIcon>
              icon
            </ListItemIcon>
            {title}
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  );
}

export default memo(NavList);
