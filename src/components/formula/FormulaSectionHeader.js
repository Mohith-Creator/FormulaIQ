import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function FormulaSectionHeader({
  title,
  icon,
  theme: subjectTheme,
  yellow = false,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const backgroundColor = yellow ? "#FEF3C7" : subjectTheme.light;

  const iconColor = yellow ? "#D97706" : subjectTheme.primary;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor,
          },
        ]}
      >
        <Ionicons name={icon} size={18} color={iconColor} />
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
      marginTop: 15,
      marginBottom: 13,
    },

    iconContainer: {
      width: 34,
      height: 34,
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
