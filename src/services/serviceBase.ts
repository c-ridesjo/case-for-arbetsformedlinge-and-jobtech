import axios from 'axios';

const BASE_URL = 'https://jobed-connect-api.jobtechdev.se/';

export const get = async <T>(url: string): Promise<T> => {
    const response = await axios.get<T>(`${BASE_URL}${url}`);
    return response.data;
};

export const post = async <T>(url: string, data: T): Promise<T> => {
    const response = await axios.post<T>(`${BASE_URL}${url}`, data);
    return response.data;
};

export const matchByText = async (educationTitle: string, description: string) => {
  return post('/v1/occupations/match-by-text', { educationTitle, description });
};

export const getEnrichedOccupations = async (occupationId: string) => {
  return get(`/v1/enriched_occupations/${occupationId}`);
};
