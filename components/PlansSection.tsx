
import React from 'react';
import { PetSize } from '../types';
import { PLANS, WHATSAPP_PHONE } from '../constants';

interface PlansSectionProps {
  selectedSize: PetSize;
  onSizeChange: (size: PetSize) => void;
}

const PlansSection: React.FC<PlansSectionProps> = ({ selectedSize, onSizeChange }) => {
  const sizes: PetSize[] = ['Pequeno', 'Médio', 'Grande'];

  const handleSubscription = (planName: string) => {
    const message = `Gostaria de adquirir o ${planName} para porte ${selectedSize}`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Escolha o plano ideal</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Selecione o porte do seu pet para ver os valores personalizados.
          </p>

          {/* Segmented Control Selector */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl shadow-inner mb-8">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${selectedSize === size
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Porte {size}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <div
              key={plan.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${plan.highlight
                ? 'border-pet shadow-2xl bg-white scale-105 z-10'
                : 'border-gray-100 hover:border-meloi shadow-lg bg-gray-50/50'
                }`}
            >
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pet text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {plan.tag}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-400">R$</span>
                <span className="text-5xl font-extrabold text-gray-900">
                  {plan.pricing[selectedSize]}
                </span>
                <span className="text-gray-400 font-medium">/mês</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-pet' : 'text-meloi'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscription(plan.name)}
                className={`w-full py-4 rounded-2xl font-bold transition-all transform active:scale-95 ${plan.highlight
                  ? 'bg-pet text-white shadow-lg hover:bg-blue-600'
                  : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-meloi hover:text-meloi'
                  }`}
              >
                {plan.highlight ? 'Assinar agora' : 'Contratar plano'}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-400">
          * Cobrança mensal via cartão de crédito. Sem taxas de cancelamento após 3 meses.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
