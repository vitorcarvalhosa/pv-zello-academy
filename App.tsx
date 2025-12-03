import React from 'react';
import Header from './components/Header';
import PainPoints from './components/PainPoints';
import MethodStart from './components/MethodStart';
import Authority from './components/Authority';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text overflow-x-hidden selection:bg-brand-accent selection:text-white">
      <Header />
      <PainPoints />
      <MethodStart />
      <Authority />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;