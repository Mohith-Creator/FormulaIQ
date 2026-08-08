import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function SettingsSection({
  title,
  icon,
  color = "#2563EB",
  light = "#DBEAFE",
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: light,
          },
        ]}
      >
        <Ionicons name={icon} size={18} color={color} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 20,
      marginTop: 26,
      marginBottom: 14,
    },

    iconContainer: {
      width: 36,
      height: 36,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },

    title: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.text,
      letterSpacing: -0.2,
    },
  });
