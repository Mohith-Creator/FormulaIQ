import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function FormulaCard({ formula, theme: subjectTheme, onPress }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const hasShape = formula.shape && formula.shapeName;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.card,
        {
          borderColor: subjectTheme.primary + "20",
        },
      ]}
      onPress={onPress}
    >
      {hasShape ? (
        <>
          <View style={styles.header}>
            <View style={styles.titleRow}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: subjectTheme.light,
                  },
                ]}
              >
                <Ionicons
                  name="calculator-outline"
                  size={22}
                  color={subjectTheme.primary}
                />
              </View>

              <View style={styles.titleContent}>
                <View
                  style={[
                    styles.category,
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

                <Text numberOfLines={2} style={styles.title}>
                  {formula.title}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.formulaContainer}>
            <Text numberOfLines={1} style={styles.formula}>
              {formula.formula}
            </Text>
          </View>
        </>
      ) : (
        <View style={styles.simpleRow}>
          <View
            style={[
              styles.accent,
              {
                backgroundColor: subjectTheme.primary,
              },
            ]}
          />

          <View style={styles.simpleContent}>
            <Text style={styles.simpleTitle}>{formula.title}</Text>

            <Text
              numberOfLines={2}
              style={[
                styles.simpleFormula,
                {
                  color: subjectTheme.primary,
                },
              ]}
            >
              {formula.formula}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.surface,
      borderWidth: 1,
      borderRadius: 20,
      padding: 16,
      marginBottom: 16,

      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: theme.dark ? 0.16 : 0.06,
      shadowRadius: 10,

      elevation: 3,
    },

    header: {
      marginBottom: 16,
    },

    titleRow: {
      flexDirection: "row",
      alignItems: "flex-start",
    },

    iconContainer: {
      width: 46,
      height: 46,
      borderRadius: 14,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 14,
    },

    titleContent: {
      flex: 1,
    },

    category: {
      alignSelf: "flex-start",
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 999,
      marginBottom: 8,
    },

    categoryText: {
      fontSize: 11,
      fontWeight: "700",
      letterSpacing: 0.3,
      textTransform: "uppercase",
    },

    title: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
      lineHeight: 25,
    },

    formulaContainer: {
      backgroundColor: theme.cardBackground,
      borderRadius: 14,
      paddingVertical: 14,
      paddingHorizontal: 16,
      alignItems: "center",
    },

    formula: {
      fontSize: 20,
      fontWeight: "700",
      color: theme.text,
    },

    simpleRow: {
      flexDirection: "row",
      alignItems: "center",
    },

    accent: {
      width: 5,
      alignSelf: "stretch",
      borderRadius: 99,
      marginRight: 16,
    },

    simpleContent: {
      flex: 1,
    },

    simpleTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
      marginBottom: 8,
    },

    simpleFormula: {
      fontSize: 22,
      fontWeight: "700",
      lineHeight: 30,
    },
  });
