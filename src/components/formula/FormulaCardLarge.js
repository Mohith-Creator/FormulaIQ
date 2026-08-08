import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import ShapeIllustration from "../common/ShapeIllustration";
import ChapterIllustration from "../common/ChapterIllustration";

export default function FormulaCardLarge({
  formula,
  chapter,
  theme: subjectTheme,
}) {
  const { theme } = useSettings();

  const styles = getStyles(theme);

  const hasShape = formula.shape && formula.shapeName;

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: subjectTheme.primary + "15",
        },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.info}>
          <Text
            style={[
              styles.label,
              {
                color: subjectTheme.primary,
              },
            ]}
          >
            {hasShape ? "SHAPE" : "CHAPTER"}
          </Text>

          <Text style={styles.title}>
            {hasShape ? formula.shapeName : chapter.title}
          </Text>
        </View>

        {hasShape ? (
          <ShapeIllustration
            shape={formula.shape}
            size={96}
            color={subjectTheme.primary}
          />
        ) : (
          <ChapterIllustration
            chapter={chapter.illustration}
            size={96}
            color={subjectTheme.primary}
          />
        )}
      </View>

      <View style={styles.divider} />

      <View
        style={[
          styles.formulaContainer,
          {
            backgroundColor: subjectTheme.light,
          },
        ]}
      >
        <Text style={styles.formula}>{formula.formula}</Text>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.surface,
      marginHorizontal: 20,
      marginBottom: 24,
      borderRadius: 24,
      borderWidth: 1,
      padding: 24,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: theme.dark ? 0.18 : 0.04,
      shadowRadius: 12,
      elevation: 3,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    info: {
      flex: 1,
      paddingRight: 16,
    },

    label: {
      fontSize: 12,
      fontWeight: "700",
      letterSpacing: 1,
      marginBottom: 8,
    },

    title: {
      fontSize: 26,
      fontWeight: "800",
      color: theme.text,
      lineHeight: 32,
    },

    divider: {
      height: 1,
      backgroundColor: theme.border,
      marginVertical: 22,
    },

    formulaContainer: {
      alignSelf: "stretch",
      paddingVertical: 18,
      paddingHorizontal: 16,
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },

    formula: {
      fontSize: 26,
      fontWeight: "700",
      color: "#000",
      textAlign: "center",
      lineHeight: 36,
    },
  });
