import React from "react";
import { insertCity } from "../db/index"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const WeatherData = ({ data }) => {
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const min = (data.main.temp_min - 273.15).toFixed(2);
  const max = (data.main.temp_max - 273.15).toFixed(2);

  
  const favorito = async () => {
     const result = await insertCity(data.name)
     console.log(result);
  }

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <View style={styles.header}>
      <Text style={styles.title}>
        {data.name} - {data.sys.country}
      </Text>
      <TouchableOpacity onPress={favorito}>
        <Text style={styles.title}>Fav</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          }}
        />
      </View>
      <View style={styles.box}>
        <View style={styles.tempContainer}>
          <Text style={styles.boxLabel}>Min</Text>
          <Text style={styles.boxLabel}>Temp</Text>
          <Text style={styles.boxLabel}>Max</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.boxText}>{min}&#8451;</Text>
          <Text style={styles.boxText}>{celsius}&#8451;</Text>
          <Text style={styles.boxText}>{max}&#8451;</Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxLabel}>Humidity</Text>
        <Text style={styles.boxText}>{data.main.humidity}%</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxLabel}>Pressure</Text>
        <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxLabel}>Wind</Text>
        <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  box: {
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#219ebc",
  },
  boxLabel: {
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
    color: "white",
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 50,
    height: 40,
    alignContent: "center",
  },
  tempContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
});

export default WeatherData;
