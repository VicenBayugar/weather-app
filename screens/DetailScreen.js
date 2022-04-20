import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "../components/Item";

const DetailScreen = ({ route }) => {
  return (
    <Item item={route.params.item} />
    // <View style={styles.screen}>
    //   <Text>{route.params.title}</Text>
    //   <Text>Tempratura: {route.params.temperatura}</Text>
    //   <Text>Humedad: {route.params.humedad}</Text>
    // </View>
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
