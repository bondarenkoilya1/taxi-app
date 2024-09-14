import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  value: number;
};

const initialState: AuthState = {
  value: 0
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
});

export const authReducer = authSlice.reducer;
