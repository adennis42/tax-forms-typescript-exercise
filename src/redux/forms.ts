import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Form } from "../lib/applicationTypes";

export type FormsSlice = {
  forms: Form[];
}

const initialState: FormsSlice = {
  forms: [],
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    setForms: (state, action: PayloadAction<Form[]>) => {
      state.forms = action.payload;
    },
    addForm: (state, action: PayloadAction<Form>) => {
      state.forms.push(action.payload);
    },
  },
});

export const {
  addForm,
  setForms,
} = formSlice.actions;

// Selectors

export const selectForms = (({ forms }: RootState) => forms.forms);

export default formSlice;
