import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home/HomeScreen";
import SubjectScreen from "../screens/Subject/SubjectScreen";
import FormulaListScreen from "../screens/FormulaList/FormulaListScreen";
import FormulaDetailScreen from "../screens/FormulaDetail/FormulaDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#F8FAFC" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Subject" component={SubjectScreen} />
      <Stack.Screen name="FormulaList" component={FormulaListScreen} />
      <Stack.Screen name="FormulaDetails" component={FormulaDetailScreen} />
    </Stack.Navigator>
  );
}
