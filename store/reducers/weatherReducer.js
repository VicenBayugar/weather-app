import { GET_WEATHER, SET_ERROR, LOAD_CITIES, DELETE_CITY } from "../types";

const initialState = {
  data: null,
  favs: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        data: action.payload,
        error: "",
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CITIES:
      return {
        ...state,
        favs: action.favs,
      };
    case DELETE_CITY:
      const values = state.favs.filter((item) => item.id !== action.id);
      return {
        ...state,
        favs: values,
      };
    default:
      return state;
  }
};
