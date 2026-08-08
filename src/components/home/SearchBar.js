import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function SearchBar({
  placeholder = "Search formulas or topics...",
  onPress,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      android_ripple={{ color: theme.border }}
    >
      <Ionicons name="search-outline" size={28} color={theme.textSecondary} />

      <Text style={styles.placeholder}>{placeholder}</Text>

      <View style={styles.divider} />

      <View style={styles.filterButton}>
        <Ionicons
          name="options-outline"
          size={26}
          color={theme.textSecondary}
        />
      </View>
    </Pressable>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      height: 62,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.surface,
      borderRadius: 31,
      borderWidth: 1,
      borderColor: theme.border,
      marginTop: -7,
      paddingLeft: 16,
      paddingRight: 4,

      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.08,
      shadowRadius: 12,
      elevation: 5,
    },

    placeholder: {
      flex: 1,
      marginLeft: 12,
      fontSize: 14,
      fontWeight: "500",
      color: theme.textSecondary,
    },

    divider: {
      width: 1,
      height: 36,
      backgroundColor: theme.border,
      marginHorizontal: 6,
    },

    filterButton: {
      width: 44,
      height: 44,
      justifyContent: "center",
      alignItems: "center",
    },
  });
