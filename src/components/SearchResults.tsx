import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { SearchResult } from "./SearchResult";
import { Column, ColumnContainer } from "./Styled/StyledSearchResult";

interface SearchResultsProps {
  responseData: IOccupationDetails[];
}

export const SearchResults = ({ responseData }: SearchResultsProps) => {
  if (responseData === undefined) {
    return null;
  }

  return (
    <>
      <DigiTypography af-variation="large">
        <DigiLayoutContainer
          style={{ padding: "0", backgroundColor: "#FFECCC" }}
        >

          <ColumnContainer>

            {responseData?.map(
              (occupation: IOccupationDetails) => (
                <Column key={occupation.id}>
                  <SearchResult
                    title={occupation.occupation_label}
                    occupationGroupLabel={
                      occupation.occupation_group.occupation_group_label
                   
                    }
                     occupationId={occupation.id}
                    link={`/selected-job/${occupation.id}`}
                  />
                </Column>
              )
            )}

          </ColumnContainer>
        </DigiLayoutContainer>
      </DigiTypography>
    </>
  );
};
