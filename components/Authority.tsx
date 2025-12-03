import React from 'react';
import { BadgeCheck, Star } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-20 bg-brand-primary border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
                <div className="absolute inset-0 bg-brand-accent rounded-2xl rotate-3 transform translate-x-2 translate-y-2 opacity-50"></div>
                <img 
                    src="https://picsum.photos/600/700?grayscale" 
                    alt="Lucas Detailer" 
                    className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] lg:aspect-square filter contrast-125"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white">Lucas</span>
                        <BadgeCheck className="w-5 h-5 text-brand-accent" />
                    </div>
                    <p className="text-sm text-brand-muted">De Uber a faturamento de R$40k/mês</p>
                </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              “Comecei lavando meu próprio carro… hoje ensino profissionais a faturarem alto.”
            </h2>
            
            <div className="space-y-5 text-brand-text leading-relaxed text-lg">
              <p>
                Meu nome é Lucas. Antes de ter uma empresa lucrativa, eu era motorista de aplicativo. 
                Comecei lavando meu carro por hobby, depois vizinhos, até montar meu espaço na garagem, sozinho e sem grana.
              </p>
              <p>
                Com o tempo, entendi que <strong className="text-white">não bastava fazer um bom serviço — eu precisava ter um negócio.</strong>
              </p>
              <p>
                Aprendi a precificar, usar o Instagram pra vender e fidelizar clientes. 
                Hoje minha estética fatura mais de <strong className="text-brand-accent">R$40 mil por mês</strong> de forma previsível.
              </p>
            </div>

            <div className="mt-8 p-6 bg-brand-dark rounded-xl border-l-4 border-brand-accent">
                <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white text-lg">Método de Campo de Batalha</h4>
                        <p className="text-brand-muted mt-1">
                            O Método START nasceu da prática, não de teoria. É exatamente o que uso na minha empresa até hoje. Sem fórmula mágica, apenas um passo a passo testado.
                        </p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;