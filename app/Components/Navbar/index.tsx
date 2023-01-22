'use client'

import { useState } from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';
import './styles.css';
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const handlePathname = (path: string) => path === pathname ? 'selected' : '';

  return (
    <header>
      <Hamburger size={30} toggled={isOpen} toggle={setOpen} color={'#1e1e1e'} />
      <nav>
        <Link href={'/'} className={handlePathname('/')}>Home</Link>
        <Link href={'/home'} className={handlePathname('/home')}>Home</Link>
      </nav>
    </header>
  )
};

export default Navbar;