
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-slate-200' : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight text-kirk-black">
          Kirkbridge<span className="text-fern">.</span>
        </a>
        
        <div className="hidden md:flex space-x-12 items-center">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#philosophy">Philosophy</NavLink>
          <NavLink href="#foundation">Foundation</NavLink>
          <a 
            href="#contact" 
            className="px-6 py-2 border border-kirk-black hover:bg-fern hover:border-fern hover:text-white transition-all duration-300 font-sans text-sm uppercase tracking-widest"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon (Visual Only for design consistency) */}
        <div className="md:hidden">
          <div className="w-6 h-px bg-kirk-black mb-1.5"></div>
          <div className="w-6 h-px bg-kirk-black"></div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    className="text-sm uppercase tracking-widest font-medium text-kirk-black/70 hover:text-fern transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;
