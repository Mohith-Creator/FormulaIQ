import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function ChapterCard({
  number,
  title,
  formulaCount,
  theme: subjectTheme,
  onPress,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: subjectTheme.light,
          },
        ]}
      >
        <Ionicons
          name="document-text-outline"
          size={22}
          color={subjectTheme.primary}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {number}. {title}
        </Text>

        <Text style={styles.subtitle}>
          {formulaCount} {formulaCount === 1 ? "Formula" : "Formulas"}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={22} color={subjectTheme.primary} />
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 16,
      marginBottom: 14,
      backgroundColor: theme.surface,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: theme.border,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.03,
      shadowRadius: 4,
      elevation: 1,
    },

    iconContainer: {
      width: 52,
      height: 52,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
      marginRight: 16,
    },

    content: {
      flex: 1,
    },

    title: {
      fontSize: 17,
      fontWeight: "600",
      color: theme.text,
    },

    subtitle: {
      marginTop: 4,
      fontSize: 13,
      color: theme.textSecondary,
    },
  });
