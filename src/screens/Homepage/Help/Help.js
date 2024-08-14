import React from "react";
import {View, Text, StyleSheet, Linking, TouchableOpacity} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";
import {PhoneHeight, PhoneWidth} from "../../../constans/config";
import Icon from "react-native-vector-icons/Ionicons";

function Help() {
  // Phone Press
  const handlePhonePress = () => {
    Linking.openURL("tel:4448587");
  };

  // Address Press
  const openMap = () => {
    const url = "https://maps.app.goo.gl/HQYn7CbPsBwjSHtx8";
    Linking.openURL(url).catch(err => console.error("Harita açılamadı:", err));
  };

  // E-mail Press
  const sendEmail = () => {
    const email = "info@voltgo.com.tr";
    const subject = "Konu Başlığı";
    const body = "Mesaj içeriği";
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(url).catch(err =>
      console.error("Email gönderimi başarısız oldu:", err)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.boxContainer}>
          {/* Phone Number */}
          <TouchableOpacity style={styles.box} onPress={handlePhonePress}>
            <View style={styles.row}>
              <View style={styles.icon}>
                <Icon name="call" size={45} color="#63b32e" />
              </View>
              <View style={styles.column}>
                <Text style={styles.titleHeader}>Telefon Numarası</Text>
                <Text style={styles.titleContent}>444 8587</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Address */}
          <TouchableOpacity style={styles.box} onPress={openMap}>
            <View style={styles.row}>
              <View style={styles.icon}>
                <Icon name="location" size={45} color="#63b32e" />
              </View>
              <View style={styles.column}>
                <Text style={styles.titleHeader}>Adres</Text>
                <Text style={styles.titleContent}>
                  Acıdere Osb Mah. Çanakkale Cad. No:15 Sarıçam/ADANA
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Operator */}
          <View style={styles.box}>
            <View style={styles.row}>
              <View style={styles.icon}>
                <Icon name="megaphone" size={45} color="#63b32e" />
              </View>
              <View style={styles.column}>
                <Text style={styles.titleHeader}>Operatör</Text>
                <Text style={styles.titleContent}>VOLTGO</Text>
              </View>
            </View>
          </View>
          {/* E-mail */}
          <TouchableOpacity style={styles.box} onPress={sendEmail}>
            <View style={styles.row}>
              <View style={styles.icon}>
                <Icon name="mail" size={45} color="#63b32e" />
              </View>
              <View style={styles.column}>
                <Text style={styles.titleHeader}>E-mail</Text>
                <Text style={styles.titleContent}>info@voltgo.com.tr</Text>
              </View>
            </View>
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
    justifyContent: "center",
    alignItems: "center"
  },
  boxContainer: {
    width: PhoneWidth
  },
  box: {
    width: PhoneWidth,
    height: PhoneHeight * 0.17,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 10,
    borderBottomLeftRadius: 15,
    borderLeftWidth: 7,
    borderBottomWidth: 7,
    borderLeftColor: "#63b32e",
    borderBottomColor: "#63b32e",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  icon: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  column: {
    flex: 8,
    justifyContent: "space-between",
    paddingLeft: 10
  },
  titleHeader: {
    fontSize: 21,
    color: "#000",
    fontWeight: "bold"
  },
  titleContent: {
    fontSize: 18,
    color: "#000"
  }
});

export default Help;
