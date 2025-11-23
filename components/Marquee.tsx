import React from 'react';

const Marquee: React.FC = () => {
  const text = "$DONALDO TO THE MOON • THE DEGEN JACKPOT • TRUMP x RONALDO x MBS • SEND IT • ";
  
  return (
    <div className="w-full bg-donaldo-gold/10 border-y border-donaldo-gold/20 py-3 overflow-hidden relative backdrop-blur-sm z-20">
      <div className="whitespace-nowrap animate-marquee inline-block">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-donaldo-gold font-black text-xl md:text-2xl mx-4 uppercase tracking-widest">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;