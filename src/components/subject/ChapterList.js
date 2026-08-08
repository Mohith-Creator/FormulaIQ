import React from "react";
import { View, StyleSheet } from "react-native";

import ChapterCard from "./ChapterCard";

import formulaService from "../../services/formulaService";

export default function ChapterList({
  subjectId,
  chapters,
  theme,
  onChapterPress,
}) {
  return (
    <View style={styles.container}>
      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          number={chapter.number}
          title={chapter.title}
          formulaCount={formulaService.getChapterFormulaCount(
            subjectId,
            chapter.id,
          )}
          theme={theme}
          onPress={() => onChapterPress(chapter)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
});
