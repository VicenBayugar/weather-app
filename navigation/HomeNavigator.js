import React from "react";
import Home from "../screens/Home";
import DetailScreen from "../screens/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Weather App"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.accent,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Weather App" }}
      />
      <Stack.Screen
        name="Detalle"
        component={DetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
