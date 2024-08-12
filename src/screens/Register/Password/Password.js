// Koşulların sağlandığını gösteren css'ler hariç fonskiyon çalışıyor
//İlk halinde iki inputta bos olduğu için şifreler uyuşuyor yazısı çıkıyor bu yüzden underline yaptığımda yeşil gözüküyor onu kontrol et
//tekrar bak buraya önemli
import React, {useState} from "react";
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

export default function Password({navigation}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isSixCharacters = password.length >= 6;
  const nullPassword = password.length === 0;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const passwordsMatch =
    password === confirmPassword &&
    password.length > 0 &&
    confirmPassword.length > 0;

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
              <View>
                <Text style={styles.notificationText} allowFontScaling={false}>
                  En az bir sayı
                </Text>
                <View
                  style={[
                    styles.underline,
                    {backgroundColor: passwordsMatch ? "#63b32e" : "red"}
                  ]}
                />
              </View>
              <View>
                <Text style={styles.notificationText} allowFontScaling={false}>
                  En az bir büyük harf
                </Text>
                <View
                  style={[
                    styles.underline,
                    {backgroundColor: passwordsMatch ? "#63b32e" : "red"}
                  ]}
                />
              </View>
              <View>
                <Text style={styles.notificationText} allowFontScaling={false}>
                  En az 6 karakter
                </Text>
                <View
                  style={[
                    styles.underline,
                    {backgroundColor: passwordsMatch ? "#63b32e" : "red"}
                  ]}
                />
              </View>
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
          </View>
          <View>
            <Text style={styles.notificationText} allowFontScaling={false}>
              {passwordsMatch ? "Şifreler uyuşuyor" : "Şifreler uyuşmuyor"}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PersonID")}
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
    fontSize: 16.5,
    marginVertical: 15,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  buttonContainer: {
    width: PhoneWidth * 0.4,
    height: PhoneHeight * 0.06,
    backgroundColor: "#63b32e",
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
