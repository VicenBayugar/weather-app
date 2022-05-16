import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import FavsNavigator from "./FavsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
        initialRouteName="Home"
      >
        <BottomTabs.Screen
          name="HomeTab"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <Ionicons name="md-home" size={25} color="white" />
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="FavTab"
          component={FavsNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <FontAwesome name="user" size={25} color="white" />
              </View>
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    position: "absolute",
    height: 60,
    backgroundColor: COLORS.primary,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
