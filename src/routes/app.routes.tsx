import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";

import Welcome from "../pages/Welcome";
import Form from "../pages/Form";
import BoardingPass from "../pages/BoardingPass";

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="BoardingPass" component={BoardingPass} />
    </Stack.Navigator>
  );
}
