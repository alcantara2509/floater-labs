'use client';

import { useState, memo } from 'react';
import { usePathname } from 'next/navigation';
import './styles.css';
import { Squash as Hamburger } from 'hamburger-react';
import { Drawer, Box } from '@mui/material';
import NavList from './NavList';

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header>
      <div className="header">
        <div>Floater</div>
        <Hamburger size={28} toggled={isOpen} toggle={setOpen} color="whitesmoke" />
      </div>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleClose}
        className="drawer-wrapper"
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
        >
          <NavList pathname={pathname!} setOpen={setOpen} path="/" title="Home" />
          <NavList pathname={pathname!} setOpen={setOpen} path="/home" title="About" />
          <NavList pathname={pathname!} setOpen={setOpen} path="/contact" title="Contact" />
          <NavList pathname={pathname!} setOpen={setOpen} path="/test" title="Test" />
        </Box>
      </Drawer>
    </header>
  );
}

export default memo(Navbar);
