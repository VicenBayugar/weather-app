import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GridItem = ({ item }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={styles.container}
        // onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.texto}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    marginTop: 20,
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: "#219ebc",
    flex: 1,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 200,
  },
  texto: {
    fontSize: 18,
    color: "white",
    textTransform: 'uppercase'
  },
});

export default GridItem;
