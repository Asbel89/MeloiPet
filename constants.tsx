
import { Plan, Benefit, Step } from './types';

export const PLANS: Plan[] = [
  {
    id: 'essencial',
    name: 'PLANO ESSENCIAL',
    description: 'Básico e eficiente para manter seu pet limpo.',
    features: ['2 banhos mensais', 'Tosa higiênica', 'Limpeza de ouvidos', 'Corte de unhas'],
    pricing: { Pequeno: 149, Médio: 179, Grande: 209 },
    color: '#6ecf99'
  },
  {
    id: 'confort',
    name: 'PLANO CONFORT',
    description: 'O equilíbrio perfeito entre custo e benefício.',
    features: ['3 banhos mensais', 'Tosa completa', 'Hidratação simples', 'Perfume especial', 'Limpeza de ouvidos', 'Corte de unhas'],
    pricing: { Pequeno: 209, Médio: 249, Grande: 299 },
    highlight: true,
    tag: '⭐ MAIS VENDIDO',
    color: '#5aa3e7'
  },
  {
    id: 'premium',
    name: 'PLANO PREMIUM',
    description: 'Spa completo para o seu melhor amigo.',
    features: ['4 banhos mensais', 'Tosa artística/tesoura', 'Hidratação profunda', 'Escovação de dentes', 'Tosa higiênica extra', 'Corte de unhas'],
    pricing: { Pequeno: 259, Médio: 309, Grande: 359 },
    color: '#8b5cf6'
  }
];

export const BENEFITS: Benefit[] = [
  { id: 1, title: 'Profissionais Qualificados', description: 'Groomers certificados e apaixonados por animais.', icon: '🐶' },
  { id: 2, title: 'Produtos Premium', description: 'Shampoos e condicionadores hipoalergênicos de alta linha.', icon: '🧴' },
  { id: 3, title: 'Ambiente Seguro', description: 'Monitoramento e cuidados constantes durante a estadia.', icon: '🏡' },
  { id: 4, title: 'Economia Real', description: 'Planos mensais custam até 30% menos que banhos avulsos.', icon: '💰' },
  { id: 5, title: 'Atendimento Humanizado', description: 'Cada pet é tratado com o carinho de um membro da família.', icon: '❤️' }
];

export const STEPS: Step[] = [
  { id: 1, title: 'Escolha o plano ideal', description: 'Selecione o pacote que melhor se adapta à rotina do seu pet.' },
  { id: 2, title: 'Agende pelo WhatsApp', description: 'Processo rápido e sem burocracia para marcar os horários.' },
  { id: 3, title: 'Cuidado profissional', description: 'Tratamento VIP com produtos de primeira linha.' },
  { id: 4, title: 'Ganhe praticidade', description: 'Seu pet sempre limpo e cheiroso, sem você se preocupar.' }
];
export const WHATSAPP_PHONE = "5513996319533";
