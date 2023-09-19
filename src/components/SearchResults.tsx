import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {
  DigiLayoutContainer,
  DigiTypographyMeta,
} from "@digi/arbetsformedlingen-react";
import { DigiButton } from "@digi/arbetsformedlingen-react";
import axios from "axios";
import { SearchResult } from "./SearchResult";
import { OccupationData } from "../models/IOccupationData";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const educationTitle = searchParams.get("educationTitle") || "";
  const description = searchParams.get("description") || "";

  const [data, setData] = useState<OccupationData[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const fetchOccupationsByText = async (text: string) => {
    try {
        const response = await axios.post('https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text', {
        input_text: text, 
        input_headline: "front end developer", 
        limit: 10,
        offset: 0,
        include_metadata: false
      });      
      
      setData(response.data.related_occupations);   
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Ett fel uppstod vid hämtning av data. Vänligen försök igen senare.');
    }
  };
  
  

  useEffect(() => {
    fetchOccupationsByText(educationTitle);
  }, [educationTitle]);

  return (
    <>
      <DigiTypographyMeta>
        <DigiLayoutContainer>
          <DigiButton onClick={() => navigate("/")}>Home</DigiButton>
          <h2>Titel</h2>
          <p>Beskrivning {description}</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="box-container">
        {data.map((occupation: OccupationData) => (
          <SearchResult
            key={occupation.id}
            title={occupation.occupation_label} 
            description={occupation.description} // ?
            link={`/selected-job/${occupation.id}`}
          />
        ))}
      </div>
        </DigiLayoutContainer>
      </DigiTypographyMeta>
    </>
  );
};