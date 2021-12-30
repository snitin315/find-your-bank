import { combineReducers } from "redux";
import allBanks from "./allBanks";
import searchParams from "./searchParams";
import favorites from "./favorites";
import refreshBanks from "./refreshBanks";

export default combineReducers({
  allBanks,
  searchParams,
  favorites,
  refreshBanks,
});
