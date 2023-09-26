import { SearchResultProps } from "../models/ISearchResult";
import { DigiLinkButton, DigiTypography } from "@digi/arbetsformedlingen-react";
import { VerticalLayout } from "./Styled/StyledSearchResult";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({
  title,
  occupationGroupLabel,
  occupationId,
}: SearchResultProps & { occupationId: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("selectedOccupationId", occupationId);
    navigate(`/selected-job/${occupationId}`);
  };

  return (
    <DigiTypography af-variation="small">
      <VerticalLayout>
        <h2>{title}</h2>
        <p>{occupationGroupLabel}</p>
        <DigiLinkButton
          onClick={handleClick}
          af-size="medium"
          af-variation="secondary"
          afHref={""}
        >
          Läs mer här
        </DigiLinkButton>
      </VerticalLayout>
    </DigiTypography>
  );
};