import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PurchsedProducts = () => {
  // const { purchased_products } = useSelector((state) => state.products);
  const { user_purchased_items } = useSelector((state) => state.user);
  console.log(user_purchased_items);
  return (
    <StyledPurchsedProduct>
      {user_purchased_items.length !== 0 ? (
        <StyledTitle>Recently Purchased Items:</StyledTitle>
      ) : (
        <br />
      )}
      <StyledPruchasedWrapper>
        {user_purchased_items &&
          user_purchased_items.map(({ name, price }, index) =>
            // prettier-ignore
            <StyledCard>
                <StyledImg
                    // onClick={handleClick}
                    src={`./images/product.images/${name.replace(/ /g, "_")}.jpg`}
                    alt="product"
                />
                <StyledText>{name}</StyledText>
                    <StyledPrice>${price}</StyledPrice>
            </StyledCard>
          )}
      </StyledPruchasedWrapper>
    </StyledPurchsedProduct>
  );
};

export default PurchsedProducts;

const StyledImg = styled.img`
  width: 220px;
  height: auto;
  opacity: 1;
  transition: 0.3s ease-in-out;
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

const StyledPurchsedProduct = styled.div`
  /* border: dotted purple 5px; */
`;

const StyledPruchasedWrapper = styled.div`
  /* border: 3px solid blue; */
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const StyledTitle = styled.h3`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  align-self: flex-start;
  padding: 2rem;
`;

const StyledCard = styled.div`
  padding: 1rem;
`;
