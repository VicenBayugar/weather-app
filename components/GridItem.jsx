import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text>{item.temperatura}</Text>
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 10,
    height: 150,
  },
  container: {
    backgroundColor: COLORS.accent,
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
    width: 150,
  },
  // title: {
  //   fontFamily: "open-sans-bold",
  // },
});

export default GridItem;
