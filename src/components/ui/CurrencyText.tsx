// src/components/ui/CurrencyText.tsx
import React from "react";
import { Text, TextStyle, StyleProp, TextProps } from "react-native";
import { formatearMoneda } from "../../utils";

interface CurrencyTextProps extends TextProps {
  amount: number;
  hideValue?: boolean;
  style?: StyleProp<TextStyle>;
  prefix?: string;
}

export const CurrencyText: React.FC<CurrencyTextProps> = ({
  amount,
  hideValue = false,
  style,
  prefix = "",
  ...props
}) => {
  // Sanitize prefix to ensure no "+" creeps in
  const safePrefix = prefix && prefix.includes("+") ? prefix.replace("+", "") : prefix;
  const content = hideValue ? "****" : `${safePrefix}${formatearMoneda(amount)}`;
  return <Text style={style} {...props}>{content}</Text>;
};
