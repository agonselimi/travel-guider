import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function Button(props: Props) {

return(
  <TouchableOpacity style={styles.buttonsContainer}>
  <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#498af2",
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    position: 'relative',
    width:"70%"
  },
  buttonText: {
    color: "#fff"
  }
});

export default Button;
