import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { SearchResult } from "./SearchResult";
import {
  LayoutColumnsElement,
  LayoutColumnsVariation
} from "@digi/arbetsformedlingen";

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
         <DigiLayoutBlock
        > 
          <DigiLayoutColumns 
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.TWO} 
            >
            {responseData?.map(
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
         </DigiLayoutBlock> 
      </DigiTypography>
    </>
  );
};
