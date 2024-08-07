import * as React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  FirstScreen,
  Login,
  Home,
  NewUser,
  Password,
  PersonID,
  Choose,
  Tckn
} from "./src";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTintColor: "#ffffff",
              headerStyle: {backgroundColor: "#000000"},
              headerTitle: ""
            }}
          />
          <Stack.Screen
            name="NewUser"
            component={NewUser}
            options={{
              headerTintColor: "#ffffff",
              headerStyle: {backgroundColor: "#000000"},
              headerTitle: ""
            }}
          />
          <Stack.Screen
            name="Password"
            component={Password}
            options={{
              headerTintColor: "#ffffff",
              headerStyle: {backgroundColor: "#000000"},
              headerTitle: ""
            }}
          />
          <Stack.Screen
            name="PersonID"
            component={PersonID}
            options={{
              headerTintColor: "#ffffff",
              headerStyle: {backgroundColor: "#000000"},
              headerTitle: ""
            }}
          />
          <Stack.Screen
            name="Choose"
            component={Choose}
            options={{
              headerTintColor: "#ffffff",
              headerStyle: {backgroundColor: "#000000"},
              headerTitle: ""
            }}
          />
          <Stack.Screen
            name="Tckn"
            component={Tckn}
            options={{
              headerTintColor: "#ffffff",
              headerStyle: {backgroundColor: "#000000"},
              headerTitle: ""
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTintColor: "#ffffff",
              headerStyle: {backgroundColor: "#000000"},
              headerTitle: "Deneme sayfası"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
