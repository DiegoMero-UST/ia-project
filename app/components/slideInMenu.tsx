import Link from 'next/link';

interface SlideMenuProps {
  handleClick: () => void;
}

export default function SlideMenu({ handleClick }: SlideMenuProps) {
  return (
    <ul className="fixed font-semibold backdrop-blur-sm top-[12vh] z-20 p-10 h-[100vh] w-screen text-white text-3xl flex flex-col gap-8 bg-[#333333]/80 animate-slide-in-menu">
      <li className=" ml-auto" onClick={handleClick}>
        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="white" />
        </svg>
      </li>
      <li onClick={handleClick}><Link href="/">About</Link></li>
      <li onClick={handleClick}><Link href="/">Services</Link></li>
      <li onClick={handleClick}><Link href="/">Case Studies</Link></li>
      <li onClick={handleClick}><Link href="/">Blog</Link></li>
      <li onClick={handleClick}><Link href="/">Contact</Link></li>
    </ul>
  )
}