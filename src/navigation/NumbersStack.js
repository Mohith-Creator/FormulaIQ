import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NumbersScreen from "../screens/UsefulNumbers/NumbersScreen";

import SquaresScreen from "../screens/UsefulNumbers/SquaresScreen";
import CubesScreen from "../screens/UsefulNumbers/CubesScreen";
import PrimeNumbersScreen from "../screens/UsefulNumbers/PrimeNumbersScreen";
import StandardAnglesScreen from "../screens/UsefulNumbers/StandardAnglesScreen";
import TrigonometricValuesScreen from "../screens/UsefulNumbers/TrigonometricValuesScreen";

const Stack = createNativeStackNavigator();

export default function NumbersStack() {
  return (
    <Stack.Navigator
      initialRouteName="Numbers"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: {
          backgroundColor: "#F8FAFC",
        },
      }}
    >
      <Stack.Screen name="Numbers" component={NumbersScreen} />
      <Stack.Screen name="Squares" component={SquaresScreen} />
      <Stack.Screen name="Cubes" component={CubesScreen} />
      <Stack.Screen name="PrimeNumbers" component={PrimeNumbersScreen} />
      <Stack.Screen name="StandardAngles" component={StandardAnglesScreen} />
      <Stack.Screen
        name="TrigonometricValues"
        component={TrigonometricValuesScreen}
      />
    </Stack.Navigator>
  );
}
