import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Form = ({ search, onSetSearch, onSubmit }) => {
  const navigation = useNavigation();

  const navigateMap = () => {
    navigation.navigate("Map");
  };

  const handlePickOnMap = async () => {
    navigation.navigate("ChooseLocation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search by city name or by location</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter city name..."
          placeholderTextColor={"#848484"}
          value={search}
          onChangeText={(val) => onSetSearch(val)}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
          <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.boton} onPress={navigateMap}>
            <Text style={styles.text}>My Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton2} onPress={handlePickOnMap}>
            <Text style={styles.text}>Choose Location</Text>
          </TouchableOpacity>
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
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
  buttonContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    backgroundColor: "#219ebc",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
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
    flex: 1,
    flexDirection: "row",
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
  boton: {
    flex: 1,
    marginRight: 2,
    backgroundColor: "#3e5c76",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  boton2: {
    flex: 1,
    marginLeft: 2,
    backgroundColor: "#3e5c76",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
});

export default Form;
