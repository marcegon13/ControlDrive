// src/components/ui/CurrencyText.tsx
import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import { formatearMoneda } from "../../utils";

interface CurrencyTextProps {
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
}) => {
  const content = hideValue ? "****" : `${prefix}${formatearMoneda(amount)}`;
  return <Text style={style}>{content}</Text>;
};
