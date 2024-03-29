import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  StyleProp,
  TextStyle,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

interface Props {
  placeHolder: string;
  secureEntry: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  style?: object;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  maxLength?: number;
  minLength?: number;
}

export default function CustomInput(props: Props) {
  const [isFocused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <View
      style={{
        ...styles.container,
        ...props.style,
        borderColor: isFocused ? "#1234" : "#1245",
      }}
    >
      <TextInput
        placeholder={props.placeHolder}
        placeholderTextColor={"#BEBEBE"}
        secureTextEntry={
          props.secureEntry == true && show == false ? true : false
        }
        value={props.value}
        onChangeText={(text) => props.setValue(text)}
        style={{
          ...styles.input,
          width: props.secureEntry ? "83%" : "100%",
          color: "#494343",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        keyboardType={props.keyboardType}
        autoCorrect={false}
        returnKeyType="next"
        maxLength={props.maxLength}
      />
      {props.secureEntry ? (
        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={styles.showContainer}
        >
          <Ionicons
            name={show ? "eye" : "eye-off"}
            size={20}
            color={"#BEBEBE"}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 0.5,
    flexDirection: "row",
  },
  input: {
    height: 60,
    padding: 15,
  },
  showContainer: {
    width: "17%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
