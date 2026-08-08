import React, { useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function SearchBar({
  value,
  onChangeText,
  onClear,
  autoFocus = true,
  onFilterPress,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [autoFocus]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Ionicons name="search-outline" size={28} color={theme.textSecondary} />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search formulas or topics..."
          placeholderTextColor={theme.textSecondary}
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          autoCapitalize="none"
          autoFocus={autoFocus}
          returnKeyType="search"
          selectionColor={theme.primary}
        />
        <View style={styles.divider} />
        {value.length > 0 ? (
          <TouchableOpacity
            style={styles.filterButton}
            activeOpacity={0.8}
            onPress={onClear}
          >
            <Ionicons name="close" size={22} color={theme.textSecondary} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.filterButton}
            activeOpacity={0.8}
            onPress={onFilterPress}
          >
            <Ionicons
              name="options-outline"
              size={26}
              color={theme.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    wrapper: {
      paddingHorizontal: 24,
      paddingBottom: 20,
      backgroundColor: theme.background,
    },

    container: {
      height: 62,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 16,
      paddingRight: 4,
      backgroundColor: theme.surface,
      borderRadius: 31,
      borderWidth: 1,
      borderColor: theme.border,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: theme.dark ? 0.18 : 0.08,
      shadowRadius: 12,
      elevation: 5,
    },

    input: {
      flex: 1,
      marginLeft: 12,
      fontSize: 14,
      fontWeight: "500",
      color: theme.text,
    },

    divider: {
      width: 1,
      height: 36,
      marginHorizontal: 6,
      backgroundColor: theme.border,
    },

    filterButton: {
      width: 44,
      height: 44,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 22,
    },
  });
