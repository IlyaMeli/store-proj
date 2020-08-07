import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { add_to_purchased, clean_purchased } from "../state/product.slice";
import { updateUserPurchased } from "../api/user.api";
import { add_to_user_purchased } from "../state/userSlice";

function Cart() {
  const user = useSelector((state) => state.user);
  const { products_in_cart, cart_total } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const buy_items = async () => {
    // update user purchased array in user slice
    dispatch(add_to_purchased());

    if (user.name !== "User") {
      await dispatch(add_to_user_purchased(products_in_cart));
      //update user purchased array in database
      const cont = await updateUserPurchased(user);
      if (cont) dispatch(clean_purchased());
    }
    // dispatch(clean_purchased());
  };

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
        <StyledAddBtn onClick={buy_items}>BUY ITEMS</StyledAddBtn>
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
  /* border: solid green 3px; */
`;

const StyledCardWrapper = styled.div`
  /* display: flex;
  align-items: center; */
`;

const StyledHeaders = styled.div`
  display: flex;
  border-bottom: 1px solid lightgrey;
  font-family: Montserrat, sans-serif;
  /* border: darkgoldenrod solid 6px; */
  /* height: 100px; */
`;
const SProduct = styled.div`
  /* border: solid darkgreen 1px; */
  flex-grow: 1;
  /* text-align: center; */
`;
const SQuantity = styled.div`
  text-align: center;
  /* border: darkorchid solid 2px; */
  flex-grow: 1;
`;

const STotal = styled.div`
  text-align: center;
  /* border: darkkhaki solid 2px; */
  flex-grow: 1;
`;
const SPrice = styled.div`
  text-align: center;
  /* border: blue solid 2px; */
  flex-grow: 1;
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
  /* border: pink solid 6px; */
  display: flex;
  /* align-items: center; */
  flex-grow: 1;
  padding-left: 170px;
  padding-right: 130px;
  /* justify-content: center; */
`;
const SPriceWrapper = styled.div`
  /* border: deeppink solid 5px; */
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const SLink = styled(Link)`
  color: black;
  &:hover {
    cursor: pointer;
    color: #63ccce;
  }
`;
