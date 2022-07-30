import React from "react";
import { useLocation } from "react-router-dom";

const List = () => {
  const { state } = useLocation();

  return (
    <>
      <p>key={state.memId}</p>
      <p>name={state.name}</p>
      <p>nickname={state.nickname}</p>
      <p>description={state.description}</p>
      <p>role={state.role}</p>
    </>
  );
};

export default List;
