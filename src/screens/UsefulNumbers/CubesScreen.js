import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import ReferenceHeader from "../../components/numbers/ReferenceHeader";
import NumberRow from "../../components/numbers/NumberRow";

import referenceService from "../../services/referenceService";

export default function CubesScreen({ navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const cubes = referenceService.getCubes();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cubes}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <ReferenceHeader
            title="Cubes"
            subtitle="Perfect cubes from 1 to 100"
            onBack={() => navigation.goBack()}
          />
        }
        renderItem={({ item }) => (
          <NumberRow left={`${item.number}³`} right={item.value.toString()} />
        )}
      />
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
      paddingBottom: 100,
    },
  });
