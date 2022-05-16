import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import Profile from "../components/Profile";

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
        component={Profile}
        options={{ title: "Favourites" }}
      />
    </Stack.Navigator>
  );
};

export default FavsNavigator;
