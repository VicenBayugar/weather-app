import React from "react";
import { View, Text } from "react-native";

const Card = ({ props }) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

export default Card;
