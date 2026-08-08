import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import SubjectHeader from "../../components/subject/SubjectHeader";
import ChapterList from "../../components/subject/ChapterList";

import { getChapters } from "../../services/chapterService";

export default function SubjectScreen({ navigation, route }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const { subject } = route.params;
  const chapters = getChapters(subject.chaptersFile);

  const handleChapterPress = (chapter) => {
    navigation.navigate("FormulaList", {
      subject,
      chapter,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <SubjectHeader
          title={subject.title}
          headerIcon={subject.headerIcon}
          theme={subject.theme}
          onBack={() => navigation.goBack()}
        />
        <ChapterList
          subjectId={subject.id}
          chapters={chapters}
          theme={subject.theme}
          onChapterPress={handleChapterPress}
        />
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
      paddingBottom: 90,
    },
  });
