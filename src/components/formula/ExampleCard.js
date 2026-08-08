import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function ExampleCard({ example, theme: subjectTheme }) {
  const { theme } = useSettings();

  const styles = getStyles(theme);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: subjectTheme.light,
          borderColor: subjectTheme.primary + "12",
        },
      ]}
    >
      <View style={styles.headingRow}>
        <Ionicons
          name="help-circle-outline"
          size={18}
          color={subjectTheme.primary}
        />

        <Text style={styles.heading}>Question</Text>
      </View>

      <Text style={styles.text}>{example.question}</Text>

      <View style={styles.divider} />

      <View style={styles.headingRow}>
        <Ionicons
          name="checkmark-circle-outline"
          size={18}
          color={subjectTheme.primary}
        />

        <Text style={styles.heading}>Solution</Text>
      </View>

      <Text style={styles.solution}>{example.solution}</Text>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      marginHorizontal: 20,
      marginBottom: 24,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
    },

    headingRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },

    heading: {
      marginLeft: 8,
      fontSize: 14,
      fontWeight: "700",
      color: "#000",
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },

    text: {
      fontSize: 16,
      lineHeight: 24,
      color: "#011",
    },

    divider: {
      height: 1,
      backgroundColor: theme.border,
      marginVertical: 16,
    },

    solution: {
      fontSize: 16,
      lineHeight: 28,
      fontWeight: "600",
      color: "#000",
    },
  });
