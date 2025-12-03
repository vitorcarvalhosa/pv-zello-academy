import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-8 border-t border-white/5 text-center text-sm text-brand-muted">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Da Garagem aos 40K. Todos os direitos reservados.</p>
        <p className="text-xs text-brand-secondary">
          Este site não faz parte do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;