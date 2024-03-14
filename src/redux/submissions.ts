import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Listing, Submission } from "../lib/applicationTypes";

export type SubmissionsSlice = {
  submissions: Submission[];
}

const initialState: SubmissionsSlice = {
  submissions: [],
};

const submissionsSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
    submitListing: (state, action: PayloadAction<Listing>) => {
      state.submissions.push({
        id: uuidv4(),
        listing: action.payload,
      });
    },
  },
});

export const {
  submitListing,
} = submissionsSlice.actions;

export default submissionsSlice;
