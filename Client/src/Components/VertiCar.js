import React, { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";
import styled from "styled-components";

let slides = [
  {
    key: 1,
    content: "Abstract_Poster_Art",
  },
  {
    key: 2,
    content: "Ceramic_Mug",
  },
  {
    key: 3,
    content: "Conway_Electric",
  },
  {
    key: 4,
    content: "Porcelain_Vase",
  },
  {
    key: 5,
    content: "Surfer_Magazine",
  },
  {
    key: 6,
    content: "Mark_Magazine",
  },
];

const VertiCar = () => {
  let init_state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  };

  const fState = useState(init_state);

  return (
    <StyleCarousel>
      <SCarouselTitle>Top Products</SCarouselTitle>
      <VerticalCarousel
        slides={slides}
        offsetRadius={fState.offsetRadius}
        showNavigation={fState.showNavigation}
        animationConfig={fState.config}
      />
    </StyleCarousel>
  );
};
export default VertiCar;

const StyleCarousel = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 15px;
  width: 10rem;
  height: 30rem;
  /* background-color: #7fffbf; */
  /* border: solid 3px red; */
`;

const SCarouselTitle = styled.h3`
  margin-bottom: 35px;
  background: linear-gradient(
    rgba(255, 255, 255, 1) 70%,
    rgba(201, 242, 246, 1) 30%
  );
  width: 8.5rem;
`;
