import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Form, Submission } from "../lib/applicationTypes";

export type FormsSlice = {
  submissions: Submission[];
}

const initialState: FormsSlice = {
  submissions: [],
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    submitForm: (state, action: PayloadAction<Form>) => {
      state.submissions.push({
        id: uuidv4(),
        form: action.payload,
      });
    },
  },
});

export const {
  submitForm,
} = formSlice.actions;

export default formSlice;
