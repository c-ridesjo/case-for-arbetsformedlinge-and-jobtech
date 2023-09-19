import { useNavigate } from "react-router-dom";
import { SearchResultProps } from "../models/ISearchResult";
import { DigiButton } from "@digi/arbetsformedlingen-react";

export const SearchResult = ({
  title,
  description,
  link,
}: SearchResultProps) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <DigiButton onClick={() => navigate(link)}>Läs mer</DigiButton>{" "}      
    </>
  );
};
