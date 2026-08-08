import React from "react";
import { SafeAreaView, FlatList, StyleSheet, View, Text } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import ReferenceHeader from "../../components/numbers/ReferenceHeader";
import ConversionCard from "../../components/numbers/ConversionCard";
import AngleRow from "../../components/numbers/AngleRow";

import referenceService from "../../services/referenceService";

export default function StandardAnglesScreen({ navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  const angles = referenceService.getStandardAngles();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={angles}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            <ReferenceHeader
              title="Standard Angles"
              subtitle="Common trigonometric angles"
              onBack={() => navigation.goBack()}
            />
            <ConversionCard />
            <View style={styles.tableHeader}>
              <Text style={styles.headerText}>Degree</Text>
              <Text style={styles.headerText}>Radian</Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <AngleRow degree={item.degree} radian={item.radian} />
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

    tableHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginBottom: 12,
      paddingHorizontal: 18,
    },

    headerText: {
      fontSize: 15,
      fontWeight: "700",
      color: theme.textSecondary,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
  });
