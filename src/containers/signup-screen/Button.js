import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function Button(props: Props) {

return(
  <TouchableOpacity onPress={props.onPress} style={styles.buttonsContainer}>
  <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);
}

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#498af2",
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    position: 'relative',
    width:"90%"
  },
  buttonText: {
    color: "#fff"
  }
});

export default Button;
