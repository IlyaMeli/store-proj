import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { update_product, add_to_cart } from "../state/product.slice";
import { useHistory } from "react-router-dom";

const Product = ({ name, price, index }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { all_products } = useSelector((state) => state.products);

  const handleClick = async () => {
    try {
      dispatch(update_product(all_products[index]));
      await history.push("/dynamicProduct", { name });
    } catch (error) {
      console.log(error);
    }
  };
  const picName = name.replace(/ /g, "_");

  return (
    <StyledProduct>
      <ImgWrapper>
        <StyledImg
          onClick={handleClick}
          src={`./images/product.images/${picName}.jpg`}
          alt="product"
        />
        <StyledButton
          onClick={() => {
            // dispatch(add_to_cart(JSON.stringify(all_products[index])));
            dispatch(add_to_cart({ product: all_products[index], qty: 1 }));

            // console.log("check from product " ,all_products[index])
          }}
        >
          ADD TO CART
        </StyledButton>
      </ImgWrapper>
      <TextWrapper>
        <StyledText>{name}</StyledText>
        <StyledPrice>${price}</StyledPrice>
      </TextWrapper>
    </StyledProduct>
  );
};

export default Product;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  font-size: 10px;
  background: white;
  border: solid 1px black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: absolute;
  display: none;
`;

const StyledProduct = styled.li`
  /* border: solid pink 4px; */
  display: flex;
  flex-direction: column;
  margin-right: 3vw;
  padding: 0;
  margin-bottom: 2rem;
  :hover {
    cursor: pointer;
  }
  
`;

const StyledImg = styled.img`
  width: 220px;
  height: auto;
  opacity: 1;
  transition: 0.3s ease-in-out;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: solid blue 1px; */
  /* align-self: flex-start; */
  
  justify-content: space-evenly;
  /* padding: 5px; */
  height: 50px;
`;

const StyledText = styled.div`
  /* border: 1px orange solid; */
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
`;

const StyledPrice = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #a2a2a2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover ${StyledButton} {
    display: block;
    cursor: pointer;
  }
  &:hover ${StyledImg} {
    opacity: 0.5;
    cursor: pointer;
  }
`;
