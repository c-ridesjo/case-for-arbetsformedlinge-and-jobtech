import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
`;

export const Column = styled.div`
  width: 37%;
  margin: 0 0.5rem;
`;

export const VerticalLayout = styled.div`
  flex-direction: column;
  align-items: center;
  width: 26rem;
  margin: 10px;
  margin-top: 20px;
  background-color: #8a612e;
  color: #ffeccc;
  padding-top: 10px;
  padding-bottom: 10px;
  border: #432e15;
  border-radius: 2px;
`;
