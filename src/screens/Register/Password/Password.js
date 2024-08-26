import React, {useState} from "react";
import {
  Alert,
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
import axios from "axios";

export default function Password({route, navigation}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isSixCharacters = password.length >= 6;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const passwordsMatch =
    password === confirmPassword &&
    password.length > 0 &&
    confirmPassword.length > 0;

  const token = route.params?.token;

  const handlePasswordSubmit = async () => {
    if (!passwordsMatch) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://147.182.221.195:3000/auth/check-password",
        {
          password,
          confirmPassword,
          token
        }
      );

      if (response.status === 200) {
        navigation.navigate("PersonID", {token});
      } else {
        Alert.alert("Error", "Failed to set password. Please try again.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../../assets/logoVoltgo.png")}
        />
        <View style={styles.info}>
          <Text style={styles.infoText} allowFontScaling={false}>
            Adım 2: Lütfen hesabınıza giriş yapmak için bir şifre belirleyiniz.
          </Text>
        </View>
        <View style={styles.passwordContainer}>
          <View>
            <Text style={styles.passwordText} allowFontScaling={false}>
              Şifre
            </Text>
            <TextInput
              placeholder="En az 6 karakterli bir şifre giriniz"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.row}>
            <Text
              style={[
                styles.notificationText,
                {
                  color: hasNumber ? "#63b32e" : "red"
                }
              ]}
              allowFontScaling={false}
            >
              En az bir sayı
            </Text>
            <Text
              style={[
                styles.notificationText,
                {
                  color: hasUpperCase ? "#63b32e" : "red"
                }
              ]}
              allowFontScaling={false}
            >
              En az bir büyük harf
            </Text>
            <Text
              style={[
                styles.notificationText,
                {
                  color: isSixCharacters ? "#63b32e" : "red"
                }
              ]}
              allowFontScaling={false}
            >
              En az 6 karakter
            </Text>
            </View>
          </View>
          <View>
            <Text style={styles.passwordText} allowFontScaling={false}>
              Şifre Tekrarı
            </Text>
            <TextInput
              placeholder="Lütfen şifrenizi tekrar giriniz"
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <Text
              style={[
                styles.notificationText,
                {color: passwordsMatch ? "#63b32e" : "red"}
              ]}
            >
              {passwordsMatch ? "Şifreler uyuşuyor" : "Şifreler uyuşmuyor"}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {backgroundColor: passwordsMatch ? "#63b32e" : "#a0a0a0"}
            ]}
            onPress={handlePasswordSubmit}
            disabled={
              !isSixCharacters || !hasNumber || !hasUpperCase || !passwordsMatch
            }
          >
            <Text style={styles.buttonText} allowFontScaling={false}>
              İleri
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
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.17,
    alignSelf: "center"
  },
  info: {
    flex: 1,
    width: PhoneWidth,
    height: PhoneHeight * 0.1
  },
  infoText: {
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
  passwordContainer: {
    alignItems: "center",
    height: PhoneHeight * 0.4
  },
  passwordText: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 10,
    width: PhoneWidth * 0.9,
    marginTop: 15
  },
  input: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.066,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 15,
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#000000"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: PhoneWidth * 0.9,
    paddingHorizontal: 10,
    marginTop: 10
  },
  notificationText: {
    color: "#ffffff",
    fontSize: 12,
    marginVertical: 15,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  buttonContainer: {
    width: PhoneWidth * 0.4,
    height: PhoneHeight * 0.06,
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "#ffffff",
    fontSize: 20
  }
});
