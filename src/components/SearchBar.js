import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { feather, Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput placeholder="search" style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
