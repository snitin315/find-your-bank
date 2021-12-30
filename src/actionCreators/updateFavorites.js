export default function updateFavorites(favorites) {
  return { type: "SET_FAVORITES", payload: favorites };
}
