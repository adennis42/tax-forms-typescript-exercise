import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../lib/applicationTypes";

export type UserSlice = {
  user: User | null;
}

const initialState: UserSlice = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const {
  setUser,
} = userSlice.actions;

export default userSlice;
