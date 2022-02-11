import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigator from "../BottomNavigator";
import Header from "../components/Header/Header";
import { CreateEvent } from "../../screens";

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "home":
      return "SIIR";
    case "categories":
      return "Categories";
    case "post":
      return "Post";
    case "collections":
      return "Collections";
    case "profile":
      return "Profile";
  }
}

const AppNavigator = (props) => {
  console.log(props);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="partyfyd"
        options={{ headerShown: false }}
        component={BottomNavigator}
      />

      <Stack.Screen
        name="createEvent"
        options={{
          title: "Create Event"
        }}
        component={CreateEvent}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
