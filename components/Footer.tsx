import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-white/10 pt-16 pb-8 px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-black text-white tracking-tighter mb-2">$DONALDO</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs">The Degen Jackpot</p>
        </div>

        <div className="flex gap-8 mb-8">
          <a 
            href="https://x.com/RealDonaldoSol" 
            target="_blank" 
            rel="noreferrer"
            className="w-16 h-16 rounded-xl bg-black border-4 border-white flex items-center justify-center text-white text-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a 
            href="https://t.me/RealDonaldoSol" 
            target="_blank" 
            rel="noreferrer"
            className="w-16 h-16 rounded-xl bg-[#229ED9] border-4 border-white flex items-center justify-center text-white text-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-white hover:text-[#229ED9] shadow-[0_0_20px_#229ED9]"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>

        <div className="mb-12">
            <a 
              href="https://twitter.com/intent/follow?screen_name=RealDonaldoSol" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-bold font-sans px-8 py-3 rounded-full border-4 border-transparent hover:border-white hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                <span>Follow @RealDonaldoSol</span>
            </a>
        </div>

        <div className="max-w-2xl text-gray-600 text-xs leading-relaxed mb-8">
          <p>
            DISCLAIMER: $DONALDO IS A MEME COIN FOR ENTERTAINMENT PURPOSES ONLY. 
            THERE IS NO FORMAL TEAM OR ROADMAP. THE COIN IS COMPLETELY USELESS AND FOR ENTERTAINMENT ONLY.
            CRYPTOCURRENCY MAY BE UNREGULATED IN YOUR JURISDICTION. THE VALUE OF CRYPTOCURRENCIES MAY GO DOWN AS WELL AS UP.
            PROFITS MAY BE SUBJECT TO CAPITAL GAINS OR OTHER TAXES APPLICABLE IN YOUR JURISDICTION.
          </p>
        </div>

        <div className="text-gray-700 text-sm font-mono">
          &copy; {new Date().getFullYear()} $DONALDO. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;