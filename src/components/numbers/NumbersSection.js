import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

export default function NumbersSection({
  title,
  subtitle,
  icon,
  image,
  color,
  lightColor,
  children,
}) {
  const { theme } = useSettings();
  const styles = getStyles(theme);
  const Icon = icon;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: lightColor,
            },
          ]}
        >
          {image ? (
            <Image source={image} style={styles.image} resizeMode="contain" />
          ) : (
            Icon && <Icon width={30} height={30} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 26,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      marginBottom: 14,
    },

    iconContainer: {
      width: 48,
      height: 48,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
      marginRight: 14,
    },

    image: {
      width: 34,
      height: 34,
    },

    textContainer: {
      flex: 1,
    },

    title: {
      fontSize: 18,
      fontWeight: "800",
      color: theme.text,
      marginBottom: 4,
    },

    subtitle: {
      fontSize: 14,
      lineHeight: 22,
      color: theme.textSecondary,
    },

    content: {
      paddingHorizontal: 20,
    },
  });
