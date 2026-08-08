import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function VariableRow({ symbol, meaning, theme: subjectTheme }) {
  const { theme } = useSettings();

  const styles = getStyles(theme);

  return (
    <View
      style={[
        styles.row,
        {
          borderColor: subjectTheme.primary + "15",
        },
      ]}
    >
      <View
        style={[
          styles.symbolContainer,
          {
            backgroundColor: subjectTheme.light,
          },
        ]}
      >
        <Text
          style={[
            styles.symbol,
            {
              color: subjectTheme.primary,
            },
          ]}
        >
          {symbol}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.meaning}>{meaning}</Text>

        <Text style={styles.subtitle}>Represents {meaning.toLowerCase()}</Text>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.surface,
      marginHorizontal: 20,
      marginBottom: 14,
      padding: 16,
      borderRadius: 18,
      borderWidth: 1,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.03,
      shadowRadius: 8,
      elevation: 2,
    },

    symbolContainer: {
      width: 64,
      height: 64,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      marginRight: 16,
    },

    symbol: {
      fontSize: 28,
      fontWeight: "800",
    },

    content: {
      flex: 1,
    },

    meaning: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    subtitle: {
      marginTop: 4,
      fontSize: 14,
      lineHeight: 22,
      color: theme.textSecondary,
    },
  });
