import React from 'react';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from './Button';

const Offer: React.FC = () => {
  const benefits = [
    "Acesso imediato a todas as aulas gravadas",
    "Plano de ação passo a passo (Método START)",
    "Planilha automática de precificação lucrativa",
    "Templates no Canva prontos pra Instagram",
    "Agente de IA para textos de marketing",
    "Aula bônus de tráfego pago básico",
    "Lista de fornecedores recomendados",
    "Comunidade no WhatsApp (Networking)",
    "Consultoria individual para plano de ação"
  ];

  return (
    <section id="offer" className="py-24 bg-brand-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Da Garagem aos 40K
            </h2>
            <p className="text-xl text-brand-muted max-w-3xl mx-auto">
                O caminho prático pra sair do improviso e alcançar seus primeiros <span className="text-white font-bold">R$10.000 mensais</span>.
            </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-brand-primary rounded-3xl border border-white/10 shadow-2xl overflow-hidden max-w-lg mx-auto transform hover:scale-[1.01] transition-transform duration-300 relative">
            
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                OFERTA ESPECIAL
            </div>

            <div className="p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-8 pb-8 border-b border-white/10">
                    <span className="text-brand-muted line-through text-lg">De R$ 997,00</span>
                    <div className="flex items-center justify-center gap-1 mt-2">
                        <span className="text-2xl text-brand-muted font-light">12x de</span>
                        <span className="text-5xl md:text-6xl font-black text-white">29,74</span>
                    </div>
                    <p className="text-brand-accent font-semibold mt-2">ou R$ 297,00 à vista</p>
                </div>

                {/* Benefits List */}
                <ul className="space-y-4 mb-10">
                    {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-brand-text text-sm md:text-base">{benefit}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Button fullWidth size="lg" className="mb-4 text-base md:text-lg animate-pulse">
                    QUERO GARANTIR MINHA VAGA <ArrowRight className="w-5 h-5" />
                </Button>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-2 text-brand-muted text-sm">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" />
                    <span>Garantia de 15 dias incondicional</span>
                </div>
            </div>
            
            <div className="bg-brand-dark/50 p-4 text-center border-t border-white/5">
                <div className="flex items-center justify-center gap-2 text-xs text-brand-muted">
                    <Lock className="w-3 h-3" />
                    <span>Pagamento 100% Seguro</span>
                </div>
            </div>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-brand-muted italic">
                "Você não tá sozinho. Esse é um atalho direto pra transformar seu serviço em um negócio real e lucrativo."
            </p>
        </div>

      </div>
    </section>
  );
};

export default Offer;