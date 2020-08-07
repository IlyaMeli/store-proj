import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./state/product.slice";

import styled from "styled-components";
import Nav from "./Components/Nav";
import Home from "./Components/home";
import Cart from "./Components/cart";
import Account from "./Components/account";
import Login from "./Components/login";
import Register from "./Components/register";
import Footer from "./Components/footer";
import DynaminProduct from "./Components/dynamicProduct";
import { CalcCartTtoal } from "./state/product.slice";

import ChatWindow from "./Components/ChatWindow";
import RepChatWindow from "./Components/RepChatWindow";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { isLoggedIn } from "./helper";

function App() {
  const { products_in_cart } = useSelector((state) => state.products);
  const { prod_page } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(prod_page));
  }, [prod_page, dispatch]);

  useEffect(() => {
    dispatch(CalcCartTtoal());
  }, [products_in_cart, dispatch]);

  return (
    <Router>
      <Nav />
      <MainWrapper>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route
            path="/account"
            render={() =>
              isLoggedIn() ? <Account /> : <Redirect to="/login-user" />
            }
          />
          <Route path="/reg-user" component={Register} />
          <Route path="/login-user" component={Login} />
          <Route path="/dynamicProduct" component={DynaminProduct} />
          <Route path="/RepChatWindow" component={RepChatWindow} />
        </Switch>
        <ChatWindow />
        <Footer />
      </MainWrapper>
    </Router>
  );
}

export default App;

const MainWrapper = styled.div`
  margin: 30vh 6vw 0px 6vw;
`;
