import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
  label: string;
  onPress?: () => void;
  style?: ViewStyle; // Estilo del contenedor del botón
  textStyle?: TextStyle; // Estilo del texto del botón
  disabled?: boolean; // Deshabilitar el botón
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  style,
  textStyle,
  disabled,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[defaultStyle, style]}
    disabled={disabled}
  >
    <Text style={[defaultTextStyle, textStyle]}>{label}</Text>
  </TouchableOpacity>
);

const defaultStyle: ViewStyle = {
  padding: 10,
  backgroundColor: "#3498db",
  borderRadius: 5,
  alignItems: "center",
};

const defaultTextStyle: TextStyle = {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
};

export default Button;
