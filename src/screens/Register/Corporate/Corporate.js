import react, {useState, useRef} from "react";
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

export default function Corporate({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Logo */}
        <Image
          style={styles.image}
          source={require("../../../assets/logoVoltgo.png")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.17,
    alignSelf: "center"
  }
});
