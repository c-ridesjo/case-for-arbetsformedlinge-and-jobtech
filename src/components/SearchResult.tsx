import { useNavigate } from 'react-router-dom';
import { SearchResultProps } from '../models/ISearchResult';

export const SearchResult = ({ title, description, link }: SearchResultProps) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => navigate(link)}>Read More</button>
    </>
  );
};
