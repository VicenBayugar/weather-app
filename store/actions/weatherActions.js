import { GET_WEATHER, SET_ERROR, LOAD_CITIES, DELETE_CITY } from "../types";
import { API_WEATHER } from "../../constants/apiWeather";
import { deleteCity, fetchCity } from "../../db";

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

export const getWeatherByCoord = (
  lat,
  lng,
  onSuccess = () => {},
  onError = () => {}
) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_WEATHER.api_key}`
      );

      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();

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

export const loadCities = () => {
  return async (dispatch) => {
    try {
      const result = await fetchCity();
      dispatch({ type: LOAD_CITIES, favs: result.rows._array });
    } catch (error) {
      throw error;
    }
  };
};

export const deleteCities = (id) => {
  return async (dispatch) => {
    try {
      const result = await deleteCity(id);
      dispatch({ type: DELETE_CITY, id });
    } catch (error) {
      throw error;
    }
  };
};
