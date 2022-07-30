import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Outlet } from "react-router-dom";

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

const Lists = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://16b9534b-1b6f-4e0a-bd63-b966d5d571f7.mock.pstmn.io/list"
      );
      setMembers(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>대기중</h1>;
  }
  if (!members) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const handleClick = (url, id) => {
    navigate(url, { state: members[id - 1] });
  };

  return (
    <>
      {members.map((member) => (
        <StyledButton
          onClick={() => handleClick(`/${member.memId}`, member.memId)}
        >
          {member.name}
        </StyledButton>
      ))}

      <Outlet />
    </>
  );
};

export default Lists;
