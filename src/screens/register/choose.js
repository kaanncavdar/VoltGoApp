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

export default function Choose({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../assets/logoVoltgo.png")}
        />
        <View style={styles.info}>
          <Text style={styles.infoText} allowFontScaling={false}>
            Adım 4: Lütfen kullanıcı tipinizi seçiniz.
          </Text>
        </View>
        {/* <Bireysel Girişi /> */}
        <TouchableOpacity onPress={() => navigation.navigate("Tckn")}>
          <View style={styles.bireyselContainer}>
            <Text style={styles.bireyselText1} allowFontScaling={false}>
              Bireysel Kullanıcı _____________________________
            </Text>
            <Text style={styles.bireyselText2} allowFontScaling={false}>
              TCKN ile faturalandırılır.
            </Text>
          </View>
        </TouchableOpacity>
        {/* Kurumsal Girişi /> */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.kurumsalContainer}>
            <Text style={styles.kurumsalText1} allowFontScaling={false}>
              Kurumsal Kullanıcı _____________________________
            </Text>
            <Text style={styles.kurumsalText2} allowFontScaling={false}>
              Vergi No ile faturalandırılır.
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center"
  },
  image: {
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.17,
    alignSelf: "center"
  },
  info: {
    flex: 1,
    height: PhoneHeight * 0.11
  },
  infoText: {
    margin: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
  bireyselContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#63b32e",
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.12,
    marginTop: PhoneHeight * 0.02,
    marginBottom: PhoneHeight * 0.02
  },
  bireyselText1: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.013,
    fontWeight: "bold"
  },
  bireyselText2: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.004
  },
  kurumsalContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#163A84",
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.12,
    marginTop: PhoneHeight * 0.02,
    marginBottom: PhoneHeight * 0.02
  },
  kurumsalText1: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.013,
    fontWeight: "bold"
  },
  kurumsalText2: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.004
  }
});
