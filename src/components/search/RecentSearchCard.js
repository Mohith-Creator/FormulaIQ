import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function RecentSearchCard({ title, onPress, onRemove }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="reload-outline" size={18} color={theme.primary} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={onRemove}
        hitSlop={10}
      >
        <Ionicons name="close" size={18} color={theme.textSecondary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      height: 58,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 20,
      marginBottom: 12,
      paddingHorizontal: 14,
      backgroundColor: theme.surface,
      borderRadius: 18,
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

    iconContainer: {
      width: 34,
      height: 34,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 17,
      backgroundColor: theme.primaryLight,
      marginRight: 14,
    },

    title: {
      flex: 1,
      fontSize: 16,
      fontWeight: "600",
      color: theme.text,
    },

    removeButton: {
      width: 32,
      height: 32,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
    },
  });
