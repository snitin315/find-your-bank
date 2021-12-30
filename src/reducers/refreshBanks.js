export default function refreshBanks(state = false, action) {
  switch (action.type) {
    case "SET_REFRESH_BANKS":
      return action.payload;
    default:
      return state;
  }
}
