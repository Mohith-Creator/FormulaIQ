import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import Header from "../../components/home/Header";
import SearchBar from "../../components/home/SearchBar";
import SubjectsList from "../../components/home/SubjectsList";

export default function HomeScreen({ navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const handleSubjectPress = (subject) => {
    navigation.navigate("Subject", { subject });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header />
        <SearchBar onPress={() => navigation.navigate("Search")} />
        <SubjectsList onSubjectPress={handleSubjectPress} />
      </ScrollView>
    </SafeAreaView>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    content: {
      paddingHorizontal: 24,
      paddingTop: 12,
      paddingBottom: 90,
    },
  });
