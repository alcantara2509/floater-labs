'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';
import { Squash as Hamburger } from 'hamburger-react';
import { Drawer, Box } from '@mui/material';

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const handlePathname = (path: string) => (path === pathname ? 'selected' : '');
  const handleClose = () => setOpen(false);

  return (
    <header>
      <div className="header">
        <div>Floater</div>
        <Hamburger size={28} toggled={isOpen} toggle={setOpen} color="whitesmoke" />
      </div>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleClose}
        className="drawer-wrapper"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <nav>
            <Link href="/" className={handlePathname('/')} onClick={handleClose}>Home</Link>
            <Link href="/home" className={handlePathname('/home')} onClick={handleClose}>Home</Link>
          </nav>
        </Box>
      </Drawer>
    </header>
  );
}

export default memo(Navbar);
