export interface OccupationData {
    occupation_label: string; // name?
    description: string; // ?
    id: string; // concept_taxonomy_id i stället?
    
    hits_total: number;
    hits_returned: number;
    identified_keywords_for_input: {
      competencies: string[];
      occupations: string[];
    };
    related_occupations: Array<{
      name: string;
    }>;
  }