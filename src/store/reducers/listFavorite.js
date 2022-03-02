const initialState = [];

export default function listFavorite(state = initialState, action) {
  if (action.type === "SET_LIST_FAVORITE") {
    return [...state, action.payload];
  }
  return state;
}