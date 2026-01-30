
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4" id="contato">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <a href="#" className="text-3xl font-bold flex items-center">
            <span className="text-[#6ecf99]">Meloi</span>
            <span className="text-[#5aa3e7]">Pet</span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed">
            Revolucionando o cuidado pet com planos de assinatura inteligentes e profissionais apaixonados pelo que fazem.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-meloi transition-colors">IG</a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-meloi transition-colors">FB</a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-meloi transition-colors">WA</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#planos" className="hover:text-white transition-colors">Nossos Planos</a></li>
            <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
            <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Atendimento</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Segunda a Sexta: 08h às 19h</li>
            <li>Sábado: 08h às 14h</li>
            <li>WhatsApp: (11) 99999-9999</li>
            <li>contato@meloipet.com.br</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Receba dicas de cuidado pet e promoções exclusivas.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-meloi"
            />
            <button className="bg-meloi px-4 py-2 rounded-lg font-bold">Ok</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2024 MeloiPet - Todos os direitos reservados. Cuidado animal com tecnologia.</p>
      </div>
    </footer>
  );
};

export default Footer;
