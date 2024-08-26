import React, {useState, useEffect} from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../../constans/config";

export default function Choose({navigation, route}) {
  const token = route.params?.token;
  console.log("Token in Choose:", token);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../../assets/logoVoltgo.png")}
        />
        <View style={styles.info}>
          <Text style={styles.infoText} allowFontScaling={false}>
            Adım 4: Lütfen kullanıcı tipinizi seçiniz.
          </Text>
        </View>
        {/*Individual */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Individual", { token: token })}
        >
          <View style={styles.individualContainer}>
            <Text style={styles.individualText1} allowFontScaling={false}>
              Bireysel Kullanıcı _____________________________
            </Text>
            <Text style={styles.individualText2} allowFontScaling={false}>
              TCKN ile faturalandırılır.
            </Text>
          </View>
        </TouchableOpacity>
        {/*Corporate*/}
        <TouchableOpacity
          onPress={() => navigation.navigate("Corporate", {token: token})}
        >
          <View style={styles.corporateContainer}>
            <Text style={styles.corporateText1} allowFontScaling={false}>
              Kurumsal Kullanıcı _____________________________
            </Text>
            <Text style={styles.corporateText2} allowFontScaling={false}>
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
  individualContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#63b32e",
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.12,
    marginTop: PhoneHeight * 0.02,
    marginBottom: PhoneHeight * 0.02
  },
  individualText1: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.013,
    fontWeight: "bold"
  },
  individualText2: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.004
  },
  corporateContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#163A84",
    width: PhoneWidth * 0.7,
    height: PhoneHeight * 0.12,
    marginTop: PhoneHeight * 0.02,
    marginBottom: PhoneHeight * 0.02
  },
  corporateText1: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.013,
    fontWeight: "bold"
  },
  corporateText2: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    marginTop: PhoneHeight * 0.004
  }
});
