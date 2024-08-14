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
import {PhoneHeight, PhoneWidth} from "../../constans/config";

export default function StationDetail({route}) {
  const {name, image, distance} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff"
  },
  distance: {
    fontSize: 18,
    color: "#ffffff"
  }
});
