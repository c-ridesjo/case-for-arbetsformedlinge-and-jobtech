import axios from "axios";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { IResponseData } from "../models/IResponseData";

const BASE_URL = "https://jobed-connect-api.jobtechdev.se/";

export const get = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(`${BASE_URL}${url}`);
  return response.data;
};

export const post = async <T>(
  url: string,
  data: { input_text: string; input_headline: string }
): Promise<T> => {
  const response = await axios.post<T>(`${BASE_URL}${url}`, data);
  return response.data;
};

export const matchByText = async (
  input_text: string,
  input_headline: string
): Promise<IOccupationDetails[]> => {
  const result = await post<IResponseData>("/v1/occupations/match-by-text?", {
    input_text,
    input_headline,
  });

  return result.related_occupations;

};

export const getEnrichedOccupations = async (
  occupationId: string
): Promise<IOccupationDetails> => {
  return get(`/v1/enriched_occupations?occupation_id=${occupationId}&include_metadata=True`);
};
