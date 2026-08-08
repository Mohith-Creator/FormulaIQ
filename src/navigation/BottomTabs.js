import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { useSettings } from "../context/SettingsContext";

import HomeStack from "./HomeStack";
import NumbersStack from "./NumbersStack";

import SearchScreen from "../screens/Search/SearchScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Home: {
    active: "home",
    inactive: "home-outline",
  },
  Search: {
    active: "search",
    inactive: "search-outline",
  },
  Numbers: {
    active: "calculator",
    inactive: "calculator-outline",
  },
  Settings: {
    active: "settings",
    inactive: "settings-outline",
  },
};

function CustomTabBar({ state, navigation }) {
  const { theme } = useSettings();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const icon = focused
          ? TAB_ICONS[route.name].active
          : TAB_ICONS[route.name].inactive;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable key={route.key} style={styles.tab} onPress={onPress}>
            <Ionicons
              name={icon}
              size={24}
              color={focused ? theme.primary : theme.textSecondary}
            />
            <Text style={[styles.label, focused && styles.activeLabel]}>
              {route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Numbers" component={NumbersStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 30,
      height: 74,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: theme.surface,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: theme.border,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: theme.dark ? 0.24 : 0.12,
      shadowRadius: 16,
      elevation: 10,
    },

    tab: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    label: {
      marginTop: 4,
      fontSize: 12,
      fontWeight: "500",
      color: theme.textSecondary,
    },

    activeLabel: {
      color: theme.primary,
      fontWeight: "700",
    },
  });
