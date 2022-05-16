import React, {useLayoutEffect, useEffect} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import {loadCities} from "../store/actions/weatherActions"
import GridItem from "./GridItem";

const Favoritos = () => {
  const dispatch = useDispatch()
  const { favs } = useSelector((state) => state.weather);
  useEffect(() => {
    dispatch(loadCities())
  }, [])

  console.log(favs);

  return (
    <View style={styles.container}>
      <FlatList
          data={favs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GridItem item={item} />
          )}
          numColumns={1}
        />
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
  texto: {
    fontSize: 18,
    color: "white",
  },
});

export default Favoritos;
