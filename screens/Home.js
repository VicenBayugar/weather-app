import React, {useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../store/actions/weatherActions";
import Form from "../components/Form";
import Weather from "../components/Weather";
import { COLORS } from "../constants/colors";
import fondo from "../assets/fondo.jpg"

const Home = () => {
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <ImageBackground source={fondo} resizeMode="cover" style={styles.image} blurRadius={3}>
        <ScrollView>
          <Form
            search={search}
            onSetSearch={setSearch}
            onSubmit={searchSubmitHandler}
          />
          <Weather loading={loading} data={data} error={error} />
        </ScrollView>
        </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default Home;
