import React from 'react';
import { AlertCircle, XCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-brand-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Você também tá nessa fase?
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-brand-muted max-w-3xl mx-auto">
            Você ama cuidar de carro. Faz um serviço bem feito, é caprichoso, detalhista.
            Mas mesmo assim, não consegue cobrar o que vale, não tem cliente todo dia, e sente que o seu negócio não vai pra frente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {[
            "Já cobrou barato porque achou que ia “fechar o mês” e ficou no prejuízo.",
            "Sente vergonha do seu Instagram porque não sabe o que postar.",
            "Tenta aprender no YouTube, mas só se confunde com tanta dica solta.",
            "Vê gente faturando alto com estética e se pergunta: “O que esse cara tá fazendo que eu não tô?”",
            "Já pensou em desistir, porque sente que tá gastando mais do que ganhando.",
            "Depende de indicação e não sabe como fazer o cliente chegar sozinho."
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-brand-dark/50 p-5 rounded-lg border-l-4 border-red-500 shadow-md">
              <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              <p className="text-brand-text font-medium leading-snug">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-brand-dark rounded-2xl border border-white/10 text-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-brand-accent font-bold mb-3">
                    <AlertCircle className="w-5 h-5" />
                    <span>Atenção</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Se você se identificou com 2 ou mais pontos...
                </h3>
                <p className="text-xl text-brand-muted">
                    A verdade é uma só: <strong className="text-white">Você não precisa de mais serviço — precisa de estratégia.</strong>
                </p>
                <p className="mt-2 text-brand-muted">E é exatamente isso que eu vou te mostrar agora.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;