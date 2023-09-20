import { SearchResultProps } from "../models/ISearchResult";
import { DigiLink, DigiTypography } from "@digi/arbetsformedlingen-react";
import {
  VerticalLayout,
} from "./Styled/StyledSearchResult";

export const SearchResult = ({
  title,
  occupationGroupLabel,
}: SearchResultProps) => {
  return (
    <DigiTypography af-variation="small">
      <VerticalLayout>
        <h2>{title}</h2>
        <p>{occupationGroupLabel}</p>        
        <DigiLink
          style={{ color: "#005B4A" }}
          af-href="#"
          af-target="_blank"
          af-variation="small"
          afHref={""}
        >
          Läs mer här
        </DigiLink>
      </VerticalLayout>
    </DigiTypography>
  );
};
