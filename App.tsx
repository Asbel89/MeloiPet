
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PlansSection from './components/PlansSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import AISuggestionModal from './components/AISuggestionModal';
import { PetSize } from './types';

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<PetSize>('Pequeno');
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        <Hero onOpenAI={() => setIsAIModalOpen(true)} />

        <div id="planos" className="scroll-mt-24 md:scroll-mt-32">
          <PlansSection
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
        </div>

        <div id="como-funciona" className="bg-gray-50 scroll-mt-24 md:scroll-mt-32">
          <HowItWorks />
        </div>

        <div id="beneficios" className="scroll-mt-24 md:scroll-mt-32">
          <Benefits />
        </div>

        <section className="bg-meloi py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Seu pet limpo, feliz e bem cuidado o mês inteiro.
            </h2>
            <a
              href="#planos"
              className="inline-block bg-white text-meloi font-bold text-xl md:text-2xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              Assinar plano MeloiPet agora
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-[90] p-4 bg-meloi text-white rounded-full shadow-2xl transition-all duration-300 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          } hover:scale-110 hover:bg-[#5bb883]`}
        aria-label="Voltar ao topo"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {isAIModalOpen && (
        <AISuggestionModal onClose={() => setIsAIModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
