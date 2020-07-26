import React from "react";
import styled from "styled-components";
import { Range } from "rc-slider";

import "rc-slider/assets/index.css";
import { useSelector } from "react-redux";

function RangeSlider(props) {
  const { price_range } = useSelector((state) => state.products);

  return (
    <PriceFilterWrapper>
      <StyledH4>Filter By Price</StyledH4>
      <Seperator />
      <Range {...props} />
      <StyledP>{` Price: $${price_range[0]} - $${price_range[1]}`}</StyledP>
    </PriceFilterWrapper>
  );
}

export default RangeSlider;

const PriceFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 3px black solid; */
  flex-basis: 20%;
  height: 6vh;
`;

const Seperator = styled.hr``;

const StyledP = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #555;
`;

const StyledH4 = styled.h4`
  margin: 5px;
  font-size: 1.3rem;
  background: linear-gradient(
    rgba(255, 255, 255, 1) 70%,
    rgba(201, 242, 246, 1) 30%
  );
  width: 8.5rem;
`;
