import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import FacebookLink from './FacebookLink';
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex h-32 w-full items-center justify-between px-4 py-3 uppercase transition-all duration-300 sm:px-28 ${
        isScrolled
          ? 'bg-[#171717] bg-opacity-10 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="z-50 mr-8">
        <Link to="/">
          {}
          <img
            src={
              isMenuOpen
                ? 'https://res.cloudinary.com/dayojijed/image/upload/v1746444960/logo_kmyo1d.svg'
                : 'https://res.cloudinary.com/dayojijed/image/upload/v1746444960/logo_kmyo1d_white_lka5tp.svg'
            }
            alt="Website logo link to home page"
            className="h-auto w-28 md:w-40 lg:w-44"
            style={{ maxWidth: '180px' }}
          />
        </Link>
      </div>

      {/* Mobile Burger Menu */}
      <button
        className="z-50 flex flex-col items-center justify-center p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        {/* Two Lines or X */}
        <div
          className={`relative  h-0.5 w-6 transition-all duration-300 ${
            isMenuOpen ? 'translate-y rotate-45 bg-[#171717]' : 'bg-[#f3f3f3]'
          }`}
        ></div>
        <div
          className={`relative mt-1 h-0.5 w-6 transition-all duration-300 ${
            isMenuOpen
              ? '-translate-y-1.5 -rotate-45 bg-[#171717]'
              : 'bg-[#f3f3f3]'
          }`}
        ></div>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 top-0 h-screen w-full bg-[#f3f3f3] opacity-[0.8] shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="mt-64 flex flex-col items-center gap-4 space-y-8 py-4 text-2xl font-bold text-[#171717]">
          <LinkButton to="/about" onClick={toggleMenu}>
            אודות
          </LinkButton>
          <LinkButton to="/contact" onClick={toggleMenu}>
            צור-קשר
          </LinkButton>
          <LinkButton to="/contact" onClick={toggleMenu}>
            english
          </LinkButton>
          <FacebookLink />
        </nav>
      </div>
    </header>
  );
}

export default Header;
