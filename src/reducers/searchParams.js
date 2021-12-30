export default function searchParams(
  state = { city: "DELHI", category: "", query: "" },
  action
) {
  switch (action.type) {
    case "SET_SEARCH_PARAMS":
      return action.payload;
    default:
      return state;
  }
}
