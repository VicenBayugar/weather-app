import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/colors";
import { Platform } from "react-native";
import Profile from "../components/Profile";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
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
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
