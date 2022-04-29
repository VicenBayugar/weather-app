import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Acá irían los datos del usuario</Text>
      <Text style={styles.texto}>su foto de perfil</Text>
      <Text style={styles.texto}>sus ciudades "favoritas"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.accent,
  },
  texto: {
    fontSize: 18,
    color: "white",
  },
});

export default Profile;
