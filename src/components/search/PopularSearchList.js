import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

import SearchSectionHeader from "./SearchSectionHeader";

export default function PopularSearchList({ searches, onPress }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <>
      <SearchSectionHeader title="Popular Searches" />
      {searches.map((item) => (
        <TouchableOpacity
          key={item}
          activeOpacity={0.85}
          style={styles.card}
          onPress={() => onPress(item)}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="trending-up" size={18} color={theme.primary} />
          </View>
          <Text numberOfLines={1} style={styles.title}>
            {item}
          </Text>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.textSecondary}
          />
        </TouchableOpacity>
      ))}
    </>
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
  });
