
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 px-4" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4" data-aos="fade-right">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher a MeloiPet?</h2>
            <p className="text-gray-600">
              Mais do que banho e tosa, oferecemos uma experiência de cuidado completo para o bem-estar do seu pet.
            </p>
          </div>
          <div className="bg-meloi/10 px-6 py-3 rounded-2xl text-meloi font-bold flex items-center gap-2">
            ⭐ Nota 4.9 no Google Reviews
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-12 inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
