import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import MathValue from "../math/MathValue";

export default function TrigTableRow({ item }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.row}>
      <View style={styles.functionCell}>
        <Text style={styles.function}>{item.function}</Text>
      </View>
      <View style={styles.valueCell}>
        <MathValue value={item["0°"]} />
      </View>
      <View style={styles.valueCell}>
        <MathValue value={item["30°"]} />
      </View>
      <View style={styles.valueCell}>
        <MathValue value={item["45°"]} />
      </View>
      <View style={styles.valueCell}>
        <MathValue value={item["60°"]} />
      </View>
      <View style={styles.valueCell}>
        <MathValue value={item["90°"]} />
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },

    functionCell: {
      width: 80,
      justifyContent: "center",
      paddingVertical: 16,
      paddingHorizontal: 14,
      backgroundColor: theme.background,
    },

    function: {
      fontSize: 14.5,
      fontWeight: "700",
      textTransform: "uppercase",
      color: theme.primary,
    },

    valueCell: {
      width: 57,
      height: 56,
      justifyContent: "center",
      alignItems: "center",
    },
  });
