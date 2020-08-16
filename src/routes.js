import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TimerScreen from "./screens/TimerScreen";

const bottomTabNavigator = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator>
        <bottomTabNavigator.Screen name="Timer" component={TimerScreen} />
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};
