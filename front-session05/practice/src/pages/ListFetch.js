import React, { useState, useEffect } from "react";
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
const ListFetch = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMembers(data);
      });
  }, []);
  console.log(members);

  return (
    <>
      {members.map((member) => (
        <StyledButton key={member.memId}>{member.name}</StyledButton>
      ))}
    </>
  );
};

export default ListFetch;
