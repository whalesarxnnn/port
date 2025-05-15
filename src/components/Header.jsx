import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 bg-bg-secondary/50 backdrop-blur-md z-50 border-b border-text-secondary/10">
      <nav className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        <span className="text-xl sm:text-2xl font-bold text-text-primary">SARXNNN</span>
        
        {/* Mobile Menu Button */}
        <button 
          ref={buttonRef}
          className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-text-primary hover:text-accent transition-colors px-2 py-1"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div 
              className="lg:hidden fixed inset-0 bg-bg-primary/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div 
              ref={menuRef}
              className="lg:hidden absolute top-full right-0 w-48 mt-2 mr-4 bg-bg-secondary backdrop-blur-md rounded-lg border border-text-secondary/10 overflow-hidden shadow-lg z-50"
            >
              <ul className="py-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="block px-4 py-2 text-text-primary hover:bg-accent/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
