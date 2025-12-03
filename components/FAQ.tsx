import React from 'react';
import { HelpCircle } from 'lucide-react';
import Button from './Button';

const FAQ: React.FC = () => {
  const objections = [
    {
      q: "Eu já sei o básico, não sei se vale a pena...",
      a: "O problema não é o básico — é a falta de estratégia. O curso vai direto ao ponto: te mostra como transformar o que você já sabe em lucro constante e previsível."
    },
    {
      q: "Eu não tenho dinheiro agora...",
      a: "O que sai mais caro é continuar perdendo cliente, cobrando errado e gastando sem retorno. Com menos de R$1 por dia você investe em um plano que pode te levar aos R$10 mil por mês."
    },
    {
      q: "Será que funciona pra mim?",
      a: "Se você já ama cuidar de carro e quer viver disso com dignidade, funciona sim. Não depende de região, loja luxuosa ou funcionário. Depende de método."
    },
    {
      q: "E se eu comprar e me arrepender?",
      a: "Você tem 15 dias de garantia total. Se não fizer sentido pra você, é só pedir reembolso. O risco é todo meu."
    }
  ];

  return (
    <section className="py-20 bg-brand-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-brand-accent mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold text-white mb-4">Ainda com dúvida se isso é pra você?</h2>
            <p className="text-brand-muted">Vamos acabar com isso agora.</p>
        </div>

        <div className="space-y-6">
            {objections.map((obj, idx) => (
                <div key={idx} className="bg-brand-dark p-6 rounded-xl border border-white/5 hover:border-brand-accent/50 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-2">
                        <span className="text-brand-accent">💥</span> {obj.q}
                    </h3>
                    <p className="text-brand-text/90 pl-8 leading-relaxed">
                        {obj.a}
                    </p>
                </div>
            ))}
        </div>

        {/* Final CTA Area */}
        <div className="mt-16 text-center bg-brand-dark/30 p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">
                Última chamada
            </h3>
            <p className="text-lg text-brand-muted mb-8 max-w-2xl mx-auto">
                Você pode continuar improvisando, dependendo de indicação, cobrando barato… 
                Ou pode aprender a estruturar um negócio real, com lucro, agenda cheia e reconhecimento.
            </p>
            <div className="flex justify-center">
                <Button 
                    onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="primary"
                    className="shadow-brand-accent/20"
                >
                    🔥 Quero transformar minha estética em um negócio lucrativo
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;