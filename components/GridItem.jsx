import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

const GridItem = ({ item }) => {
  const navigation = useNavigation();
  const onSelected = (item) => {
    navigation.navigate("Detalle", {
      title: item.title,
    });
  };
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelected(item)}
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
    height: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    backgroundColor: COLORS.accent,
    flex: 1,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 300,
  },
  texto: {
    fontSize: 18,
    color: "white",
    textTransform: 'uppercase'
  },
});

export default GridItem;
