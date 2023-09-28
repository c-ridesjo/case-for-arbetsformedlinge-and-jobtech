import styled from "styled-components";

export const StyledBox = styled.div`
  color: #ffeccc;
  background-color: #487465; 
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: auto;
  padding: 1rem;
`;

/*
export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #ffeccc;
  margin-bottom: 1rem;
`; */

export const Competency = styled.li`
  color: #ffeccc;
  text-align: left;
  margin: auto;
  min-width: 10rem;
  min-height: 2rem;
  /*
  
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
  }*/
`;

export const StyledH2 = styled.h2`
  color: #433a2e;;
`;

export const NoCompetencyFound = styled.p`
  color: white;
  /* text-align: center;
  margin-top: 1rem; */
`;
