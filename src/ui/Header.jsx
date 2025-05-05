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
          ? 'bg-stone-300 bg-opacity-10 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="z-50 mr-8">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dayojijed/image/upload/v1733499161/logo_kmyo1d.svg"
            alt="Website logo link to home page"
            className="h-auto w-28 md:w-40 lg:w-44"
            style={{ maxWidth: '180px' }}
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className=" hidden items-center  sm:flex sm:gap-8 md:text-lg">
        <LinkButton to="/projects">פרוייקטים</LinkButton>
        <LinkButton to="/about">אודות</LinkButton>
        <LinkButton to="/contact">צור-קשר</LinkButton>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-black transition-transform duration-300 hover:scale-110 hover:fill-yellow-500"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </div>

      {/* Mobile Burger Menu */}
      <button
        className="z-50 flex flex-col items-center justify-center p-2 focus:outline-none sm:hidden"
        onClick={toggleMenu}
      >
        {/* Two Lines or X */}
        <div
          className={`relative  h-0.5 w-6 bg-black transition-all duration-300 ${
            isMenuOpen ? 'translate-y rotate-45' : ''
          }`}
        ></div>
        <div
          className={`relative mt-1 h-0.5 w-6 bg-black transition-all duration-300 ${
            isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
          }`}
        ></div>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 top-0 h-screen w-full bg-stone-300 opacity-[0.8] shadow-md transition-all duration-300 sm:hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="mt-64 flex flex-col items-center gap-4 space-y-8 py-4 text-2xl font-bold">
          <LinkButton to="/projects" onClick={toggleMenu}>
            פרוייקטים
          </LinkButton>
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
