import styled from "styled-components/macro";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  margin: auto;
`;

export const RowContainer = styled.div`
  display: grid;
  height: 50px;
  width: 90%;
  text-align: center;
  align-content: center;
  grid-template-columns: 1.5fr 1fr 1fr 2fr 2fr 1.5fr;
  border-top: 2px solid #ffe81f;
  border-right: 2px solid #ffe81f;
  border-left: 2px solid #ffe81f;
  line-height: 50px;

  :last-of-type {
    border-bottom: 2px solid #ffe81f;
    margin-bottom: 20px;
  }
`;

export const GridItem = styled.div`
  border-right: 2px solid #ffe81f;
  height: 100%;

  :last-of-type {
    border-right: 0px;
  }
`;

export const TextInput = styled.input`
  height: 30px;
  width: 15%;
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
`;


