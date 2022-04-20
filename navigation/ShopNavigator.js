import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../screens/Home";
import DetailScreen from "../screens/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Weather App"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? COLORS.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : COLORS.primary,
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
    </NavigationContainer>
  );
};

export default ShopNavigator;
