import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function NumberRow({ left, right }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.row}>
      <Text style={styles.left}>{left}</Text>
      <Text style={styles.right}>{right}</Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 20,
      marginBottom: 12,
      paddingHorizontal: 18,
      paddingVertical: 16,
      backgroundColor: theme.surface,
      borderRadius: 16,
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

    left: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    right: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.primary,
    },
  });
