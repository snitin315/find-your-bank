export default function error(state = {}, action) {
  switch (action.type) {
    case "SET_ERROR":
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
