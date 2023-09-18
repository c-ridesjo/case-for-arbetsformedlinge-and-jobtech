export interface OccupationData {
    name: string;
    description: string;
    id: string;
    
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