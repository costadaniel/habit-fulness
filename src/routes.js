import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";

const bottomTabNavigator = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator>
        <bottomTabNavigator.Screen
          name="Home"
          component={Home}
          initialParams={{ name: "Daniel" }}
        />
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};
