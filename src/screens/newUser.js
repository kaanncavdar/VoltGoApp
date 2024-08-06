import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../constans/config";

export default function NewUser({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logoVoltgo.png")}
      />
      <View style={styles.info}>
        <Text style={styles.infoText}>
          Adım 1: Üyelik hesabınızda kullanacağınız aktif telefon numaranızı
          başında '0' olmadan belirtiniz. Telefonunuza doğrulama kodu
          göndereceğiz.
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
    heightTop:PhoneHeight * 0.1,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#fff"
  },
  info: {
    flex: 1,
    alignItems: "center",
    width: PhoneWidth
  },
  infoText: {
    margin: 20,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  }
});
