import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import React from "react";

interface Props {
  label: string;
  description?: string;
  value: string;
  selectValue: string; // Valor que debería activar la selección
  setValue: React.Dispatch<React.SetStateAction<string>>; // Función para actualizar el valor de la variable de estado
  style?: object;
}

export default function Select(props: Props) {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      style={{
        ...styles.container,
        ...props.style,
        borderColor: props.value == props.selectValue ? "#1456" : "#5214",
      }}
      onPress={() => props.setValue(props.selectValue)}
    >
      <View style={styles.subContainer}>
        <View
          style={{
            ...styles.checkPoint,
            borderColor: props.value == props.selectValue ? "#1456" : "#000",
            backgroundColor: props.value == props.selectValue ? "#000" : "#fff",
          }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text
            style={{
              fontWeight: "400",
              color: "#000",
            }}
          >
            {props.label}
          </Text>
          {props.description ? (
            <Text
              style={{
                color: "#BEBEBE",
              }}
            >
              {props.description}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: "90%",
    flexDirection: "row",
    margin: 20,
    alignItems: "center",
  },
  checkPoint: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 100,
  },
});
