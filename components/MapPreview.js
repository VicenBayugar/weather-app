import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { API } from "../constants/Map";

const MapPreview = (props) => {
  const mapPreviewUrl = props.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=12&size=1200x600&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${props.location.lat},${props.location.lng}&key=${API.API_KEY}`
    : "";

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
