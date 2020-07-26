import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../state/userSlice";
import { reset_slice as reset_product_slice } from "../state/product.slice";

function UserProf() {
  const dispatch = useDispatch();
  useSelector((state) => state.products);
  const { pic, user_name } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const showMenu = (e) => {
    setOpen(!open);
  };

  const onLogOut = () => {
    dispatch(logOut());
    dispatch(reset_product_slice());
  };

  return (
    <StyledUser /* className="User" */>
      <StyledText onClick={showMenu} onMouseOver={showMenu}>
        {user_name}
      </StyledText>
      <StyledProfPic className="drpdn" src={pic} alt="profile picture" />
      {open && <StyledMenueItem onClick={onLogOut}>Logout</StyledMenueItem>}
    </StyledUser>
  );
}

export default UserProf;

const StyledUser = styled.div`
  display: flex;
  /* border: solid 3px deeppink; */
  margin: 2px;
`;

const StyledProfPic = styled.img`
  /* display: flex; */
  /* flex-direction: column; */
  border-radius: 50%;
  /* justify-content: center; */
  /* border: solid 3px deeppink; */
  width: 50px;
  height: 50px;
`;

const StyledText = styled.h3`
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  /* border: 1px green solid; */
  display: flex;
  align-items: center;
  transition: filter 300ms;
  margin-left: grid-auto-columns;

  :hover {
    filter: brightness(1.2);
  }
`;

const StyledMenueItem = styled.div`
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 900;
  border: solid 2px grey;
  position: absolute;
  top: 80px;
  transform: translateX(-45%);
  background-color: lightgray;
  padding: 1rem;
  overflow: hidden;
  width: 120px;
  height: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--speed);

  :hover {
    background-color: #c9f2f6;
  }
`;
