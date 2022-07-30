import React from "react";
import data from "../db/Members.json";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: skyblue;
  border: 0;
  border-radius: 20px;
  margin: 2vh;
  padding: 1vh;
  outline: 0;
  color: black;
  cursor: pointer;
`;
const ListMap = () => {
  return (
    <>
      {data.map((member) => (
        <StyledButton key={member.id}>{member.name}</StyledButton>
      ))}
    </>
  );
};

export default ListMap;
