import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setToken} from "../../index";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../constans/config";
import ApiManager from "../../api/ApiManager";

export default function Login({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isButtonEnabled = phoneNumber.length === 10 && password.length >= 6;

  const handleLogin = async () => {
    try {
      const response = await ApiManager.post(
        "http://147.182.221.195:3000/auth/login",
        {
          phoneNumber: `+90${phoneNumber}`,
          password
        }
      );
      if (response.status === 200 && response.data.token) {
        dispatch(setToken(response.data.token)); // Token'ı Redux store'una kaydet
        console.log("Logged in Token:", response.data.token); // Konsola yazdır
        navigation.navigate("Station"); // Başarılı giriş sonrası yönlendirme
      } else {
        Alert.alert("Hata", "Giriş başarısız");
      }
    } catch (error) {
      Alert.alert("Hata", error.message || "Bir hata oluştu.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
          <Text style={styles.text} allowFontScaling={false}>
            Şifre
          </Text>
          <TextInput
            placeholder="Şifre"
            style={styles.input}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isButtonEnabled ? "#63b32e" : "#a0a0a0"}
            ]}
            onPress={isButtonEnabled ? handleLogin : null}
            disabled={!isButtonEnabled}
          >
            <Text style={styles.buttonText} allowFontScaling={false}>
              Giriş Yap
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
