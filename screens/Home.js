import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import GridItem from "../components/GridItem";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../store/actions/weatherActions";
import Form from "../components/Form";
import Weather from "../components/Weather";
import { COLORS } from "../constants/colors";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.weather);

  const searchSubmitHandler = () => {
    if (search === "") {
      return Alert.alert("Validation", "City name is required", [
        { text: "OK" },
      ]);
    }
    setLoading(true);
    dispatch(
      getWeather(
        search,
        () => setLoading(false),
        () => setLoading(false)
      )
    );
    setSearch("");
    Keyboard.dismiss();
  };

  const ciudades = [
    { title: "Buenos Aires", temperatura: "28°", humedad: "40%", id: 1 },
    { title: "London", temperatura: "15°", humedad: "85%", id: 2 },
    { title: "New York", temperatura: "22°", humedad: "54%", id: 3 },
    { title: "Paris", temperatura: "18°", humedad: "75%", id: 4 },
  ];

  const onSelected = (item) => {
    navigation.navigate("Detalle", {
      title: item.title,
      item,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <ScrollView>
          <Form
            search={search}
            onSetSearch={setSearch}
            onSubmit={searchSubmitHandler}
          />
          <Weather loading={loading} data={data} error={error} />
          {/* Este componente lo voy a renderizar en otro Tab del 
            TabNavigation que va a ser "Favoritos"
         <View>
          <Text style={styles.favoritos}>Favourites</Text>
        </View>
        <FlatList
          data={ciudades}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GridItem item={item} onSelected={onSelected} />
          )}
          numColumns={2}
        /> */}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 60,
    backgroundColor: COLORS.accent,
  },
});

export default Home;
