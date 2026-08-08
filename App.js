import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { SettingsProvider } from "./src/context/SettingsContext";

import SplashScreen from "./src/screens/Splash/SplashScreen";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <StatusBar style="dark" />
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <SettingsProvider>
          <AppNavigator />
        </SettingsProvider>
      )}
    </>
  );
}
