export interface ConsultationRequest {
  fullName: string;
  phone: string;
  email?: string;
  insuranceType: 'term' | 'life' | 'undecided';
  ageRange: string;
  notes?: string;
}

export interface PracticePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  tagline?: string;
}
