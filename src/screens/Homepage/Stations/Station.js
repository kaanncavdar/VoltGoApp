import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../../constans/config";

export default function Station({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/*Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Şarj istasyonu ara" style={styles.searchBar} />
      </View>
      {/*AC Stations */}
      <View style={styles.StationsContainer}>
        <Text style={styles.headerText}>AC İstasyonları</Text>
      </View>
      {/*DC Stations */}
      <View style={styles.StationsContainer}>
        <Text style={styles.headerText}>DC İstasyonları</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  searchBarContainer: {
    alignSelf: "center",
    width: PhoneWidth * 0.95,
    height: PhoneHeight * 0.135
  },
  searchBar: {
    width: PhoneWidth * 0.95,
    height: PhoneHeight * 0.075,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#000000"
  },
  StationsContainer: {
    flex: 1,
    alignSelf: "center",
    width: PhoneWidth * 0.95,
    height: PhoneHeight * 0.2
  },
  headerText: {
    color: "#ffffff",
    fontSize: 25
  }
});
