import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const Home = ({ navigation }) => {
  const ciudades = [
    { nombre: "Buenos Aires", temperatura: "28°", humedad: "40%" },
    { nombre: "Londres", temperatura: "15°", humedad: "85%" },
    { nombre: "New York", temperatura: "22°", humedad: "54%" },
  ];
  return (
    <View style={styles.screen}>
      <FlatList
        data={ciudades}
        renderItem={(data) => (
          <View style={styles.card}>
            <Text>{data.item.nombre}</Text>
            <Button
              title="Ver detalle"
              onPress={() => navigation.navigate("Detalle")}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
});

export default Home;
