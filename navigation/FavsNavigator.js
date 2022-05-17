import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import Favourites from "../components/Favourites";
import Item from "../components/Item"

const Stack = createNativeStackNavigator();

const FavsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favourites"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{ title: "Favourites" }}
      />
      <Stack.Screen
        name="Detalle"
        component={Item}
        options={{ title: "Favourite" }}
      />
    </Stack.Navigator>
  );
};

export default FavsNavigator;
