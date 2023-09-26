import { SearchResultProps } from "../models/ISearchResult";
import { DigiLinkButton, DigiTypography } from "@digi/arbetsformedlingen-react";
import { VerticalLayout } from "./Styled/StyledSearchResult";

export const SearchResult = ({
  title,
  occupationGroupLabel,
}: SearchResultProps) => {
  return (
    <DigiTypography af-variation="small">
      <VerticalLayout>
        <h2>{title}</h2>
        <p>{occupationGroupLabel}</p>
        <DigiLinkButton
          af-href="#"
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
