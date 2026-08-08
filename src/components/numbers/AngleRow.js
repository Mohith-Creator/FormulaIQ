import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function AngleRow({ degree, radian }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.row}>
      <Text style={styles.degree}>{degree}</Text>
      <Text style={styles.radian}>{radian}</Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginBottom: 10,
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

    degree: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    radian: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.primary,
    },
  });
