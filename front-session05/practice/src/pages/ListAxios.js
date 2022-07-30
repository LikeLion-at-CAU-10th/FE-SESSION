import React, { useEffect, useState } from "react";
import axios from "axios";
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

const ListAxios = () => {
  const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
      try {
        const response = await axios.get(
        "https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list"
      );
      setMembers(response.data);
    }

     
      //   setLoading(false);
    };
    fetchData();
  }, []);
  console.log(members);

  //   if (loading) {
  //     return <h1>대기중</h1>;
  //   }
  //   if (!members) {
  //     return null;
  //   }

  return (
    <>
      {members.map((member) => (
        <StyledButton key={member.memId}>{member.name}</StyledButton>
      ))}
    </>
  );
};

export default ListAxios;
