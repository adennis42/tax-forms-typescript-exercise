import listingsData from "../data/listings.json";

import { Listing } from "./applicationTypes";

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
