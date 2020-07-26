import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/product.api";

const lastPagintaionPage = 2;

const initialState = {
  check_state: [],
  all_products: [],
  selected_product: {},
  products_in_cart: [],
  loading_products: false,
  price_range: [0, 199],
  cart_total: 0,
  purchased_products: [],
  prod_page: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetching_products: (state, action) => {
      state.loading_products = true;
    },
    update_product: (state, action) => {
      state.selected_product = action.payload;
    },
    products_fetched: (state, action) => {
      state.all_products = action.payload;
      state.selected_product = action.payload[0];
      state.loading_products = false;

      action.payload.sort(
        (prodA, prodB) => Number(prodA.price) - Number(prodB.price)
      );

      state.price_range = [
        Number(action.payload[0].price),
        Number(action.payload[action.payload.length - 1].price),
      ];
    },
    add_to_cart: (state, action) => {
      let product = state.products_in_cart.find(
        (currentProduct) => currentProduct.name === action.payload.product.name
      );
      // console.log(action.payload);
      if (product) {
        product.qty += action.payload.qty;
      } else {
        // prettier-ignore
        state.products_in_cart.push({...action.payload.product, qty: action.payload.qty,});
      }
      // console.log(state.products_in_cart);
    },
    remove_from_cart: (state, action) => {
      state.products_in_cart = state.products_in_cart.filter(
        (product) => product.name !== action.payload.name
      );
      // console.log(state.products_in_cart);
    },
    update_range: (state, action) => {
      state.price_range = action.payload;
    },
    CalcCartTtoal: (state) => {
      let newTotal = 0;
      // prettier-ignore
      state.products_in_cart.forEach(({ qty, price }) => { newTotal += qty * price });
      state.cart_total = newTotal;
    },
    add_to_purchased: (state) => {
      state.purchased_products = state.products_in_cart;
    },
    reset_slice: (state) => {
      state.products_in_cart = [];
      state.purchased_products = [];
      state.prod_page = 1;
    },
    next_page: (state, action) => {
      //hard coded, need to debug
      if (state.prod_page !== lastPagintaionPage) state.prod_page += 1;
    },
    prev_page: (state) => {
      if (state.prod_page !== 1) state.prod_page -= 1;
    },
  },
});

export default productsSlice.reducer;
export const {
  products_fetched,
  fetching_products,
  update_product,
  add_to_cart,
  remove_from_cart,
  update_range,
  CalcCartTtoal,
  add_to_purchased,
  reset_slice,
  next_page,
  prev_page,
} = productsSlice.actions;

export const fetchProducts = (num) => async (dispatch) => {
  try {
    dispatch(fetching_products());
    const data = await getProducts(num);
    dispatch(products_fetched(data));
  } catch (err) {
    console.log(err);
  }
};
