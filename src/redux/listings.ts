import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Listing } from "../lib/applicationTypes";

export type ListingsSlice = {
  open: Listing[];
  claimed: Listing[];
}

const initialState: ListingsSlice = {
  open: [],
  claimed: [],
};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    initOpenListings: (state, action: PayloadAction<Listing[]>) => {
      state.open = action.payload;
    },
    claimListing: (state, action: PayloadAction<Listing>) => {
      const newClaim = action.payload;

      state.open = state.open.filter((l) => l.id !== newClaim.id);
      state.claimed.push(newClaim)
    },
  },
});

export const {
  initOpenListings,
  claimListing,
} = listingsSlice.actions;

// Selectors

export const selectOpenListings = (({ listings }: RootState) => listings.open);
export const selectClaimedListings = (({ listings }: RootState) => listings.claimed);

export const selectClaimedListingById = createSelector(
  [
    selectClaimedListings,
    (state, id: string | null) => id,
  ],
  (listings, id) => listings.find((l) => l.id === id) || null,
);

export default listingsSlice;
