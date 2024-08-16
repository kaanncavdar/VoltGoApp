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

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Logo */}
        <Image
          style={styles.image}
          source={require("../../assets/logoVoltgo.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text} allowFontScaling={false}>
            Telefon Numarası
          </Text>
          <TextInput
            placeholder="(5 - - - - - - - - -)*"
            style={styles.input}
            keyboardType="numeric"
            maxLength={10}
          />
          <Text style={styles.text} allowFontScaling={false}>
            Şifre
          </Text>
          <TextInput placeholder="Şifre" style={styles.input} secureTextEntry />
        </View>
        <View style={styles.loginContainer}>
          {/* Login Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Station")}
          >
            <Text style={styles.buttonText} allowFontScaling={false}>
              Giriş Yap
            </Text>
          </TouchableOpacity>
          {/* New password */}
          <TouchableOpacity
            style={styles.buttonColorless}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.usertext} allowFontScaling={false}>
              Şifremi Unuttum
            </Text>
          </TouchableOpacity>
          {/* Register */}
          <TouchableOpacity
            style={styles.buttonColorless}
            onPress={() => navigation.navigate("NewUser")}
          >
            <Text style={styles.usertext} allowFontScaling={false}>
              Kayıt ol
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    height: PhoneHeight * 0.18,
    alignSelf: "center"
  },
  input: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.08,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#000000"
  },
  textContainer: {
    height: PhoneHeight * 0.325,
    alignItems: "center"
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 10,
    width: PhoneWidth * 0.9
  },
  button: {
    width: PhoneWidth * 0.4,
    height: PhoneHeight * 0.06,
    backgroundColor: "#63b32e",
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttonColorless: {
    width: PhoneWidth * 0.4,
    height: PhoneHeight * 0.06,
    backgroundColor: "#000000",
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "#ffffff",
    fontSize: 20
  },
  loginContainer: {
    height: PhoneHeight * 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  usertext: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});
