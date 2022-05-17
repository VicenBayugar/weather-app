import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Text,
} from "react-native";
import { COLORS } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { loadCities } from "../store/actions/weatherActions";
import GridItem from "./GridItem";
import fondo from "../assets/fondo.jpg";

const Favourites = () => {
  const dispatch = useDispatch();
  const { favs } = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(loadCities());
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={fondo}
        resizeMode="cover"
        style={styles.image}
        blurRadius={3}
      >
        {favs.length == 0 ? (
          <Text style={styles.texto}>
            You haven't added any favourites yet...
          </Text>
        ) : (
          <FlatList
            style={styles.flat}
            numColumns={1}
            data={favs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <GridItem item={item} />}
          />
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.accent,
  },
  flat: {
    marginTop: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  texto: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Favourites;
