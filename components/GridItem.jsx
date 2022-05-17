import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteCities } from "../store/actions/weatherActions";

const GridItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSelected = (item) => {
    navigation.navigate("Detalle", {
      title: item.title,
    });
  };

  const handlerDelete = (id) => {
    Alert.alert("Delete", "Do you want to delete this city?", [
      {
        text: "NO",
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => {
          dispatch(deleteCities(id));
        },
      },
    ]);
  };

  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelected(item)}
      >
        <View style={styles.contenedor}>
          <FontAwesome
            style={styles.texto}
            name="star-o"
            size={25}
            color="white"
          />
          <Text style={styles.texto}>{item.title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.contenedor2}
        onPress={() => handlerDelete(item.id)}
      >
        <AntDesign
          style={styles.borrar}
          name="delete"
          size={29}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    marginTop: 20,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  container: {
    backgroundColor: "rgba(1, 22, 30, 0.87)",
    flex: 4,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  contenedor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contenedor2: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    paddingLeft: 7,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  borrar: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default GridItem;
