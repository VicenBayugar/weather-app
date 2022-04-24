import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Acá irían los datos del usuario</Text>
      <Text>su foto de perfil</Text>
      <Text>sus ciudades "favoritas"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
