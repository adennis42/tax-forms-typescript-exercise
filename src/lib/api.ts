import { v4 as uuidv4 } from "uuid";

import listingsData from "../data/listings.json";
import { Listing, Submission } from "./applicationTypes";

/*\
|* !!IMPORTANT!!
|*
|* The following code mocks out a ficticious API for the purpose of keeping
|* the code screening limited to frontend TypeScript. Please feel free to
|* treat this file and the corresponding data files as a blackbox. There is
|* nothing here you are expected to add, and you are free to assume that all
|* of these functions behave as expected.
\*/

type APIResponse<T> = {
  data: T[];
}

export const loadListings = () => {
  return Promise.resolve(
    listingsData as APIResponse<Listing>,
  );
};

// requestExtenion takes a listing object and "submits" it to our fictitious
// API. The API will record this submission and return a "Submission" object.
// For convenience, the Listing is returned a child of the newly recorded
// Submission.
export const requestExtension = (listing: Listing) => {
  return new Promise<Submission>((resolve, reject) => {
    setTimeout(() => resolve({
      id: uuidv4(),
      createdAt: new Date().toString(),
      listing,
    }), 500);
  });
};
