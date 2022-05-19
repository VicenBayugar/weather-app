import React from "react";
import Item from "../components/Item";

const DetailScreen = ({ route }) => {
  return <Item item={route.params.item} />;
};

export default DetailScreen;
