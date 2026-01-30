
import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-4 overflow-hidden bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-pet font-bold tracking-widest uppercase text-sm">Passo a passo</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Como funciona a assinatura</h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative flex flex-col items-center text-center space-y-4 group"
              >
                <div className="w-16 h-16 bg-white border-4 border-meloi rounded-full flex items-center justify-center text-2xl font-bold text-meloi z-10 transition-transform group-hover:scale-110 shadow-lg">
                  {step.id}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
