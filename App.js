import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TabNavigator from "./navigation/TabNavigator";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
