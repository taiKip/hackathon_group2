import React from 'react'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const Navbar = () => {
    
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div>
        <MenuIcon className="w-5" />
      </div>
    
    </nav>
  );
}

export default Navbar