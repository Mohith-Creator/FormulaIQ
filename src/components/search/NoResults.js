import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function NoResults() {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons
          name="search-circle-outline"
          size={46}
          color={theme.textSecondary}
        />
      </View>
      <Text style={styles.title}>No formulas found</Text>
      <Text style={styles.subtitle}>
        Try searching with another keyword or formula name.
      </Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop: 80,
      paddingHorizontal: 32,
    },

    icon: {
      width: 90,
      height: 90,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 45,
      backgroundColor: theme.surface,
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
      marginBottom: 18,
    },

    title: {
      fontSize: 22,
      fontWeight: "700",
      color: theme.text,
    },

    subtitle: {
      marginTop: 10,
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: theme.textSecondary,
    },
  });
