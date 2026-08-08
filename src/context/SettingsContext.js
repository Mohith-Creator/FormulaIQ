import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import lightTheme from "../constants/lightTheme";
import darkTheme from "../constants/darkTheme";

const STORAGE_KEY = "@formulaiq_settings";

const DEFAULT_SETTINGS = {
  theme: "light",
  haptics: true,
  notifications: true,
};

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);

      if (json) {
        const saved = JSON.parse(json);

        setSettings({
          ...DEFAULT_SETTINGS,
          ...saved,
        });
      }
    } catch (error) {
      console.log("Failed to load settings", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      saveSettings();
    }
  }, [settings]);

  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.log("Failed to save settings", error);
    }
  };

  const setTheme = (theme) => {
    setSettings((prev) => ({
      ...prev,
      theme,
    }));
  };

  const toggleTheme = () => {
    setTheme(settings.theme === "light" ? "dark" : "light");
  };

  const setHaptics = (enabled) => {
    setSettings((prev) => ({
      ...prev,
      haptics: enabled,
    }));
  };

  const setNotifications = (enabled) => {
    setSettings((prev) => ({
      ...prev,
      notifications: enabled,
    }));
  };

  const theme = useMemo(
    () => (settings.theme === "dark" ? darkTheme : lightTheme),
    [settings.theme],
  );

  if (loading) {
    return null;
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,

        theme,

        isDark: settings.theme === "dark",

        toggleTheme,
        setTheme,

        setHaptics,
        setNotifications,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
