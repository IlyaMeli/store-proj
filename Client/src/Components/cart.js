import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { add_to_purchased } from "../state/product.slice";

function Cart() {
  useSelector((state) => state.user);
  const { products_in_cart, cart_total } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  if (products_in_cart.length === 0) {
    return (
      <h1>
        Oops, Your cart is empty....
        <br></br>
        explore some of our new products <SLink to="/">here</SLink>
      </h1>
    );
  } else {
    return (
      <div>
        <SH1>Cart</SH1>
        <StyledHeaders>
          <SProductWrapper>
            <SProduct>Product</SProduct>
          </SProductWrapper>
          <SPriceWrapper>
            <SPrice>Price</SPrice>
            <SQuantity>Quantity</SQuantity>
            <STotal>Total</STotal>
          </SPriceWrapper>
        </StyledHeaders>
        {/* {user.isLoggedIn === true ? (
        <div>Hello {user.name}</div>
      ) : (
        <div>Hello guest user </div>
      )} */}
        <StyledProductWrapper>
          {products_in_cart &&
            products_in_cart.map(({ name, price, qty }, index) => (
              <StyledCardWrapper key={index}>
                <ProductCard
                  key={name}
                  name={name}
                  price={price}
                  index={index}
                  qty={qty}
                  totalPrice={Number(qty) * Number(price)}
                />
              </StyledCardWrapper>
            ))}
        </StyledProductWrapper>
        <STotalCart>Cart Total: ${cart_total}</STotalCart>
        <StyledAddBtn
          // prettier-ignore
          onClick={() => { dispatch(add_to_purchased())}}
        >
          PROCEED TO CHECKOUT
        </StyledAddBtn>
      </div>
    );
  }
}

export default Cart;

const StyledProductWrapper = styled.div`
  /* border: deeppink 2px solid; */
  /* height: 60vh; */
  /* overflow: scroll; */
`;

const SH1 = styled.h1`
  margin-bottom: 5rem;
  font-size: 4rem;
  font-weight: 600;
`;

const StyledCardWrapper = styled.div`
  /* border: solid green 3px; */
  /* display: flex;
  align-items: center; */
`;

const StyledHeaders = styled.div`
  display: flex;
  border-bottom: 1px solid lightgrey;
  font-family: Montserrat, sans-serif;
  padding-right: 20px;
`;
const SProduct = styled.p`
  /* display: flex;
  flex-basis: 50%;
  justify-content: center; */
  flex-grow: 1;
  /* text-align: center; */
  margin-left: 25%;
`;
const SQuantity = styled.p`
  /* display: flex;
  flex-basis: 15%;
  justify-content: center; */
  flex-grow: 1;
  text-align: center;
`;

const STotal = styled.p`
  /* display: flex; */
  /* flex-basis: 15%; */
  /* justify-content: center; */
  flex-grow: 1.3;
  text-align: center;
`;
const SPrice = styled.p`
  /* display: flex; */
  /* flex-basis: 20%; */
  /* justify-content: center; */
  flex-grow: 1.3;
  text-align: center;
`;

const StyledAddBtn = styled.button`
  border: solid 2px black;
  margin: 2rem;
  padding: 0.5rem;
  box-shadow: 10px 10px #c9f2f6;

  &:hover {
    cursor: pointer;
  }
`;

const STotalCart = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 600;
`;

const SProductWrapper = styled.div`
  /* border: pink solid 2px; */
  display: flex;
  flex-grow: 1.7;
`;
const SPriceWrapper = styled.div`
  /* border: deeppink solid 2px; */
  display: flex;
  flex-grow: 1;
`;

const SLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    color: #63ccce;
  }
`;
