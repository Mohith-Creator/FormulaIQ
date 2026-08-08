import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function SettingsFooter() {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Made with ❤️ for students</Text>
      <Text style={styles.subtitle}>FormulaIQ • Version 1.0.0</Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: 24,
      marginBottom: 50,
      paddingHorizontal: 30,
    },

    title: {
      fontSize: 15,
      fontWeight: "600",
      color: theme.text,
    },

    subtitle: {
      marginTop: 6,
      fontSize: 14,
      color: theme.textSecondary,
    },
  });
