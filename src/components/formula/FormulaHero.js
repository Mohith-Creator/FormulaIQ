import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function FormulaHero({ formula, theme: subjectTheme, onBack }) {
  const { theme } = useSettings();

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.backButton}
          onPress={onBack}
        >
          <Ionicons name="arrow-back" size={20} color={theme.text} />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={2}>
              {formula.title}
            </Text>

            <View
              style={[
                styles.categoryChip,
                {
                  backgroundColor: subjectTheme.light,
                },
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  {
                    color: subjectTheme.primary,
                  },
                ]}
              >
                {formula.category}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 22,
      paddingBottom: 20,
    },

    headerRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: 28,
    },

    backButton: {
      width: 48,
      height: 48,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
      backgroundColor: theme.surface,
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
      marginRight: 16,
    },

    content: {
      flex: 1,
    },

    titleRow: {
      flexDirection: "row",
      alignItems: "flex-start",
    },

    title: {
      flex: 1,
      fontSize: 26,
      fontWeight: "800",
      color: theme.text,
      lineHeight: 32,
      letterSpacing: -0.4,
      marginTop: 5,
      marginRight: 10,
    },

    categoryChip: {
      alignSelf: "flex-start",
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 999,
      marginTop: 7,
      marginRight: 8,
    },

    categoryText: {
      fontSize: 11,
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: 0.6,
    },
  });
