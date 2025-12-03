import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-brand-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-brand-dark border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pre-headline */}
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-brand-primary/50 border border-brand-secondary/50 backdrop-blur-sm">
          <p className="text-sm md:text-base font-medium text-brand-muted uppercase tracking-wider">
            Quem fatura bem com estética automotiva não trabalha mais, empreende.
          </p>
        </div>

        {/* Headline - Reduced Size */}
        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-8">
          Descubra o passo a passo pra sair do improviso e <span className="text-brand-accent">faturar seus primeiros R$10.000 por mês</span> com estética automotiva, começando da garagem da sua casa e com o método validado por quem já fatura R$40K.
        </h1>

        {/* Subheadline intro for bullets */}
        <p className="text-lg md:text-xl text-brand-muted mb-8 font-medium">
          Três coisas que você vai aprender na aula:
        </p>

        {/* Bullets (Exact Copy) - Reduced Size */}
        <div className="flex flex-col gap-3 mb-12 text-left max-w-3xl mx-auto">
          <div className="bg-brand-primary/40 p-4 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors flex gap-3">
            <span className="text-xl flex-shrink-0 mt-0.5">1️⃣</span>
            <p className="text-brand-text text-sm md:text-base leading-relaxed">
              Como precificar seus serviços com lucro e parar de depender de volume — pra ganhar mais, mesmo atendendo menos.
            </p>
          </div>

          <div className="bg-brand-primary/40 p-4 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors flex gap-3">
            <span className="text-xl flex-shrink-0 mt-0.5">2️⃣</span>
            <p className="text-brand-text text-sm md:text-base leading-relaxed">
              Como transformar suas redes sociais em uma vitrine de vendas, que atrai clientes todos os dias.
            </p>
          </div>

          <div className="bg-brand-primary/40 p-4 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors flex gap-3">
            <span className="text-xl flex-shrink-0 mt-0.5">3️⃣</span>
            <p className="text-brand-text text-sm md:text-base leading-relaxed">
              Como vender de forma natural e fidelizar clientes, pra nunca mais passar um mês sem faturar.
            </p>
          </div>
        </div>

        {/* YouTube Video */}
        <div className="mb-12 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black max-w-3xl mx-auto">
           <iframe 
             className="absolute top-0 left-0 w-full h-full"
             src="https://www.youtube.com/embed/NKccWjlZ-Zk" 
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowFullScreen
           ></iframe>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
            <Button onClick={scrollToOffer} className="w-full md:w-auto shadow-brand-accent/25 shadow-2xl animate-pulse">
              Quero conhecer o Método
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;