import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { IResponseData } from "../models/IResponseData";
import { SearchResult } from "./SearchResult";
import { Column, ColumnContainer } from "./Styled/StyledSearchResult";

interface SearchResultsProps {
  responseData: IResponseData;
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

            {responseData.related_occupations?.map(
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
