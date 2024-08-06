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
import {PhoneHeight, PhoneWidth} from "../constans/config";

export default function FirstScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logoVoltgo.png")}
      />
      {/* <Login /> */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.loginContainer}>
          <Text style={styles.logInText1} allowFontScaling={false}>
            Giriş Yapmak İstiyorum _____________________________
          </Text>
          <Text style={styles.logInText2} allowFontScaling={false}>
            Aktif hesabım var.
          </Text>
        </View>
      </TouchableOpacity>

      {/* <newUser /> */}
      <TouchableOpacity onPress={() => navigation.navigate("NewUser")}>
        <View style={styles.signUpContainer}>
          <Text style={styles.singUpText1} allowFontScaling={false}>
            Üye Olmak İstiyorum _____________________________
          </Text>
          <Text style={styles.singUpText2} allowFontScaling={false}>
            Aktif hesabım yok.
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.guestContainer}>
        <Text style={styles.guestText1} allowFontScaling={false}>
          Misafir Girişi _____________________________
        </Text>
        <Text style={styles.guestText2} allowFontScaling={false}>
          İncelemek istiyorum.
        </Text>
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
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.3,
    alignSelf: "center"
  },
  loginContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#63b32e",
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.12,
    marginTop: PhoneHeight * 0.02,
    marginBottom: PhoneHeight * 0.02
  },
  logInText1: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.013,
    fontWeight: "bold"
  },
  logInText2: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.004
  },
  signUpContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#163A84",
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.12,
    marginTop: PhoneHeight * 0.02,
    marginBottom: PhoneHeight * 0.02
  },
  singUpText1: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.013,
    fontWeight: "bold"
  },
  singUpText2: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.004
  },
  guestContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#fff",
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.12,
    marginTop: PhoneHeight * 0.02,
    marginBottom: PhoneHeight * 0.02
  },
  guestText1: {
    color: "#163A84",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.013,
    fontWeight: "bold"
  },
  guestText2: {
    color: "#163A84",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.004
  }
});
