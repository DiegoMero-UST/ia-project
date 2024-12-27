'use client'

import Image from "next/image";
import SlideMenu from "./slideInMenu";
import { useState } from "react";

export default function Navbar() {
  const [togglemenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!togglemenu);
  }


  return (
    <nav className="h-[12vh] flex items-center justify-around gap-40 bg-[#333333] sticky top-0 z-10">
      <h2 className="text-white">LOGO</h2>
      <Image
        onClick={handleClick}
        src='/burguer-menu2.svg'
        alt="Burger Menu"
        width={40}
        height={40}
      />
      {togglemenu && <SlideMenu handleClick={handleClick} />}
    </nav>
  );
}
