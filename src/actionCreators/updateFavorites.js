export function addFavorites(favorites, add) {
  const updatedFavorites = Object.assign([], favorites);
  updatedFavorites.push(add);
  const myStorage = window.localStorage;
  myStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return { type: "SET_FAVORITES", payload: updatedFavorites };
}

export function removeFavorites(favorites, remove) {
  const updatedFavorites = Object.assign(
    [],
    favorites.filter((favorite) => {
      return favorite.ifsc !== remove.ifsc;
    })
  );
  const myStorage = window.localStorage;
  myStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  return { type: "SET_FAVORITES", payload: updatedFavorites };
}

export default function updateFavorites(fav) {
  return { type: "SET_FAVORITES", payload: fav };
}
