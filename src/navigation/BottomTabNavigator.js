import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Station, Home, Profile, Help, Notifications} from "../index";
import {PhoneHeight} from "../constans/config";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#000000",
        borderTopColor: "#000000",
        height: PhoneHeight * 0.1,
        display: route.name === "Stations" ? "flex" : "none" // Yalnızca 'Stations' ekranında görünür
      },
      tabBarLabelStyle: {
        fontSize: 0 // İsimlerin gözükmemesi için 0 yapıyoruz
      },
      tabBarIcon: ({color, size}) => {
        let iconName;
        switch (route.name) {
          case "Stations":
            iconName = "home"; // Ev ikonu
            return <Icon name={iconName} size={size * 1.5} color="#ffffff" />;
          case "Help":
            iconName = "headset"; // Kulaklık ikonu
            return <Icon name={iconName} size={size * 1.5} color="#ffffff" />;
          case "Home":
            return (
              <Image
                source={require("../assets/voltgoIcon.png")} // Resim yolu
                style={{
                  width: size * 3,
                  height: size * 3
                }} // Resmi büyütmek için size * 1.5
              />
            );
          case "Notifications":
            iconName = "notifications"; // Çan ikonu
            return <Icon name={iconName} size={size * 1.5} color="#ffffff" />;
          case "Profile":
            iconName = "person"; // Kişi ikonu
            return <Icon name={iconName} size={size * 1.5} color="#ffffff" />;
          default:
            return null;
        }
      },
      tabBarActiveTintColor: "#ffffff", // Aktif sekme rengi
      tabBarInactiveTintColor: "#888888" // Pasif sekme rengi
    })}
  >
    <Tab.Screen name="Stations" component={Station} />
    <Tab.Screen name="Help" component={Help} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={BottomTabNavigator}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="StationScreen"
      component={Station}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="HelpScreen"
      component={Help}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="HomeScreen"
      component={Home}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="NotificationsScreen"
      component={Notifications}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ProfileScreen"
      component={Profile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppNavigator;
