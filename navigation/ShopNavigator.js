import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../screens/Home";
import DetailScreen from "../screens/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather App">
        <Stack.Screen name="Weather App" component={Home} />
        <Stack.Screen name="Detalle" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
