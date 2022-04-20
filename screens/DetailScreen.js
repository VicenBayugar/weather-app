import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Text>{route.params.title}</Text>
      <Text>Tempratura: {route.params.temperatura}</Text>
      <Text>Humedad: {route.params.humedad}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailScreen;
