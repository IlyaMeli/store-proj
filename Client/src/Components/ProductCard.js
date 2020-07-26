import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { remove_from_cart } from "../state/product.slice";

function ProductCard({ index, name, price, totalPrice, qty }) {
  const { products_in_cart } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const picName = name.replace(/ /g, "_");

  return (
    <MainWrapper>
      <StyledSubWrapper>
        <StyledImgName>
          <StyledH1
            index={index}
            onClick={() => {
              dispatch(remove_from_cart(products_in_cart[index]));
            }}
          >
            X
          </StyledH1>
          <StyledImg
            src={`./images/product.images/${picName}.jpg`}
            alt="product"
          />
          <StyledName>{name}</StyledName>
        </StyledImgName>
        <StyledPriceWrapper>
          <StyledPrice>${price}</StyledPrice>
          <StyledQty>{qty}</StyledQty>
          <StyledPrice>${totalPrice}</StyledPrice>
        </StyledPriceWrapper>
      </StyledSubWrapper>
    </MainWrapper>
  );
}

export default ProductCard;

const StyledImg = styled.img`
  width: 100px;
  height: auto;
  /* border: solid 2px yellow; */
  padding: 10px;
`;

const MainWrapper = styled.div`
  border-top: solid 1px light-grey;
  /* border: blue 5px dotted; */
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StyledSubWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  /* border: green 2px solid; */
  padding: 5px;
  font-size: 1.2rem;
  width: 8rem;
  
`;
const StyledPrice = styled.div`
  /* border: black 2px solid; */
  flex-grow: 1;
  text-align: center;
`;

const StyledImgName = styled.div`
  /* border: Orange 6px solid; */
  display: flex;
  flex-grow: 1;
  font-weight: 600;
  align-items: center;
`;
const StyledQty = styled.div`
  /* border: grey 2px solid; */
  flex-grow: 1;
  text-align: center;
`;

const StyledH1 = styled.h1`
  padding: 10px;
  font-size: 1rem;
  font-weight: 900;
  &:hover {
    cursor: pointer;
  }
`;

const StyledPriceWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  /* border: solid pink 2px; */
`;
