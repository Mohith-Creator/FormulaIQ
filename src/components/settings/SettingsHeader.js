import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function SettingsHeader() {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Customize your FormulaIQ experience</Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 52,
      paddingBottom: 20,
    },

    title: {
      fontSize: 28,
      fontWeight: "800",
      color: theme.text,
      letterSpacing: -0.5,
      lineHeight: 32,
    },

    subtitle: {
      marginTop: 6,
      fontSize: 14.8,
      fontWeight: "500",
      color: theme.textSecondary,
      lineHeight: 23,
    },
  });
