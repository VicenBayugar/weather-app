import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

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
                <Ionicons name="md-home" size={30} color="black" />
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="ProfileTab"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.item}>
                <FontAwesome name="user" size={30} color="black" />
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
    elevation: 5,
    position: "absolute",
    // bottom: 13,
    // left: 20,
    // right: 20,
    borderRadius: 15,
    height: 70,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabNavigator;
