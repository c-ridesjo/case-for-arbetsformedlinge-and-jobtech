import { useNavigate } from "react-router-dom";
import { SearchResultProps } from "../models/ISearchResult";
import {
  DigiLayoutColumns,
  DigiLinkButton,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

export const SearchResult = ({
  title,
  description,
  link,
}: SearchResultProps) => {
  const navigate = useNavigate();
  return (
    <DigiTypography af-variation="small">
      <DigiLayoutColumns>
        <h1>{title}</h1>
        <p>{description}</p>
        <DigiLinkButton onClick={() => navigate(link)} afHref={""}>
          Läs mer
        </DigiLinkButton>{" "}
      </DigiLayoutColumns>
    </DigiTypography>
  );
};
