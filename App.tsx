import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Narrative from './components/Narrative';
import Tokenomics from './components/Tokenomics';
import Contract from './components/Contract';
import Footer from './components/Footer';
import Background from './components/Background';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Background />
      
      <Header />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <Marquee />
        <Narrative />
        <Tokenomics />
        <Contract />
      </main>

      <Footer />
    </div>
  );
};

export default App;