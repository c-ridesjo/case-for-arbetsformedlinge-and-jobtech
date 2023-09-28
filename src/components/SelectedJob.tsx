import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getEnrichedOccupations } from "../services/serviceBase";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { useEffect } from "react";

import {
  DigiButton,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import {
  Competency,
  NoCompetencyFound,
  StyledBox,
  StyledH2
} from "./Styled/StyledSelectedJob";




export const SelectedJob = () => {
  const { occupationId: paramOccupationId } = useParams();
  const [occupationDetails, setOccupationDetails] = useState<
    IOccupationDetails | undefined
  >(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Occupation Details State:", occupationDetails);
    const occupationId =
      paramOccupationId || localStorage.getItem("selectedOccupationId");

    if (occupationId && !occupationDetails) {
      getEnrichedOccupations(occupationId).then((response) => {
        console.log("API Response:", response);

        console.log("Metadata Object:", response.metadata);
        console.log(
          "Enriched Candidates Term Frequency Object:",
          response.metadata?.enriched_candidates_term_frequency
        );

        setOccupationDetails(response);
      });
    }
  }, [occupationDetails, paramOccupationId]);

  return (
    <>
      <DigiTypography>
        <DigiLayoutBlock>
          <DigiButton
            af-size="medium"
            af-variation="primary"
            af-full-width="false"
            onClick={() => navigate("/")}
          >
            Hem
          </DigiButton>
          <StyledH2>Kompetenser för: {occupationDetails?.occupation_label}</StyledH2>
          
          <DigiLayoutContainer>
            <StyledBox>
              {occupationDetails?.metadata?.enriched_candidates_term_frequency
                ?.competencies ? (
                <>
                  {occupationDetails.metadata.enriched_candidates_term_frequency.competencies
                    .slice(0, 20)
                    .map((competency, index) => (
                    <Competency key={index}>{competency.term}</Competency>
                    ))}
                </>
              ) : (
                <NoCompetencyFound>No Competencies Found</NoCompetencyFound>
              )}
            </StyledBox>            
          </DigiLayoutContainer>

        </DigiLayoutBlock>
      </DigiTypography>
    </>
  );
};
