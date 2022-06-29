import React from "react";
// import { Fragment } from "react";
import styled from "styled-components";
import data from "./data.json";
import "./Box.css";

const StyledBox = styled.button`
  border: 1px solid transparent;
  width: 30vh;
  height: 30vh;
  font-size: 15px;
  background-color: white;
  overflow: hidden;
  margin: 0vh 2vh 2vh 0vh;
  text-align: left;
`;

const Box = () => {
  return (
    <>
      {data.products.map((product) => (
        <StyledBox key={product.id}>
          <img src={product.img} alt="#"></img>
          <text>
            <p>
              <b>{product.title}</b>
            </p>
            <p className="address">{product.address}</p>
            <p className="price">{product.price}</p>
          </text>
        </StyledBox>
      ))}
    </>
  );
};

export default Box;
