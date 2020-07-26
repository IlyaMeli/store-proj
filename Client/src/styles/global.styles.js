import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'); */

  h1,h2,h3,h4,h5{
    font-family: "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-decoration: none;
  }
  link{
    text-decoration: none;
  }

  li{
    text-decoration: none;
  }

.rc-slider-handle{
  background-color: black ;
  border: solid 2px black ;

}

.rc-slider-track {
  border: solid 2px black ;
  background-color: black ;

}

.rc-slider-rail {
    background-color: #c9f2f6 ;
 
}
`;

export default GlobalStyles;
