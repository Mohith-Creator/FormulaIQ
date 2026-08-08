import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import SearchBar from "./SearchBar";
// import SearchIllustration from "../../illustrations/SearchIllustration";

export default function SearchHero({ value, onChangeText, onClear, autoFocus }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.content}>
          <Text style={styles.title}>Search formulas</Text>
          <Text style={styles.subtitle}>Find any formula instantly</Text>
        </View>

        <Image
          source={require("../../../assets/search-hero.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* <SearchIllustration width={135} height={135} /> */}
      </View>
      <SearchBar
        value={value}
        onChangeText={onChangeText}
        onClear={onClear}
        autoFocus={autoFocus}
      />
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      paddingBottom: 18,
      backgroundColor: theme.background,
      marginTop: 35,
    },

    hero: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 24,
      marginBottom: 6,
    },

    content: {
      flex: 1,
      paddingRight: 10,
    },

    title: {
      fontSize: 28,
      fontWeight: "800",
      color: theme.text,
      letterSpacing: -0.5,
      lineHeight: 32,
    },

    subtitle: {
      marginTop: 6,
      fontSize: 14.8,
      fontWeight: "500",
      color: theme.textSecondary,
      lineHeight: 23,
    },

    image: {
      width: 125,
      height: 125,
    },
  });
