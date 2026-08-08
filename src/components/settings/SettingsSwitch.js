import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

import CustomSwitch from "./CustomSwitch";

export default function SettingsSwitch({
  title,
  subtitle,
  icon,
  color,
  light,
  value,
  onValueChange,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: light,
          },
        ]}
      >
        <Ionicons name={icon} size={20} color={color} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? (
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      <CustomSwitch value={value} color={color} onValueChange={onValueChange} />
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.surface,
      marginHorizontal: 20,
      marginBottom: 12,
      padding: 16,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: theme.border,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: theme.dark ? 0.18 : 0.03,
      shadowRadius: 8,
      elevation: 2,
    },

    iconContainer: {
      width: 46,
      height: 46,
      borderRadius: 14,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 14,
    },

    content: {
      flex: 1,
    },

    title: {
      fontSize: 17,
      fontWeight: "700",
      color: theme.text,
    },

    subtitle: {
      marginTop: 2,
      fontSize: 14,
      color: theme.textSecondary,
    },
  });
