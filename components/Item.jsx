import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import fondo from "../assets/fondo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../store/actions/weatherActions";
import Weather from "./Weather";

const Item = ({ route }) => {
  const title = route.params.title;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { data, error } = useSelector((state) => state.weather);

  useEffect(() => {
    setLoading(true);
    dispatch(
      getWeather(
        title,
        () => setLoading(false),
        () => setLoading(false)
      )
    );
  }, []);

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={fondo}
        resizeMode="cover"
        style={styles.image}
        blurRadius={3}
      >
        <ScrollView>
          <View style={styles.container}>
            <Weather loading={loading} data={data} error={error} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});

export default Item;
