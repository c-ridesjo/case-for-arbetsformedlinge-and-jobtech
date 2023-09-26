import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap; använd för desktop 
  justify-content: center;
  align-items: center;
  //margin-top: 2rem;
  margin: auto;
  max-width: 17rem;
`;

export const Column = styled.div`
  margin: 0 0.5rem;
  max-width: 20rem;
  overflow: hidden;
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
