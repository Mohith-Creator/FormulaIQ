import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function NumbersHeader() {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Math Tables</Text>
          <Text style={styles.subtitle}>
            Essential values and tables for faster learning.
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="calculator-outline" size={60} color={theme.primary} />
        </View>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 44,
      paddingBottom: 28,
    },

    banner: {
      minHeight: 150,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 24,
      paddingVertical: 22,
      borderRadius: 24,
      backgroundColor: theme.primaryLight,
      borderWidth: 1,
      borderColor: theme.primary + "20",
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: theme.dark ? 0.18 : 0.05,
      shadowRadius: 12,
      elevation: 3,
    },

    textContainer: {
      flex: 1,
      paddingRight: 16,
    },

    title: {
      fontSize: 28,
      fontWeight: "800",
      color: theme.text,
      marginBottom: 8,
    },

    subtitle: {
      fontSize: 15,
      lineHeight: 22,
      color: theme.textSecondary,
    },

    iconContainer: {
      width: 84,
      height: 84,
      justifyContent: "center",
      alignItems: "center",
    },
  });
