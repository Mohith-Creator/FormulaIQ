import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function DescriptionCard({ description, theme: subjectTheme }) {
  const { theme } = useSettings();

  const styles = getStyles(theme);

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: subjectTheme.primary + "15",
        },
      ]}
    >
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.surface,
      marginHorizontal: 20,
      marginBottom: 22,
      padding: 18,
      borderRadius: 18,
      borderWidth: 1,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.03,
      shadowRadius: 8,
      elevation: 2,
    },

    description: {
      fontSize: 16,
      lineHeight: 30,
      color: theme.textSecondary,
    },
  });
