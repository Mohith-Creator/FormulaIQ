import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { useSettings } from "../../context/SettingsContext";

import SettingsHeader from "../../components/settings/SettingsHeader";
import SettingsSection from "../../components/settings/SettingsSection";
import SettingsRow from "../../components/settings/SettingsRow";
import SettingsSwitch from "../../components/settings/SettingsSwitch";
import SettingsFooter from "../../components/settings/SettingsFooter";

export default function SettingsScreen() {
  const { theme, isDark, toggleTheme } = useSettings();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <SettingsHeader />

        {/* Appearance */}
        <SettingsSection
          title="Appearance"
          icon="color-palette-outline"
          color="#8B5CF6"
          light="#EDE9FE"
        />
        <SettingsSwitch
          title="Dark Mode"
          subtitle="Switch between light and dark mode"
          icon="moon-outline"
          color="#6366F1"
          light="#E0E7FF"
          value={isDark}
          onValueChange={toggleTheme}
        />

        {/* Learning */}
        <SettingsSection
          title="Learning"
          icon="school-outline"
          color="#2563EB"
          light="#DBEAFE"
        />
        <SettingsRow
          title="Favorites"
          subtitle="Saved formulas"
          icon="heart-outline"
          color="#EF4444"
          light="#FEE2E2"
          onPress={() => {}}
        />
        <SettingsRow
          title="Recently Viewed"
          subtitle="Your learning history"
          icon="time-outline"
          color="#06B6D4"
          light="#CFFAFE"
          isLast
          onPress={() => {}}
        />

        {/* General */}
        <SettingsSection title="General" icon="settings-outline" />
        <SettingsRow
          title="Rate FormulaIQ"
          subtitle="Leave us a review"
          icon="star-outline"
          color="#F59E0B"
          light="#FEF3C7"
          onPress={() => {}}
        />
        <SettingsRow
          title="Share FormulaIQ"
          subtitle="Invite your friends"
          icon="share-social-outline"
          color="#10B981"
          light="#D1FAE5"
          onPress={() => {}}
        />
        <SettingsRow
          title="Send Feedback"
          subtitle="Help us improve"
          icon="mail-outline"
          color="#2563EB"
          light="#DBEAFE"
          isLast
          onPress={() => {}}
        />

        {/* About */}
        <SettingsSection
          title="About"
          icon="information-circle-outline"
          color="#F97316"
          light="#FFEDD5"
        />
        <SettingsRow
          title="Privacy Policy"
          subtitle="How your data is handled"
          icon="shield-checkmark-outline"
          color="#10B981"
          light="#D1FAE5"
          onPress={() => {}}
        />
        <SettingsRow
          title="Terms & Conditions"
          subtitle="Read our terms"
          icon="document-text-outline"
          color="#2563EB"
          light="#DBEAFE"
          onPress={() => {}}
        />
        <SettingsRow
          title="About FormulaIQ"
          subtitle="Version & Credits"
          icon="information-circle-outline"
          color="#6366F1"
          light="#E0E7FF"
          isLast
          onPress={() => {}}
        />
        <SettingsFooter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingBottom: 90,
  },
});
