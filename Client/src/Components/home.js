import React /* , { useState, useEffect } */ from "react";
import ProductList from "./ProductsList";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import RangeSlider from "./RangeSlider";
import { update_range, next_page, prev_page } from "../state/product.slice";
import VertiCar from "./VertiCar";

function Home() {
  const { price_range, prod_page } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const loading_products = useSelector(
    (state) => state.products.loading_products
  );

  const onSlideChange = (Sliderrange) => {
    dispatch(update_range(Sliderrange));
  };

  return (
    <div>
      <HomeWrapper>
        {!loading_products ? (
          <StyledDiv>
            <ProductsWrapper>
              <Sh1>Latest Products</Sh1>
              <ProductList />
            </ProductsWrapper>
            <StyledRangeWrap>
              <RangeSlider
                allowCross={false}
                defaultValue={price_range}
                min={20}
                max={199}
                onChange={onSlideChange}
                id="pRange"
              />
              <VertiCar />
            </StyledRangeWrap>
          </StyledDiv>
        ) : (
          <StyledIsLoading>Loading products...</StyledIsLoading>
        )}
      </HomeWrapper>
      {prod_page !== 1 ? (
        <Spagination>
          <Spage onClick={() => dispatch(prev_page())}> previous </Spage>
          <Spage onClick={() => dispatch(next_page())}> next </Spage>
        </Spagination>
      ) : (
        <Spagination>
          <Spage onClick={() => dispatch(next_page())}> next</Spage>
        </Spagination>
      )}
    </div>
  );
}

export default Home;

const StyledIsLoading = styled.h3``;

const HomeWrapper = styled.div`
  /* border: solid green 6px; */
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ProductsWrapper = styled.div`
  /* border: dotted blue 6px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 80%;
`;
const StyledDiv = styled.div`
  /* border: solid orange 6px; */
  display: flex;
`;
const Spagination = styled.div`
  padding-top: 4rem;
  /* border: solid pink 2px; */
  display: flex;
  justify-content: center;
`;
const Spage = styled.h1`
  font-size: 1rem;
  margin: 10px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const Sh1 = styled.h1`
  padding: auto;

  margin-left: 20vw;
  margin-bottom: 50px;
`;

const StyledRangeWrap = styled.div`
  /* border: solid deeppink 3px; */
  display: flex;
  flex-direction: column;
`;
