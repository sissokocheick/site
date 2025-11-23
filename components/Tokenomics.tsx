import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-donaldo-purple">DEGEN</span> ECONOMICS
          </h2>
          <p className="text-gray-400">Optimized for maximum pump velocity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          {/* Large Block: Supply */}
          <div className="md:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden border border-white/5">
             <div className="absolute -right-10 -bottom-10 text-9xl text-white/5 rotate-12">
                <i className="fa-solid fa-coins"></i>
             </div>
             <h3 className="text-gray-400 font-bold uppercase tracking-widest mb-2">Total Supply</h3>
             <p className="text-5xl md:text-7xl font-black text-white tracking-tighter">1,000,000,000</p>
             <p className="text-donaldo-gold font-bold mt-2">1 BILLION $DONALDO</p>
          </div>

          {/* Tall Block: Taxes */}
          <div className="md:row-span-2 glass-panel rounded-3xl p-8 flex flex-col items-center justify-center border border-donaldo-cyan/20 bg-donaldo-cyan/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-full bg-donaldo-cyan/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
                 <i className="fa-solid fa-ban text-4xl text-donaldo-cyan"></i>
              </div>
              <h3 className="text-4xl font-black text-white mb-2">0%</h3>
              <p className="text-xl font-bold text-gray-300">Buy Tax</p>
              <div className="w-12 h-1 bg-white/20 mx-auto my-4"></div>
              <h3 className="text-4xl font-black text-white mb-2">0%</h3>
              <p className="text-xl font-bold text-gray-300">Sell Tax</p>
            </div>
          </div>

          {/* Bottom Left: Liquidity */}
          <div className="glass-panel rounded-3xl p-8 border border-orange-500/20 bg-orange-500/5 flex items-center gap-6">
             <div className="text-4xl text-orange-500">
                <i className="fa-solid fa-fire"></i>
             </div>
             <div>
               <h3 className="text-white font-black text-xl md:text-2xl">LIQUIDITY BURNED</h3>
               <p className="text-gray-400 text-sm">100% LP Tokens Burnt on Raydium</p>
             </div>
          </div>

          {/* Bottom Middle: Mint */}
          <div className="glass-panel rounded-3xl p-8 border border-green-500/20 bg-green-500/5 flex items-center gap-6">
             <div className="text-4xl text-green-500">
                <i className="fa-solid fa-lock"></i>
             </div>
             <div>
               <h3 className="text-white font-black text-xl md:text-2xl">MINT REVOKED</h3>
               <p className="text-gray-400 text-sm">Contract is immutable & safe</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;