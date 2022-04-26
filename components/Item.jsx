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
    borderRadius: 6,
    backgroundColor: COLORS.accent,
    textAlign: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
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
