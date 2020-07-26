import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Product from "./Product";

const ProductList = () => {
  const { all_products, price_range } = useSelector((state) => state.products);

  useEffect(() => {}, [price_range]);

  return (
    <StyledProductLIst>
      {all_products &&
        all_products.map(({ name, price, qty }, index) => {
          if (price >= price_range[0] && price <= price_range[1]) {
            return (
              <Product
                key={name}
                name={name}
                price={price}
                index={index}
                qty={qty}
                totalPrice={Number(qty) * Number(price)}
              />
            );
          } else {
            return null;
          }
        })}
    </StyledProductLIst>
  );
};
export default ProductList;

const StyledProductLIst = styled.ul`
  /* border: solid deeppink 5px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 70vw;
  /* height: 100%; */
  margin: 0;
  padding: 0;
`;
