import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function SettingsRow({
  title,
  subtitle,
  icon,
  color,
  light,
  onPress,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={onPress}
    >
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
      <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
    </TouchableOpacity>
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
