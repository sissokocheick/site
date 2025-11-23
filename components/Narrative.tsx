import React from 'react';

const Narrative: React.FC = () => {
  const cards = [
    {
      icon: "fa-flag-usa",
      title: "TRUMP",
      subtitle: "UNMATCHED POWER",
      desc: "The ultimate winner. He brings the energy, the crowd, and the relentless drive to dominate every sector.",
      color: "text-donaldo-gold",
      border: "border-donaldo-gold/30",
      bg: "bg-donaldo-gold/5"
    },
    {
      icon: "fa-futbol",
      title: "RONALDO",
      subtitle: "GLOBAL FAME",
      desc: "The most famous human on earth. Billions of fans. The 'Siuuu' heard around the world. Pure excellence.",
      color: "text-donaldo-cyan",
      border: "border-donaldo-cyan/30",
      bg: "bg-donaldo-cyan/5"
    },
    {
      icon: "fa-sack-dollar",
      title: "MBS",
      subtitle: "UNLIMITED MONEY",
      desc: "The bankroll behind the biggest dreams. When oil money enters the chat, candles only go green.",
      color: "text-donaldo-purple",
      border: "border-donaldo-purple/30",
      bg: "bg-donaldo-purple/5"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">THE BLUE CHIP <span className="text-donaldo-cyan">TRIO</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We aren't just a coin. We are a movement combining the three most powerful forces in the universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className={`glass-panel p-8 rounded-2xl border ${card.border} relative overflow-hidden group hover:-translate-y-2 transition-all duration-300`}>
              <div className={`absolute top-0 right-0 w-32 h-32 ${card.bg} rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500`}></div>
              
              <div className={`text-5xl mb-6 ${card.color} relative z-10`}>
                <i className={`fa-solid ${card.icon}`}></i>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-1 tracking-tight uppercase">{card.title}</h3>
              <h4 className={`text-sm font-bold ${card.color} mb-4 tracking-wider`}>{card.subtitle}</h4>
              
              <p className="text-gray-400 leading-relaxed relative z-10">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Narrative;