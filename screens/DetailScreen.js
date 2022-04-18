import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Acá mostraría el clima de cada ciudad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailScreen;
