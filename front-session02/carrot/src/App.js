import React from "react";
import "./App.css";
// import { Fragment } from "react";
import Box from "./Box";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledCard = styled.div`
  width: 100vh;
`;

const App = () => {
  return (
    <StyledApp>
      <StyledCard>
        <h3>인기중고</h3>
        <Box />
      </StyledCard>
    </StyledApp>
  );
};

export default App;
