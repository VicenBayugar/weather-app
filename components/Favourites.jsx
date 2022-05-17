import React, {useEffect} from "react";
import { View, StyleSheet, FlatList, ImageBackground} from "react-native";
import { COLORS } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import {loadCities} from "../store/actions/weatherActions"
import GridItem from "./GridItem";
import fondo from "../assets/fondo.jpg"

const Favourites = () => {
  const dispatch = useDispatch()
  const { favs } = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(loadCities())
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} resizeMode="cover" style={styles.image} blurRadius={3}>
      <FlatList
          style={styles.flat}
          numColumns={1}
          data={favs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GridItem item={item} />
          )}
        />       
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
  flat:{
    marginTop: 30
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%"
  },
});

export default Favourites;
