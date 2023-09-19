import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { DigiButton } from "@digi/arbetsformedlingen-react";
import axios from "axios";
import { SearchResult } from "./SearchResult";
import { OccupationData } from "../models/IOccupationData";
import {
  StyledP,
  StyledH1,
  Column,
  ColumnContainer,
} from "../components/Styled/StyledSearchResult";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const educationTitle = searchParams.get("educationTitle") || "";
  const description = searchParams.get("description") || "";

  const [data, setData] = useState<OccupationData[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const fetchOccupationsByText = async () => {    // (text: string) sedan när jag inte hårdkodar
    setError(null);
    try {
      const response = await axios.post(
        "https://jobed-connect-api.jobtechdev.se/v1/occupations/match-by-text",
        {
          input_text: "front end developer",
          input_headline: "systemutvecklare",
          limit: 10,
          offset: 0,
          include_metadata: false,
        }
      );

      setData(response.data.related_occupations);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching data:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
      setError(
        "Ett fel uppstod vid hämtning av data. Vänligen försök igen senare."
      );
    }
  };

  useEffect(() => {
    console.log("educationTitle value:", educationTitle);
    fetchOccupationsByText();
  }, [educationTitle]);

  return (
    <>
      <DigiTypography af-variation="large">
        <DigiLayoutContainer style={{ padding: "0" }}>
          <DigiButton onClick={() => navigate("/")}>Home</DigiButton>
          <ColumnContainer>
            <Column>
              <StyledH1>Titel</StyledH1>
            </Column>
            <Column>
              <StyledP>Beskrivning {description}</StyledP>
            </Column>
          </ColumnContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <DigiLayoutContainer>
            {data.map((occupation: OccupationData) => (
              <SearchResult
                key={occupation.id}
                title={occupation.occupation_label}
                description={occupation.description} // ?
                link={`/selected-job/${occupation.id}`}
              />
            ))}
          </DigiLayoutContainer>
        </DigiLayoutContainer>
      </DigiTypography>
    </>
  );
};
