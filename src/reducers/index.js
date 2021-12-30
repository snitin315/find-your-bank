import { combineReducers } from "redux";
import allBanks from "./allBanks";
import searchParams from "./searchParams";
import favorites from "./favorites";
import loading from "./loading";

export default combineReducers({
  allBanks,
  searchParams,
  favorites,
  loading,
});
