import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  adminStatus: false,
  id: "",
  phoneNumber: "",
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    saveUser: (state, { payload }) => {
      state.user = payload;
    },
    saveToken: (state, { payload }) => {
      state.token = payload;
    },
    setCredentials: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.adminStatus = payload.adminStatus;
      state.id = payload.id;
      state.phoneNumber = payload.phoneNumber;
    },

    clearUser: (state) => {
      state.user = {};
    },
    clearToken: (state) => {
      state.token = {};
    },
    logout: (state) => {
      state.token = "";
      state.user = {};
    },
  },
});

export const { saveUser, clearUser, saveToken, setCredentials, logout } =
  authSlice.actions;

export default authSlice.reducer;
