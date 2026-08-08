import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../../context/SettingsContext";

export default function SubjectHeader({
  title,
  headerIcon,
  theme: subjectTheme,
  onBack,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={22} color={theme.text} />
      </TouchableOpacity>
      <View
        style={[
          styles.banner,
          {
            backgroundColor: subjectTheme.light,
            borderColor: subjectTheme.primary + "25",
          },
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Explore all chapters</Text>
        </View>
        <Image source={headerIcon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 16,
      paddingBottom: 20,
    },

    backButton: {
      width: 44,
      height: 44,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 22,
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
      marginTop: 28,
      marginBottom: 16,
    },

    banner: {
      minHeight: 185,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 24,
      paddingVertical: 24,
      borderRadius: 28,
      borderWidth: 1,
      overflow: "hidden",
    },

    textContainer: {
      flex: 1,
      paddingRight: 16,
    },

    title: {
      fontSize: 26,
      fontWeight: "700",
      color: "#000",
      marginBottom: 8,
    },

    subtitle: {
      fontSize: 16,
      lineHeight: 24,
      color: "#011",
    },

    icon: {
      width: 120,
      height: 120,
      opacity: 0.95,
    },
  });
