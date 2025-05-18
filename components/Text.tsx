import { Text as RNText, TextProps } from "react-native";
export default function Text({ children, style, ...props }: TextProps) {
  return (
    <RNText
      style={[
        {
          color: "white",
          fontSize: 16,
          fontFamily: "LexendDeca_400Regular",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}
