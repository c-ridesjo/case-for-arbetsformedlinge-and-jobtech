import styled from "styled-components";

export const StyledBox = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 6px;
  background-color: #487465;
  width: fit-content;
`;

export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #ffeccc;
  margin-bottom: 1rem;
`;

export const Competency = styled.p`
  color: #ffeccc;
  text-align: left;
  margin-bottom: 2rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 1px;
    width: 100%;
    background-color: #ffeccc;
  }
`;

export const NoCompetencyFound = styled.p`
  color: red;
  /* text-align: center;
  margin-top: 1rem; */
`;
