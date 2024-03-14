import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { Submission } from "../lib/applicationTypes";

export type SubmissionsSlice = {
  submissions: Submission[];
}

const initialState: SubmissionsSlice = {
  submissions: [{
    id: "111-222-333-4444",
    createdAt: new Date("August 19, 2023 23:15:30 GMT+00:00").toString(),
    listing: {
      id: "listing-5",
      name: "PROTOGEN",
      physicalAddress: {
        address1: "2143 Luna Ci.",
        address2: "",
        city: "Charlotte",
        state: "NC",
        zip: "13254"
      },
      mailingAddress: null
    },
  }],
};

const submissionsSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
    addSubmission: (state, action: PayloadAction<Submission>) => {
    },
  },
});

export const {
  addSubmission,
} = submissionsSlice.actions;

// Selectors

export const selectSubmissions = ({ submissions }: RootState) =>
  submissions.submissions;

export default submissionsSlice;
