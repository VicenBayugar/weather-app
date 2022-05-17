import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, ImageBackground } from "react-native";
import * as Location from "expo-location";
import MapPreview from "./MapPreview";
import { COLORS } from "../constants/colors";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getWeatherByCoord } from "../store/actions/weatherActions";
import fondo from "../assets/fondo.jpg"

const Map = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [pickedLocation, setPicketLocation] = useState();

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setPicketLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const sendLocation = () => {
    dispatch(getWeatherByCoord(pickedLocation.lat, pickedLocation.lng));
    navigation.navigate("Home");
  };

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de localización para usar la app",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  return (
    <View style={styles.screen}>
      {pickedLocation ? (
        <>
          <TouchableOpacity style={styles.boton} onPress={sendLocation}>
            <Text style={styles.textoBoton}>Continue</Text>
          </TouchableOpacity>
          <MapPreview
            location={pickedLocation}
            style={styles.preview}
          ></MapPreview>
         </>        
      ) : (
        <ImageBackground source={fondo} resizeMode="cover" style={styles.image} blurRadius={3}>
        <Text style={styles.texto}>Waiting location...</Text>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.accent,
  },
  preview: {
    width: "100%",
    flex: 1,
  },
  texto: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
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
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
});

export default Map;
