import { useParams } from "react-router-dom";
import { useState } from "react";
import { getEnrichedOccupations } from "../services/serviceBase";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { useEffect } from "react";

import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import styled from "styled-components";

const StyledBox = styled.div`
  border: 1px solid black;
  text-align: center;
  color: #ffeccc;
  padding: 50px;
  width: fit-content;
  margin: 50px auto 0;
  border-radius: 6px;
  background-color: #005b4a;
`;

const StyledH1 = styled.h1`
  color: #ffeccc;
  text-align: center;
  margin: 50px auto 0;
  font-size: 2rem;
  font-weight: 700;
`;


export const SelectedJob = () => {
  const { occupationId: paramOccupationId } = useParams();
  const [occupationDetails, setOccupationDetails] = useState<
    IOccupationDetails | undefined
  >(undefined);

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
        <DigiLayoutContainer style={{ padding: "0" }}>
           <StyledH1>
            <h1>{occupationDetails?.occupation_label}</h1>
          </StyledH1>
          
          <StyledBox>
      {occupationDetails?.metadata?.enriched_candidates_term_frequency
        ?.competencies &&
      occupationDetails.metadata.enriched_candidates_term_frequency.competencies
        .length > 0 ? (
        occupationDetails.metadata.enriched_candidates_term_frequency.competencies.map(
          (competency, index) => (
            <p key={index}>Competency: {competency.term}</p>
          )
        )
      ) : (
        <p>No Competencies Found</p>
      )}

          </StyledBox>
        </DigiLayoutContainer>
      </DigiTypography>

    </>
  );
};
