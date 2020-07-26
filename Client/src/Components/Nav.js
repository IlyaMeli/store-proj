import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserProf from "./UserProf";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.user);

  return (
    <StyledNav>
      <LogoWrapper>
        <Link to="/">
          <Logo src={"./images/Shop.png"} alt="logo" />
        </Link>
      </LogoWrapper>
      <StyledUl>
        <StyledLi>
          <Slink to="/">
            <StyledH3>Home</StyledH3>
          </Slink>
        </StyledLi>
        <StyledLi>
          <Link to="/account" style={{ textDecoration: "none" }}>
            <StyledH3>Account</StyledH3>
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <StyledH3>Cart</StyledH3>
          </Link>
        </StyledLi>
        {user.isLoggedIn /* logged */ === false ? (
          <div>
            <StyledLi>
              <Link to="/login-user" style={{ textDecoration: "none" }}>
                <StyledH3>
                  Sign in
                  <StyledProfPic src={user.pic} atl="profile picture" />
                </StyledH3>
              </Link>
            </StyledLi>
          </div>
        ) : (
          <StyledLi>
            <UserProf />
          </StyledLi>
        )}
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;

//#region styling

const StyledNav = styled.nav`
  background-color: #fff;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  transition: top 0.5s;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid rgba(122, 122, 122, 0.25);
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px green solid; */
  flex-grow: 2;
`;
const StyledLi = styled.li`
  /* border: 1px yellow solid; */
  /* display: flex; */
  /* justify-content: center; */
`;

const LogoWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  flex-grow: 2;
  display: flex;
  /* border: 1px red solid; */
`;
const Logo = styled.img`
  margin-left: 30px;
  width: 45%;
  height: auto;
`;

const StyledH3 = styled.h3`
  color: black;
  font-weight: normal;
  display: flex;
  position: relative;
  align-items: center;

  &::after {
    content: "";
    background: white;
    mix-blend-mode: exclusion;
    width: calc(100% + 20px);
    height: 0;
    position: absolute;
    bottom: -4px;
    left: -10px;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &:hover::after {
    height: calc(60%);
  }
`;

const Slink = styled(Link)`
  text-decoration: none;
  /* color: green; */
`;

const StyledProfPic = styled.img`
  border-radius: 50%;
  /* border: solid 3px deeppink; */
  width: 40px;
  height: auto;
`;
