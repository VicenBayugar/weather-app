import React from "react";
import Home from "../screens/Home";
import MapScreen from "../screens/MapScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import ChooseLocation from "../components/ChooseLocation";


const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Weather App"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: "#F2F2F2",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Weather App" }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Map" }}
      />
      <Stack.Screen
        name="ChooseLocation"
        component={ChooseLocation}
        options={{ title: "Map" }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
