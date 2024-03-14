import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user";
import formsSlice from "./forms";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    forms: formsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
