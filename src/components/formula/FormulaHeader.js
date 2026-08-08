import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

import ChapterIllustration from "../common/ChapterIllustration";

export default function FormulaHeader({
  chapter,
  subject,
  formulaCount,
  onBack,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={onBack}
      >
        <Ionicons name="arrow-back" size={22} color={theme.text} />
      </TouchableOpacity>

      <View
        style={[
          styles.banner,
          {
            backgroundColor: subject.theme.light,
            borderColor: subject.theme.primary + "20",
          },
        ]}
      >
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {chapter.title}
          </Text>

          <Text numberOfLines={2} style={styles.subtitle}>
            {chapter.subtitle}
          </Text>

          <View style={styles.badge}>
            <Ionicons
              name="document-text-outline"
              size={15}
              color={subject.theme.primary}
            />

            <Text
              style={[
                styles.badgeText,
                {
                  color: subject.theme.primary,
                },
              ]}
            >
              {formulaCount} {formulaCount === 1 ? "Formula" : "Formulas"}
            </Text>
          </View>
        </View>

        <View style={styles.illustration}>
          <ChapterIllustration
            chapter={chapter.illustration}
            size={132}
            color={subject.theme.primary}
          />
        </View>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 24,
    },

    backButton: {
      width: 44,
      height: 44,
      borderRadius: 22,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: theme.surface,
      borderWidth: 1,
      borderColor: theme.border,

      shadowColor: theme.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: theme.dark ? 0.16 : 0.04,
      shadowRadius: 8,

      elevation: 2,

      marginTop: 28,
      marginBottom: 16,
    },

    banner: {
      position: "relative",
      minHeight: 180,

      borderRadius: 28,
      borderWidth: 1,

      paddingHorizontal: 24,
      paddingVertical: 22,

      justifyContent: "center",

      overflow: "hidden",
    },

    content: {
      flex: 1,
      paddingRight: 140,
    },

    title: {
      fontSize: 26,
      fontWeight: "700",
      lineHeight: 32,
      color: "#000",
      marginBottom: 8,
    },

    subtitle: {
      fontSize: 16,
      lineHeight: 24,
      color: "#011",
    },

    badge: {
      alignSelf: "flex-start",

      flexDirection: "row",
      alignItems: "center",

      marginTop: 18,

      paddingHorizontal: 14,
      paddingVertical: 8,

      borderRadius: 999,

      backgroundColor: theme.surface,
    },

    badgeText: {
      marginLeft: 6,
      fontSize: 14,
      fontWeight: "700",
    },

    illustration: {
      position: "absolute",
      right: 8,
      top: 24,

      width: 132,
      height: 132,

      justifyContent: "center",
      alignItems: "center",

      opacity: 0.95,
    },
  });
