import axios from "axios";
import updateBanks from "../actionCreators/updateBanks";
import updateLoading from "../actionCreators/updateLoading";
import updateError from "../actionCreators/updateError";
import store from "../store";

async function fetchBanksFromAPI() {
  await store.dispatch(updateBanks([]));
  await store.dispatch(updateLoading(true));

  const storeData = store.getState();

  axios
    .get(
      `https://ea1c20ef-757e-407c-bd95-643e8f57bdce.mock.pstmn.io/banks?city=${storeData.searchParams.city}`,
      { timeout: 15000 }
    )
    .then((res) => {
      store.dispatch(updateBanks(res.data));
      store.dispatch(updateLoading(false));
    })
    .catch((data) => {
      const error = {
        msg: data.message,
        body: data,
      };
      store.dispatch(updateError(error));
      store.dispatch(updateLoading(false));
    });
}

export default fetchBanksFromAPI;
