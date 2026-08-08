import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import TrigTableRow from "./TrigTableRow";

export default function TrigTable({ data }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.header}>
          <View style={styles.functionHeader}>
            <Text style={styles.headerText}>Function</Text>
          </View>
          <Text style={styles.headerCell}>0°</Text>
          <Text style={styles.headerCell}>30°</Text>
          <Text style={styles.headerCell}>45°</Text>
          <Text style={styles.headerCell}>60°</Text>
          <Text style={styles.headerCell}>90°</Text>
        </View>
        {data.map((item) => (
          <TrigTableRow key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 12,
      paddingBottom: 30,
      backgroundColor: theme.background,
    },

    table: {
      overflow: "hidden",
      borderRadius: 18,
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
    },

    header: {
      flexDirection: "row",
      backgroundColor: theme.primaryLight,
    },

    functionHeader: {
      width: 78,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 16,
    },

    headerCell: {
      width: 57,
      paddingVertical: 16,
      textAlign: "center",
      fontWeight: "700",
      color: theme.primary,
    },

    headerText: {
      fontWeight: "700",
      color: theme.primary,
    },
  });
