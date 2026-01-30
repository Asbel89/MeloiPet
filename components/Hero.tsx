
import React from 'react';

interface HeroProps {
  onOpenAI: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAI }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-[#6ecf99]/5 rounded-bl-[100px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            O cuidado que seu pet merece, com <span className="text-meloi">planos que cabem no bolso.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Banho e tosa profissional, conforto, carinho e praticidade em planos mensais que garantem economia e felicidade para o seu melhor amigo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#planos"
              className="px-8 py-4 bg-meloi text-white text-center font-bold rounded-2xl shadow-xl hover:bg-[#5bb883] transition-all transform hover:-translate-y-1"
            >
              Ver planos
            </a>
            <button
              onClick={onOpenAI}
              className="px-8 py-4 bg-white border-2 border-pet text-pet text-center font-bold rounded-2xl hover:bg-pet/5 transition-all flex items-center justify-center gap-2"
            >
              <span className="text-xl">✨</span> Ajuda para escolher
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/32/32`} alt="Pet" className="w-8 h-8 rounded-full border-2 border-white" />
              ))}
            </div>
            <span>+2.500 pets cuidados mensalmente</span>
          </div>
        </div>

        <div className="relative" data-aos="fade-left">
          <div className="absolute -inset-4 bg-pet/10 rounded-3xl rotate-3"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/hero-image.png"
              alt="MeloiPet Logo"
              className="w-full h-auto object-cover p-12 bg-white"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 animate-bounce">
            <div className="w-12 h-12 bg-meloi/20 rounded-full flex items-center justify-center text-2xl">🐾</div>
            <div>
              <div className="font-bold text-gray-900">Banho e Tosa</div>
              <div className="text-sm text-gray-500">100% profissional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
