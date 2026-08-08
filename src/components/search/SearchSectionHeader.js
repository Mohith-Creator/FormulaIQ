import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function SearchSectionHeader({ title, action, onPress }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {action && (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Text style={styles.action}>{action}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 20,
      marginBottom: 12,
    },

    left: {
      flexDirection: "row",
      alignItems: "center",
    },

    title: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    action: {
      fontSize: 14,
      fontWeight: "600",
      color: theme.primary,
    },
  });
