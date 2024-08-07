//SMS kontrolü yapmıyoruz
//Telefon numarası zaten varsa hata vermesi gerekiyor ama şu anlık kontrol yok
import React, {useState} from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../constans/config";
import {ScrollView} from "react-native-gesture-handler";

export default function NewUser({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const isButtonEnabled = phoneNumber.length === 10;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../assets/logoVoltgo.png")}
        />
        <View style={styles.info}>
          <Text style={styles.infoText} allowFontScaling={false}>
            Adım 1: Üyelik hesabınızda kullanacağınız aktif telefon numaranızı
            başında '0' olmadan belirtiniz.{"\n"} Telefonunuza doğrulama kodu
            göndereceğiz.
          </Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText} allowFontScaling={false}>
            Telefon Numarası
          </Text>
          <TextInput
            placeholder="(5 - - - - - - - - -)*"
            style={styles.input}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.sendButton,
              {backgroundColor: isButtonEnabled ? "#63b32e" : "#a0a0a0"}
            ]}
            onPress={() => isButtonEnabled && navigation.navigate("Password")}
            disabled={!isButtonEnabled}
          >
            <Text style={styles.sendButtonText} allowFontScaling={false}>
              DEVAM ET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("FirstScreen")}
          >
            <Text style={styles.backButtonText} allowFontScaling={false}>
              Vazgeç
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
  info: {
    flex: 1,
    width: PhoneWidth,
    height: PhoneHeight * 0.11
  },
  infoText: {
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
  numberContainer: {
    alignItems: "center",
    height: PhoneHeight * 0.17
  },
  numberText: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 10,
    width: PhoneWidth * 0.9
  },
  input: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.08,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 15,
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#000000"
  },
  buttonContainer: {
    height: PhoneHeight * 0.2,
    alignItems: "center"
  },
  sendButton: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.08,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  sendButtonText: {
    fontFamily: "Roboto",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  backButton: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.08,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
