import React from "react";
// import { Fragment } from "react";
import "./Box.css";
import styled from "styled-components";

const Box = () => {
  // 1. 파일 안에서 스타일링하기
  //   return (
  //     <div
  //       style={{
  //         border: "1px solid orange",
  //         width: "30vh",
  //         height: "30vh",
  //         fontSize: "20px",
  //       }}
  //     >
  //       box1
  //     </div>
  //   );

  // 2. css 이용하기
  //return <div className="box-style">box1</div>;
  //
  //3.styled-components 이용하기
  const StyledBox = styled.div`
    border: 1px solid orange;
    width: 30vh;
    height: 30vh;
    font-size: 20px;
    background-color: white;
  `;
  return <StyledBox>box1</StyledBox>;
};

export default Box;
