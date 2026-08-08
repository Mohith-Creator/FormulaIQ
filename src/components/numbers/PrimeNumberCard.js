import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function PrimeNumberCard({ number }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card}>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      flex: 1,
      height: 82,
      margin: 6,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: theme.border,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.04,
      shadowRadius: 8,
      elevation: 2,
    },

    number: {
      fontSize: 28,
      fontWeight: "700",
      color: theme.primary,
    },
  });
