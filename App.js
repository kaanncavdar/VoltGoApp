import * as React from "react";
import {Provider} from "react-redux";
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
  Individual,
  CreditCard,
  Deneme,
  Corporate,
  StationDetail,
  store
} from "./src/index";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
              name="Individual"
              component={Individual}
              options={{
                headerTintColor: "#ffffff",
                headerStyle: {backgroundColor: "#000000"},
                headerTitle: ""
              }}
            />
            <Stack.Screen
              name="Corporate"
              component={Corporate}
              options={{
                headerTintColor: "#ffffff",
                headerStyle: {backgroundColor: "#000000"},
                headerTitle: ""
              }}
            />
            <Stack.Screen
              name="CreditCard"
              component={CreditCard}
              options={{
                headerTintColor: "#ffffff",
                headerStyle: {backgroundColor: "#000000"},
                headerTitle: ""
              }}
            />
            <Stack.Screen
              name="Deneme"
              component={Deneme}
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
            <Stack.Screen
              name="Station"
              component={BottomTabNavigator}
              options={{
                headerTintColor: "#ffffff",
                headerStyle: {backgroundColor: "#000000"},
                headerTitle: "",
                headerLeft: () => null
              }}
            />
            <Stack.Screen
              name="StationDetail"
              component={StationDetail} // Add StationDetail here
              options={{
                headerTintColor: "#ffffff",
                headerStyle: {backgroundColor: "#000000"},
                headerTitle: "Station Detail"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
