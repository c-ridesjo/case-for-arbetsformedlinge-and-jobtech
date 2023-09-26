import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getEnrichedOccupations } from "../services/serviceBase";
import { IOccupationDetails } from "../models/IOccupationDetails";
import { useEffect } from "react";

import {
  DigiButton,
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

const StyledH2 = styled.h2`
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
        <DigiLayoutContainer style={{ padding: "0" }}>
        <DigiButton
            af-size="medium"
            af-variation="primary"
            af-full-width="false"
            onClick={() => navigate("/")}
          >
            Hem
          </DigiButton>
           <StyledH2>
            {occupationDetails?.occupation_label}
          </StyledH2>
          
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
