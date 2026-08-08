import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function CategoryChips({
  categories,
  selectedCategory,
  onSelect,
  theme: subjectTheme,
}) {
  const { theme: appTheme } = useSettings();
  const styles = getStyles(appTheme);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => {
        const selected = category === selectedCategory;

        return (
          <TouchableOpacity
            key={category}
            activeOpacity={0.8}
            onPress={() => onSelect(category)}
            style={[
              styles.chip,
              selected
                ? {
                    backgroundColor: subjectTheme.primary,
                    borderColor: subjectTheme.primary,
                  }
                : styles.chipInactive,
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: selected ? appTheme.surface : appTheme.text,
                },
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingBottom: 20,
    },

    chip: {
      height: 46,
      paddingHorizontal: 22,
      borderRadius: 999,

      justifyContent: "center",
      alignItems: "center",

      borderWidth: 1,

      marginRight: 12,
    },

    chipInactive: {
      backgroundColor: theme.surface,
      borderColor: theme.border,
    },

    text: {
      fontSize: 16,
      fontWeight: "600",
    },
  });
