import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";

export function StackNavigator() {
  const Stack = createNativeStackNavigator();
  const auth = useSelector((state: any) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.token ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
