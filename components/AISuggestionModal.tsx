
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PetSize } from '../types';

interface AISuggestionModalProps {
  onClose: () => void;
  onSuggestionApply: (size: PetSize) => void;
}

interface SuggestionResult {
  planName: string;
  reasoning: string;
  tips: string[];
  estimatedSize: PetSize;
}

const AISuggestionModal: React.FC<AISuggestionModalProps> = ({ onClose, onSuggestionApply }) => {
  const [loading, setLoading] = useState(false);
  const [petInfo, setPetInfo] = useState({ name: '', breed: '', frequency: '' });
  const [suggestion, setSuggestion] = useState<SuggestionResult | null>(null);

  // Fallback logic for when API key is missing or request fails
  const getFallbackSuggestion = (): SuggestionResult => {
    const text = (petInfo.breed + ' ' + petInfo.frequency).toLowerCase();

    // Simple heuristic for size
    let size: PetSize = 'Médio';
    if (text.match(/pequeno|mini|toy|pinscher|chihuahua|yorkshire|shih|lulu|gato/)) size = 'Pequeno';
    else if (text.match(/grande|gigante|labrador|golden|pastor|rottweiler|boxer/)) size = 'Grande';

    // Simple heuristic for plan
    let plan = 'PLANO CONFORT'; // Default
    let reason = "O Plano Confort é ideal para manter o equilíbrio entre higiene e custo.";

    if (text.match(/suja|lama|terra|jardim|muito ativo|bagunceiro|pelo longo/)) {
      plan = 'PLANO PREMIUM';
      reason = `Como o ${petInfo.name} é bem ativo ou tem necessidades especiais de pelagem, o Premium garante cuidado total.`;
    } else if (text.match(/calmo|apartamento|pouco|limpo|pelo curto/)) {
      plan = 'PLANO ESSENCIAL';
      reason = "Para pets mais calmos ou de pelagem curta, o Essencial cobre todas as necessidades básicas.";
    }

    return {
      planName: plan,
      reasoning: reason,
      estimatedSize: size,
      tips: [
        "Mantenha a carteirinha de vacinação sempre em dia.",
        size === 'Grande' ? "Pets grandes precisam de gastos de energia frequentes." : "Pets pequenos podem ser mais sensíveis ao frio.",
        "Aproveite os descontos recorrentes da assinatura."
      ]
    };
  };

  const getSuggestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    // Direct fallback if no key or placeholder
    if (!apiKey || apiKey.includes('PLACEHOLDER')) {
      setTimeout(() => {
        setSuggestion(getFallbackSuggestion());
        setLoading(false);
      }, 1500);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json"
        }
      });

      const prompt = `Analise as informações do pet e determine o PORTE (Pequeno, Médio, Grande) e o PLANO ideal: Essencial (2 banhos), Confort (3 banhos) ou Premium (4 banhos). 
                   Nome: ${petInfo.name}
                   Raça/Tipo: ${petInfo.breed}
                   Rotina/Detalhes: ${petInfo.frequency}
                   
                   Regras:
                   - Pets de pelo longo, que se sujam muito ou precisam de tosa pro: Premium.
                   - Manutenção regular: Confort.
                   - Pelo curto ou pouca sujeira: Essencial.
                   - Estime o tamanho (Porte) baseado na raça.
                   
                   Responda APENAS com um JSON neste formato:
                   {
                     "planName": "Nome do Plano",
                     "estimatedSize": "Pequeno" | "Médio" | "Grande",
                     "reasoning": "Texto explicativo curto",
                     "tips": ["Dica 1", "Dica 2"]
                   }`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let text = response.text();

      // Safety check for markdown code blocks in AI response
      if (text.includes('```json')) {
        text = text.split('```json')[1].split('```')[0].trim();
      } else if (text.includes('```')) {
        text = text.split('```')[1].split('```')[0].trim();
      }

      const data = JSON.parse(text);
      setSuggestion(data);
    } catch (error) {
      console.error("AI Error:", error);
      // Fallback on error
      setSuggestion(getFallbackSuggestion());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
        <div className="bg-meloi p-6 text-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl">✕</button>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            ✨ Assistente MeloiPet
          </h2>
          <p className="text-white/80 mt-1">Descubra o plano ideal para seu amigo.</p>
        </div>

        <div className="p-8">
          {!suggestion ? (
            <form onSubmit={getSuggestion} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nome do Pet</label>
                <input
                  required
                  value={petInfo.name}
                  onChange={e => setPetInfo({ ...petInfo, name: e.target.value })}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-meloi outline-none"
                  placeholder="Ex: Totó"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Raça ou Porte</label>
                <input
                  required
                  value={petInfo.breed}
                  onChange={e => setPetInfo({ ...petInfo, breed: e.target.value })}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-meloi outline-none"
                  placeholder="Ex: Golden Retriever ou Vira-lata médio"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Como é a rotina dele?</label>
                <textarea
                  required
                  value={petInfo.frequency}
                  onChange={e => setPetInfo({ ...petInfo, frequency: e.target.value })}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-meloi outline-none min-h-[100px]"
                  placeholder="Ex: Ele brinca muito no jardim e se suja fácil."
                />
              </div>
              <button
                disabled={loading}
                className="w-full bg-meloi text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {loading ? 'Analisando perfil...' : 'Gerar recomendação'}
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="inline-block px-4 py-1 bg-pet/10 text-pet rounded-full font-bold text-xs mb-2">
                  RECOMENDAÇÃO PARA {petInfo.name.toUpperCase()}
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">{suggestion.planName}</h3>
                <div className="mt-2 inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium text-gray-600">
                  <span>Porte Sugerido:</span>
                  <span className="text-meloi font-bold">{suggestion.estimatedSize}</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 italic text-gray-600 text-sm">
                "{suggestion.reasoning}"
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  💡 Dicas do Especialista:
                </h4>
                <ul className="space-y-2">
                  {suggestion.tips.map((tip: string, i: number) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-meloi">•</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSuggestion(null)}
                  className="flex-1 border-2 border-gray-100 text-gray-500 font-bold py-3 rounded-xl hover:bg-gray-50"
                >
                  Refazer
                </button>
                <a
                  href="#planos"
                  onClick={() => {
                    onSuggestionApply(suggestion.estimatedSize);
                    onClose();
                  }}
                  className="flex-1 bg-meloi text-center text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                >
                  Ver este plano
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AISuggestionModal;
