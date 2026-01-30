
export type PetSize = 'Pequeno' | 'Médio' | 'Grande';

export interface PlanPricing {
  Pequeno: number;
  Médio: number;
  Grande: number;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: PlanPricing;
  highlight?: boolean;
  color: string;
  tag?: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}
