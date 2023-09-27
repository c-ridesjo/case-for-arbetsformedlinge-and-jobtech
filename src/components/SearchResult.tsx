import { SearchResultProps } from "../models/ISearchResult";
import { DigiLinkButton, DigiTypography } from "@digi/arbetsformedlingen-react";
// import {
//   ButtonContainer,
//   TextContainer,
//   VerticalLayout,
// } from "./Styled/StyledSearchResult";
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
      <div className="job-container">
      {/* <VerticalLayout> */}
        {/* <TextContainer> */}
          <h2>{title}</h2>
          <p>{occupationGroupLabel}</p>
        {/* </TextContainer> */}
        {/* <ButtonContainer> */}
          <DigiLinkButton
            onClick={handleClick}
            af-size="medium"
            af-variation="secondary"
            afHref={""}
          >
            Läs mer här
          </DigiLinkButton>
        {/* </ButtonContainer> */}
      {/* </VerticalLayout> */}
      </div>

    </DigiTypography>
  );
};
