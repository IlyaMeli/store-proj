import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { add_to_cart } from "../state/product.slice";

function DynamicProduct({ location }) {
  const [qty, setQTY] = useState(0);
  const { selected_product } = useSelector((state) => state.products);
  // const { all_products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const picName = location.state.name && location.state.name.replace(/ /g, "_");

  // debugger;
  return (
    <Wrapper>
      <StyledImg src={`./images/product.images/${picName}.jpg`} alt="product" />
      <DataWrapper>
        <ProductTitle>{selected_product.name}</ProductTitle>
        <ProductPrice>${selected_product.price}</ProductPrice>
        <Description>{selected_product.desc}</Description>
        <StyledQtyWrapper>
          <StyledQtyBtns>
            <StyledBtn onClick={() => setQTY(qty - 1)}>-</StyledBtn>
            <StyledQTY> Quantity: {qty}</StyledQTY>
            <StyledBtn onClick={() => setQTY(qty + 1)}>+</StyledBtn>
          </StyledQtyBtns>
          <StyledAddBtn
            onClick={() =>
              dispatch(add_to_cart({ product: selected_product, qty }))
            }
          >
            ADD TO CART
          </StyledAddBtn>
        </StyledQtyWrapper>
      </DataWrapper>
    </Wrapper>
  );
}

export default DynamicProduct;

const Wrapper = styled.div`
  display: flex;
  /* border: solid 2px green; */
  padding: 20px;
  /* align-items: center; */
  justify-content: center;
`;

const DataWrapper = styled.div`
  /* border: solid 2px pink; */
  padding: 20px;
`;

const StyledImg = styled.img`
  width: 400px;
  height: 430px;
  /* border: solid 2px yellow; */
  padding: 10px;
`;

const ProductTitle = styled.div`
  /* border: solid 1px red; */
  font-size: 1.8rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ProductPrice = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* border: solid 1px blue; */
  font-size: 2rem;
  font-weight: 100;
`;

const Description = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 100;
  font-size: 1rem;
  margin: 20px 0;
  width: 400px;
`;
const StyledBtn = styled.button`
  border: none;
  font-weight: bold;
  padding: 0.5rem;
  /* margin: 0.2rem; */
`;

const StyledQTY = styled.div`
  font-weight: bold;
  padding: 0.5rem;
`;

const StyledQtyWrapper = styled.div`
  /* border: solid 3px black; */
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const StyledAddBtn = styled.button`
  border: solid 2px black;
  margin-left: 2rem;
  padding: 0.5rem;
  box-shadow: 10px 10px #c9f2f6;

  &:hover {
    cursor: pointer;
  }
`;

const StyledQtyBtns = styled.button`
  border: solid 2px black;
  display: flex;
  flex-direction: row;
  border: solid 2px black;
  padding: 0.5rem;
  box-shadow: 10px 10px #c9f2f6;
`;
