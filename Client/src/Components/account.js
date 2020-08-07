import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../state/userSlice";
import { Link } from "react-router-dom";
import PurchsedProduct from "./PurchsedProduct";
import { reset_slice as reset_product_slice } from "../state/product.slice";

function Account() {
  const dispatch = useDispatch();
  const { pic, user_name, user_purchased_items } = useSelector(
    (state) => state.user
  );
  // const { purchased_products } = useSelector((state) => state.products);

  const onLogOut = () => {
    dispatch(logOut());
    dispatch(reset_product_slice());
  };

  return (
    <StyledMainWrapper /*  className="Account" */>
      <StyledWrapper>
        <StyledProfPic src={pic} alt="profile picture" />
        <StyledH1>Hello {user_name}</StyledH1>
        <Link to="/login-user">
          <StyledLogout onClick={onLogOut}>Logout</StyledLogout>
        </Link>
      </StyledWrapper>
      <SPurchased>{user_purchased_items && <PurchsedProduct />}</SPurchased>
    </StyledMainWrapper>
  );
}

export default Account;

const StyledWrapper = styled.div`
  /* border: red solid 1px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200x;
`;

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* border: solid 2px yellow; */
`;

const StyledProfPic = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-top: 20px;
`;

const StyledH1 = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
`;

const StyledLogout = styled.button`
  border: solid 2px black;
  margin: 2rem;
  padding: 0.5rem;
  box-shadow: 10px 10px #c9f2f6;

  &:hover {
    cursor: pointer;
  }
`;

const SPurchased = styled.div`
  display: flex;
  /* border: solid black 2px; */
`;
