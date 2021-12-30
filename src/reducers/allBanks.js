export default function allBanks(state = [], action) {
  switch (action.type) {
    case "SET_BANKS":
      return action.payload;
    default:
      return state;
  }
}
