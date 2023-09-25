import { SearchResultProps } from "../models/ISearchResult";
import { DigiLinkButton, DigiTypography } from "@digi/arbetsformedlingen-react";
import { VerticalLayout } from "./Styled/StyledSearchResult";
import { useNavigate } from "react-router-dom";
import { getEnrichedOccupations } from "../services/serviceBase";

export const SearchResult = ({ title, occupationGroupLabel, occupationId }: SearchResultProps & { occupationId: string }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log('Button clicked!');    
    try {
      const occupationDetails = await getEnrichedOccupations(occupationId);
      navigate(`/selected-job/${occupationId}`, { state: { occupationDetails } });
    } catch (error) {
      console.error("Failed to get occupation details", error);
    }
  };
  console.log('SearchResult Component Rendered');
  return (
    <DigiTypography af-variation="small">
      <VerticalLayout>
        <h2>{title}</h2>
        <p>{occupationGroupLabel}</p>
        <DigiLinkButton
          onClick={handleClick}
          af-size="medium"
          af-variation="primary"
          afHref={""}
        >
          Läs mer här
        </DigiLinkButton>
      </VerticalLayout>
    </DigiTypography>
  );
};