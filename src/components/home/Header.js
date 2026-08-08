import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function Header() {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, Aspirant! <Text style={styles.wave}>👋</Text>
      </Text>
      <Text style={styles.subtitle}>
        Your smart formula handbook for{" "}
        <Text style={styles.highlight}>SSC CGL</Text>.
      </Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 50,
      marginBottom: 32,
      paddingLeft: 8,
    },

    title: {
      width: "85%",
      fontSize: 28,
      fontWeight: "800",
      color: theme.text,
      letterSpacing: -0.5,
      lineHeight: 34,
    },

    wave: {
      fontSize: 24,
    },

    subtitle: {
      width: "69%",
      marginTop: 6,
      fontSize: 14.8,
      fontWeight: "500",
      lineHeight: 23,
      color: theme.textSecondary,
    },

    highlight: {
      color: theme.primary,
      fontWeight: "700",
    },
  });
