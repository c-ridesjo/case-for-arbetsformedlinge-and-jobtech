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
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  width: 100%; 
  height: 10rem; 
  padding: 10px;
  margin: 10px 0;
  background-color: #487465;
  color: #ffeccc;
  border: 1px solid #432e15;
  border-radius: 2px;
  box-sizing: border-box;

  @media screen and (min-width: 900px) {
    flex-direction: row; 
    align-items: flex-start; 
    justify-content: space-between; 
    width: 28rem; 
  }
`;

export const TextContainer = styled.div`
  text-align: center; 
  overflow: hidden;

  @media screen and (min-width: 900px) {
    text-align: left;
    flex: 1; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 900px) {
    align-items: flex-end; 
    justify-content: flex-end;
  }
`;
