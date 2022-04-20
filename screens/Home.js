import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import GridItem from "../components/GridItem";

const Home = ({ navigation }) => {
  const ciudades = [
    { title: "Buenos Aires", temperatura: "28°", humedad: "40%", id: 1 },
    { title: "Londres", temperatura: "15°", humedad: "85%", id: 2 },
    { title: "New York", temperatura: "22°", humedad: "54%", id: 3 },
    { title: "París", temperatura: "18°", humedad: "75%", id: 4 },
  ];

  const onSelected = (item) => {
    navigation.navigate("Detalle", {
      title: item.title,
      item,
    });
  };

  return (
    <FlatList
      style={styles.screen}
      data={ciudades}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GridItem item={item} onSelected={onSelected} />
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
  },
});

export default Home;
