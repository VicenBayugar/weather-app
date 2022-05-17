import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../constants/colors";
import { getWeatherByCoord } from "../store/actions/weatherActions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ChooseLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const initialRegion = {
    longitude: -58.37723,
    latitude: -34.61315,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSelectedLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

   const sendLocation = () => {
     dispatch(getWeatherByCoord(selectedLocation.lat, selectedLocation.lng));
     navigation.navigate("Home");
   };

  return (
      <>
    <View>
      <TouchableOpacity style={styles.boton} 
      onPress={sendLocation}
      >
        <Text style={styles.textoBoton}>Continue</Text>
      </TouchableOpacity>
      </View>
      <MapView
        initialRegion={initialRegion}
        style={styles.container}
        onPress={handleSelectedLocation}
      >
        {selectedLocation && (
          <Marker
            title="Selected location"
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          />
        )}
      </MapView>
      </>
  );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.accent,
    },
  container: {
    flex: 10,
    width: "100%",
  },
  boton: {
    width: "100%",
    paddingVertical: 13,
    backgroundColor: "#3e5c76",
  },
  textoBoton: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default ChooseLocation;
