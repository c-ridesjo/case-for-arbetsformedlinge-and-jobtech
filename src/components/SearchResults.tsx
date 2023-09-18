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

  const fetchOccupationsByText = async (text: string) => {
    try {
        const response = await axios.post('https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text', {
        input_text: text, 
        input_headline: "front end developer", 
        limit: 10,
        offset: 0,
        include_metadata: false,
        text: text
      });      
      
      setData(response.data.related_occupations);
      
      console.log('API Response Data:', response.data);
      if (response.data.related_occupations && response.data.related_occupations.length > 0) {
        console.log('First Item Data - Name:', response.data.related_occupations[0].occupation_label);
        console.log('First Item Data - Description:', response.data.related_occupations[0].description);
        console.log('First Item Data - ID:', response.data.related_occupations[0].id);
      }
  
    } catch (error) {
      console.error('Error fetching data:', error);
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