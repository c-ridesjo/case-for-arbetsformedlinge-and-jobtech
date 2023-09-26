import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 17rem;

  @media screen and (min-width: 900px) {
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 85%;
  }
`;

export const Column = styled.div`
  margin: 0 0.5rem;
  max-width: 20rem;
  overflow: hidden;

  @media screen and (min-width: 900px) {
    overflow: visible;
    max-width: 90%;
  }
`;

export const VerticalLayout = styled.div`
  flex-direction: column;
  align-items: center;
  width: 26rem;
  margin: 10px;
  margin-top: 20px;
  background-color: #487465;
  color: #ffeccc;
  padding-top: 10px;
  padding-bottom: 10px;
  border: #432e15;
  border-radius: 2px;
`;
