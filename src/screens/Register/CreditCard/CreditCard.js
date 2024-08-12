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

export default function CreditCard({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Logo */}
        <Image
          style={styles.image}
          source={require("../../../assets/logoVoltgo.png")}
        />
        {/* Info */}
        <View style={styles.info}>
          <Text style={styles.infoText} allowFontScaling={false}>
            Kredi kartı bilgilerinizi şimdi girerek şarj işlemlerine hemen
            başlayabilir veya bu adımı atlayabilirsiniz.
          </Text>
        </View>
        {/* KrediKartı */}
        <View style={styles.ccContainer}>
          <View>
            <Text style={styles.inputText} allowFontScaling={false}>
              Adınız:
            </Text>
            <TextInput
              placeholder="Kart Üzerinde Yazan İsim/Soyisim"
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.inputText} allowFontScaling={false}>
              Kart Numarası:
            </Text>
            <TextInput
              placeholder="1234** **** 4321"
              style={styles.input}
              keyboardType="numeric"
              maxLength={16}
            />
          </View>
          <View style={styles.ccInfo}>
            <View>
              <Text style={styles.inputText} allowFontScaling={false}>
                Ay*
              </Text>
              <TextInput
                placeholder="**"
                style={styles.inputCC}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
            <View>
              <Text style={styles.inputText} allowFontScaling={false}>
                Yıl*
              </Text>
              <TextInput
                placeholder="**"
                style={styles.inputCC}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
            <View>
              <Text style={styles.inputText} allowFontScaling={false}>
                CVV:
              </Text>
              <TextInput
                placeholder="***"
                style={styles.inputCC}
                keyboardType="numeric"
                maxLength={3}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText} allowFontScaling={false}>
              Kaydet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonVazgec}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextVazgec} allowFontScaling={false}>
              Atla
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
    flex: 1
  },
  infoText: {
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
  ccContainer: {
    flex: 1,
    alignItems: "center"
  },
  input: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.06,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#000000",
    marginVertical: 10
  },
  inputText: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 10,
    width: PhoneWidth * 0.3,
    marginTop: 15
  },
  ccInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inputCC: {
    width: PhoneWidth * 0.285,
    height: PhoneHeight * 0.06,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#000000",
    marginHorizontal: 5
  },
  buttonContainer: {
    height: PhoneHeight * 0.2,
    alignItems: "center",
    marginTop: 20
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
  buttonText: {
    fontFamily: "Roboto",
    color: "#ffffff",
    fontSize: 20
  },
  buttonVazgec: {
    width: PhoneWidth * 0.4,
    height: PhoneHeight * 0.06,
    alignSelf: "center",
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10
  },
  buttonTextVazgec: {
    fontFamily: "Roboto",
    color: "#63b32e",
    fontSize: 20
  }
});
