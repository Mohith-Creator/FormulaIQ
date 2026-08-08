import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import ReferenceHeader from "../../components/numbers/ReferenceHeader";
import TrigTable from "../../components/numbers/TrigTable";

import referenceService from "../../services/referenceService";

export default function TrigonometricValuesScreen({ navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const values = referenceService.getTrigonometricValues();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ReferenceHeader
          title="Trigonometric Values"
          subtitle="Standard trigonometric ratios"
          onBack={() => navigation.goBack()}
        />
        <TrigTable data={values} />
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
      paddingBottom: 100,
    },
  });
