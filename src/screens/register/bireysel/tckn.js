import React, {useState} from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Modal
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../../constans/config";

const countries = ["Türkiye"];

export default function Tckn({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Türkiye");

  const handleCountrySelect = country => {
    setSelectedCountry(country);
    setModalVisible(false);
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
            Adım 5: Voltgo Dünyası'na katılman için son adım. Lütfen yasal
            bilgilerinizi giriniz.
          </Text>
        </View>
        <View style={styles.tckn}>
          <Text style={styles.tcknText} allowFontScaling={false}>
            TCKN*
          </Text>
          <TextInput
            placeholder="***********"
            style={styles.input}
            secureTextEntry
            maxLength={11}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>Ülke</Text>
          <TextInput
            placeholder="Türkiye"
            style={styles.inputAddress}
            pointerEvents="none"
            editable={false}
          />
        </View>
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
  tckn: {
    alignItems: "center",
    height: PhoneHeight * 0.15
  },
  tcknText: {
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
  addressContainer: {
    height: PhoneHeight * 0.2,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffffff"
  },
  addressText: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 10,
    width: PhoneWidth * 0.9
  },
  inputAddress: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.066,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 15,
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#000000"
  }
});
