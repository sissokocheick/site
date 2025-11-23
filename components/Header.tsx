import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-[0_0_20px_rgba(213,0,249,0.15)]' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <span className="text-donaldo-gold drop-shadow-[0_0_5px_rgba(255,215,0,0.8)] group-hover:animate-pulse">$DONALDO</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-donaldo-cyan font-bold tracking-wide uppercase text-sm transition-colors">About</button>
          <button onClick={() => scrollToSection('tokenomics')} className="text-white/80 hover:text-donaldo-cyan font-bold tracking-wide uppercase text-sm transition-colors">Tokenomics</button>
          <button onClick={() => scrollToSection('contract')} className="text-white/80 hover:text-donaldo-cyan font-bold tracking-wide uppercase text-sm transition-colors">How to Buy</button>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="https://x.com/RealDonaldoSol" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center text-white hover:bg-donaldo-cyan hover:text-black hover:border-donaldo-cyan hover:scale-110 transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          
          <a 
            href="https://raydium.io" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-donaldo-gold to-orange-500 text-black font-black px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:scale-105 transition-all transform uppercase tracking-wide text-sm md:text-base"
          >
            Buy Now <i className="fa-solid fa-rocket ml-1"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;