import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { IResponseData } from "../models/IResponseData";
import { SearchResult } from "./SearchResult";
//import { Column, ColumnContainer } from "./Styled/StyledSearchResult";
import {

LayoutColumnsVariation
} from "@digi/arbetsformedlingen";

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
        {/* <DigiLayoutBlock
          
        > */}

          <DigiLayoutColumns 
          af-variation={LayoutColumnsVariation.TWO} 
          style={{ backgroundColor: "#FFECCC" }}>

            {responseData.related_occupations?.map(
              (occupation: IOccupationDetails) => (
                <DigiLayoutContainer 
                afVerticalPadding
                key={occupation.id}>
                  <SearchResult
                    title={occupation.occupation_label}
                    occupationGroupLabel={
                      occupation.occupation_group.occupation_group_label
                   
                    }
                     occupationId={occupation.id}
                    link={`/selected-job/${occupation.id}`}
                  />
                </DigiLayoutContainer>
              )
            )}

          </DigiLayoutColumns>
        {/* </DigiLayoutBlock> */}
      </DigiTypography>
    </>
  );
};
