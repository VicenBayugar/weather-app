import { GET_WEATHER, SET_ERROR } from "../types";
import { API_WEATHER } from "../../constants/apiWeather";

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_WEATHER.api_key}`
      );

      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      console.log("Llamando api");
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
      onSuccess();
    } catch (err) {
      dispatch(setError(err.message));
      onError();
    }
  };
};

const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
