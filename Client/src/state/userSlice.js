import { createSlice } from "@reduxjs/toolkit";
import { removeSessionToken } from "../helper";
import { remove_local_state } from "./middleware/localstorage.middleware";

const Dummy = {
  name: "User",
  user_name: "User",
  email: "dummy@dummy.com",
  password: "dummy",
  id: "id",
  isLoggedIn: false,
  pic: "./images/profile_pic/dummy_profile.png",
};

export const userSlice = createSlice({
  name: "user",
  initialState: Dummy,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.user_name = action.payload.user_name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload._id;
      state.isLoggedIn = true;
      state.pic = "./images/profile_pic/prof-pic.jpg";
    },
    printUser: (state) => {
      console.log({ state });
    },
    logOut: () => {
      remove_local_state();
      removeSessionToken();
      return Dummy;
    },
  },
});

export const { setUser, printUser, logOut } = userSlice.actions;

export default userSlice.reducer;
