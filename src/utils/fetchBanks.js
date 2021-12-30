import axios from "axios";
import updateBanks from "../actionCreators/updateBanks";
import updateLoading from "../actionCreators/updateLoading";
import store from "../store";

function fetchBanksFromAPI() {
  const url = "https://vast-shore-74260.herokuapp.com/banks?city=";

  store.dispatch(updateBanks([]));

  store.dispatch(updateLoading(true));
  const storeData = store.getState();

  axios
    .get(url + storeData.searchParams.city)
    .then((res) => {
      store.dispatch(updateBanks(res.data));
      store.dispatch(updateLoading(false));
    })
    .catch((data) => {
      console.error(data);
    });
}

export default fetchBanksFromAPI;
