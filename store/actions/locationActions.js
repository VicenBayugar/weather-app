import { API } from "../../constants/Map";
export const ADD_LOCATION = "ADD_LOCATION";

export const addLocation = (location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API.API_KEY}`
    );

    if (!response.ok)
      throw new Error("No se ha podido comunicar con Google Maps API");

    const resData = await response.json();
    if (!resData.results)
      throw new Error(
        "No se han encontrado datos para las coordenadas seleccionadas."
      );
    const ciudad = resData.results[0].address_components[2].long_name;

    // console.log("Dispatching...");

    // const fileName = image.split('/').pop();
    // const Path = FileSystem.documentDirectory + fileName;
    // console.log('------------------------------------');
    // console.log('image: ' + image);
    // console.log('filename: ' + fileName);
    // console.log('Path: ' + Path);
    // console.log('------------------------------------');
    // try {
    //     await FileSystem.moveAsync({
    //         from: image,
    //         to: Path,
    //     })
    // } catch (err) {
    //     console.log(err);
    //     throw err;
    // }
    dispatch({
      type: ADD_LOCATION,
      payload: { ciudad },
    });
  };
};
