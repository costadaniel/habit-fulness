import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TimerScreen from "./screens/TimerScreen";
import HomeScreen from "./screens/HomeScreen";

const bottomTabNavigator = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <bottomTabNavigator.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#666",
          tabStyle: {
            backgroundColor: "#000000",
          },
          labelPosition: "beside-icon",
          labelStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          style: {
            borderTopWidth: 0,
          },
        }}
      >
        <bottomTabNavigator.Screen name="Timer" component={TimerScreen} />
        <bottomTabNavigator.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ name: "Tester" }}
        />
      </bottomTabNavigator.Navigator>
    </NavigationContainer>
  );
};
