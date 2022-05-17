import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Form = ({ search, onSetSearch, onSubmit }) => {
  const navigation = useNavigation();
  const navigateMap = () => {
    navigation.navigate("Map");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Search by city name or use your location
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter city name..."
          value={search}
          onChangeText={(val) => onSetSearch(val)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Search" color="#219ebc" onPress={onSubmit} />
        </View>
        <View style={styles.button}>
          <Button title="My Location" color="#3e5c76" onPress={navigateMap} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 25,
    marginTop: 20,
  },
  heading: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "#363636",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
  	  width: 0,
  	  height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonContainer:{
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  button: {
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default Form;
