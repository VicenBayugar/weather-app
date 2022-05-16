import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TabNavigator from "./navigation/TabNavigator";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { init } from "./db";

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database fail connect')
    console.log(err.message);
  })

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <StatusBar animated={true} barStyle={"light-content"} />
      <TabNavigator />
    </Provider>
  );
}
