import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-donaldo-purple/20 rounded-full blur-[100px] animate-pulse-fast"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-donaldo-cyan/20 rounded-full blur-[100px] animate-pulse-fast delay-700"></div>

      <div className="text-center z-10 max-w-5xl mx-auto mt-16 md:mt-0 flex flex-col items-center">
        <div className="inline-block mb-4 animate-float">
          <span className="px-4 py-1 rounded-full border border-donaldo-gold/30 bg-donaldo-gold/10 text-donaldo-gold font-bold text-xs md:text-sm uppercase tracking-widest backdrop-blur-sm">
            The Blue Chip Meme Coin
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-2xl">
          THE DEGEN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-donaldo-gold via-yellow-300 to-orange-500 text-glow-gold">JACKPOT</span>
        </h1>
        
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-300 mb-8 mt-4 max-w-3xl mx-auto leading-relaxed">
          <span className="text-white">Trump (Power)</span> + <span className="text-donaldo-cyan">Ronaldo (Fame)</span> + <span className="text-donaldo-purple">MBS (Money)</span> = <span className="text-donaldo-gold text-3xl">17,000x</span>
        </h2>

        {/* Massive Buttons Section */}
        <div className="flex flex-col gap-6 w-full max-w-2xl mt-4">
           {/* Buy Button */}
           <a 
             href="#contract"
             className="w-full text-center bg-donaldo-gold text-black font-black text-4xl py-6 rounded-2xl border-4 border-white/10 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group"
           >
             <span className="group-hover:animate-pulse">APE IN NOW 💊</span>
           </a>

           <div className="flex flex-col md:flex-row gap-6 w-full">
              {/* Twitter Button: Massive, Black, White Shadow */}
              <a 
                href="https://x.com/RealDonaldoSol" 
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-black text-white font-black text-2xl py-5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-[8px_8px_0px_0px_#FFFFFF] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 group-hover:animate-bounce"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                RAID ON X ⚔️
              </a>

              {/* Telegram Button: Massive, Blue, Black Shadow */}
              <a 
                href="https://t.me/RealDonaldoSol" 
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-[#229ED9] text-white font-black text-2xl py-5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:animate-wiggle hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fa-brands fa-telegram text-3xl"></i> JOIN TELEGRAM ✈️
              </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;