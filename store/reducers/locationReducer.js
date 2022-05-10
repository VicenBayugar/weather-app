import { ADD_LOCATION } from "../actions/locationActions";

const initialState = {
  ubicacion: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        location: action.payload.ciudad,
      };
    default:
      return state;
  }
};
