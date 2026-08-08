import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function SearchResultCard({ result, onPress, isLast = false }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const { subject, chapter } = result;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[styles.container, isLast && styles.last]}
      onPress={onPress}
    >
      <View
        style={[
          styles.indicator,
          {
            backgroundColor: subject.theme.primary,
          },
        ]}
      />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text
            style={[
              styles.subject,
              {
                color: subject.theme.primary,
              },
            ]}
          >
            {subject.title}
          </Text>
          <View
            style={[
              styles.chapterChip,
              {
                backgroundColor: subject.theme.light,
              },
            ]}
          >
            <Text
              style={[
                styles.chapter,
                {
                  color: subject.theme.primary,
                },
              ]}
            >
              {chapter.title}
            </Text>
          </View>
        </View>
        <Text numberOfLines={1} style={styles.title}>
          {result.title}
        </Text>
        <Text numberOfLines={1} style={styles.formula}>
          {result.formula}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={theme.textSecondary} />
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 16,
      backgroundColor: theme.surface,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.border,
    },

    last: {
      borderBottomWidth: 0,
    },

    indicator: {
      width: 4,
      height: 54,
      borderRadius: 999,
      marginRight: 16,
    },

    content: {
      flex: 1,
    },

    topRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 6,
    },

    subject: {
      fontSize: 12,
      fontWeight: "700",
    },

    chapterChip: {
      marginLeft: 10,
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },

    chapter: {
      fontSize: 11,
      fontWeight: "700",
    },

    title: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    formula: {
      marginTop: 4,
      fontSize: 15,
      color: theme.textSecondary,
    },
  });
