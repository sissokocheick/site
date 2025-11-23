import React, { useState } from 'react';

const Contract: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const ca = "26rfwLZUnGLQ8wYtUbdS6rn6uUF5N5y4tp82ANG2pump";

  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contract" className="py-20 px-4 relative z-20">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-donaldo-gold/50 shadow-[0_0_50px_rgba(255,215,0,0.1)] text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase">
            Contract Address (CA)
          </h2>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-donaldo-gold via-donaldo-purple to-donaldo-cyan rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col md:flex-row items-center bg-black rounded-xl p-2 md:p-3 border border-white/10">
              <code className="flex-grow font-mono text-sm md:text-lg text-donaldo-gold break-all px-4 py-2 text-center md:text-left">
                {ca}
              </code>
              
              <button 
                onClick={handleCopy}
                className="w-full md:w-auto mt-2 md:mt-0 bg-white/10 hover:bg-donaldo-gold hover:text-black text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px]"
              >
                {copied ? (
                  <>
                    <i className="fa-solid fa-check"></i> COPIED!
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-copy"></i> COPY
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            Double check the address before sending funds. Trade only on Solana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contract;