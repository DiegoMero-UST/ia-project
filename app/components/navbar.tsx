import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-[12vh] flex items-center justify-between p-5 bg-[#333333] sticky top-0 z-10">
      <h2 className="text-white">LOGO</h2>
      <Image
        src='/burguer-menu2.svg'
        alt="Burger Menu"
        width={40}
        height={40}
      />
    </nav>
  );
}
