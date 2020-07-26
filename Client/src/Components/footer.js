import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <Seperator />
      <StyledFooter>
        <StyledLogoLink href="#top">
          <StyledLogo
            src={"./images/Shop.png"}
            alt="logo"
            title="Back to top of page"
          />
        </StyledLogoLink>
        <StyledInfo>
          <ContactWrapper>
            <SP>Contact us:</SP>
            <StyledEmail href="mailto:support@example.com?subject=SendMail&body=Description">
              customerSupport@shop.com
            </StyledEmail>
          </ContactWrapper>
          <StyledRights>© Created by Ilya&Oded</StyledRights>
        </StyledInfo>
        <StyledSocial>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SociaLogo
              src={"./images/socialogos/facebook.png"}
              alt="facebook"
              title="Go to facebook"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SociaLogo
              src={"./images/socialogos/twitter.png"}
              alt="twitter"
              title="Go to twitter"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SociaLogo
              src={"./images/socialogos/instagram.png"}
              alt="instagram"
              title="Go to instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SociaLogo
              src={"./images/socialogos/linkedin.png"}
              alt="linkedin"
              title="Go to linkedIn"
            />
          </a>
        </StyledSocial>
      </StyledFooter>
    </div>
  );
}

export default Footer;

const StyledFooter = styled.div`
  /* border-top: 5px solid rgba(122, 122, 122, 0.5); */
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;
  /* border: 3px orange solid; */
`;
const StyledLogo = styled.img`
  width: 30%;
  height: auto;
  flex-grow: 1;
  :hover {
    cursor: pointer;
  }
  /* border: 3px blue solid; */
`;

const StyledEmail = styled.a`
  color: rgba(122, 122, 122);
  /* border: 3px yellow solid; */
  margin-left: 4px;
  align-self: center;
`;

const StyledInfo = styled.div`
  /* color: rgba(122, 122, 122); */
  /* border: 3px green solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  margin-right: 140px;
  /**wrong css margin ^ */
`;

const StyledRights = styled.div`
  font-size: 1.5vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(122, 122, 122, 0.5);
  /* border: 3px deeppink solid; */
`;

const StyledSocial = styled.div`
  /* border: 3px yellow solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const ContactWrapper = styled.div`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1vw;
  color: rgba(122, 122, 122, 0.5);
  /* border: 1px solid green; */
  padding: 10px;
`;

const SociaLogo = styled.img`
  width: 17px;
  height: auto;
  padding: 10px;
  flex-grow: 1;

  :hover {
    cursor: pointer;
  }
`;
const Seperator = styled.hr`
  border-top: 1px solid #bbb;
  margin-top: 4rem;
`;

const StyledLogoLink = styled.a`
  flex-grow: 1;
  /* border: solid deeppink 2px; */
`;
const SP = styled.p`
  font-size: 1vw;
`;
