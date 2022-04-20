import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const Item = ({ item }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.details}>Temperatura: {item.temperatura}</Text>
          <Text style={styles.details}>Humedad: {item.humedad}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 50,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  details: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default Item;
