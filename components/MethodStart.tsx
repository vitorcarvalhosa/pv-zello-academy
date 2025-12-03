import React from 'react';
import { Calculator, Diamond, Magnet, Repeat, Heart } from 'lucide-react';

const MethodStart: React.FC = () => {
  const pillars = [
    {
      letter: 'S',
      title: 'Sistema de Precificação Lucrativa',
      desc: 'Aprenda a calcular seus serviços de forma estratégica, garantindo lucro em cada atendimento — sem depender de volume.',
      icon: <Calculator className="w-8 h-8" />
    },
    {
      letter: 'T',
      title: 'Técnicas com Valor Percebido',
      desc: 'Aplique serviços mais valorizados, que encantam o cliente e justificam um preço mais alto.',
      icon: <Diamond className="w-8 h-8" />
    },
    {
      letter: 'A',
      title: 'Atração Estratégica nas Redes',
      desc: 'Transforme suas redes sociais em máquinas de atrair clientes diariamente — sem depender de indicação.',
      icon: <Magnet className="w-8 h-8" />
    },
    {
      letter: 'R',
      title: 'Receita com Constância',
      desc: 'Crie um plano claro pra ter previsibilidade de faturamento, com ações semanais e estratégias simples.',
      icon: <Repeat className="w-8 h-8" />
    },
    {
      letter: 'T',
      title: 'Transformar Clientes em Fãs',
      desc: 'Fidelize cada cliente com excelência, pós-venda e marketing boca a boca — e tenha uma base fiel que volta.',
      icon: <Heart className="w-8 h-8" />
    },
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase mb-2 block">A Solução Definitiva</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Conheça o Método <span className="text-brand-accent italic">START</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto">
            Foi esse método que me tirou da garagem de casa até chegar nos R$40.000 por mês.
            Um caminho validado para transformar sua estética em um negócio lucrativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="group bg-brand-primary p-6 rounded-2xl border border-white/5 hover:border-brand-accent transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  {pillar.icon}
                </div>
                <span className="text-6xl font-black text-white/5 group-hover:text-brand-accent/10 transition-colors">
                  {pillar.letter}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {pillar.title}
              </h3>
              <p className="text-brand-muted leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
          
          {/* Last card is call to action/summary */}
          <div className="bg-gradient-to-br from-brand-accent to-blue-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg transform md:scale-105 border border-white/20">
             <h3 className="text-2xl font-bold text-white mb-4">
               Mude o jogo
             </h3>
             <p className="text-blue-100 mb-6">
               Esse é o método pra quem quer viver de estética automotiva com lucro e segurança.
             </p>
             <button onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-brand-accent font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
               Quero aplicar o START
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodStart;