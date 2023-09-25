import { useParams } from "react-router-dom";
import { useState } from "react";
import { getEnrichedOccupations } from "../services/serviceBase";
import { IOccupationDetails } from "../models/IOccupationDetails";
import {
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { StyledH1 } from "./Styled/StyledSearchResult";
import styled from "styled-components";

const StyledBox = styled.div`
  border: 1px solid black;
`;

export const SelectedJob = () => {
  const { occupationId } = useParams();
  const [occupationDetails, setOccupationDetails] = useState<
    IOccupationDetails | undefined
  >(undefined);

  if (occupationDetails === undefined && occupationId !== undefined) {
    getEnrichedOccupations(occupationId).then((response) => {
      setOccupationDetails(response);
    });
  }

  return (
    <>
      <DigiTypography>
        <DigiLayoutContainer style={{ padding: "0" }}>
          <StyledH1>{occupationDetails?.occupation_label}</StyledH1>
          <StyledBox>
            <p>ID: {occupationDetails?.id}</p>
            <p>
              Beskrivning:{" "}
              {occupationDetails?.occupation_group.occupation_group_label}
            </p>
          </StyledBox>
        </DigiLayoutContainer>
      </DigiTypography>
    </>
  );
};
