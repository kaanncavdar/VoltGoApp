// Tc dısında tam kısım yok, adres kısmını text olarak girdim görüntü için, şehirleri ve o şehir display olduğunda gözükecek ilçeleri listeyemedim. Adres box'ı düzeltilmeli. Çalışan bir checkbox yazamadım. Şu noktada bir buton yazıp sonraki sayfayı bitirip buraya geri döneceğim.
import React, {useState} from "react";
import {
  Button,
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
import {Checkbox} from "react-native-paper";

export default function Individual({navigation}) {
  //şehirler
  // {label: "Adana", value: "adana"},
  // {label: "Adıyaman", value: "adiyaman"},
  // {label: "Ankara", value: "ankara"}

  //Adana ilçeleri
  // {label: "Seyhan", value: "seyhan"},
  // {label: "Yüreğir", value: "yuregir"},
  // {label: "Sarıçam", value: "saricam"},
  // {label: "Çukurova", value: "cukurova"},
  // {label: "Karaisalı", value: "karaisali"},
  // {label: "Karataş", value: "karatas"},
  // {label: "Pozantı", value: "pozanti"},
  // {label: "Saimbeyli", value: "saimbeyli"},
  // {label: "Tufanbeyli", value: "tufanbeyli"},
  // {label: "Yumurtalık", value: "yumurtalik"},
  // {label: "Ceyhan", value: "ceyhan"},
  // {label: "Feke", value: "feke"},
  // {label: "İmamoğlu", value: "imamoglu"},
  // {label: "Kozan", value: "kozan"}

  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Logo */}
        <Image
          style={styles.image}
          source={require("../../../assets/logoVoltgo.png")}
        />
        {/*Info*/}
        <View style={styles.info}>
          <Text style={styles.infoText} allowFontScaling={false}>
            Adım 5: Voltgo Dünyası'na katılman için son adım. Lütfen yasal
            bilgilerinizi giriniz.
          </Text>
        </View>
        {/* TC alma inputu */}
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
        {/* Adres alma inputu */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressText} allowFontScaling={false}>
            Ülke*
          </Text>
          <View style={styles.input}>
            <Text style={styles.inInput}>Türkiye</Text>
          </View>
          <Text style={styles.addressText} allowFontScaling={false}>
            Şehir*
          </Text>
          <View style={styles.input}>
            <Text style={styles.inInput}>Adana</Text>
          </View>
          <Text style={styles.addressText} allowFontScaling={false}>
            İlçe*
          </Text>
          <View style={styles.input}>
            <Text style={styles.inInput}>Seyhan</Text>
          </View>
        </View>
        {/* Mahalle sokak*/}
        <View detailAddressContainer>
          <Text style={styles.addressText} allowFontScaling={false}>
            Adres*
          </Text>
          <TextInput
            placeholder="Mahalle, Sokak"
            style={styles.detailAddress}
          />
        </View>
        {/* CheckBoxs */}
        {/* <View style={styles.checkBoxContainer}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            style={styles.checkBox}
            uncheckedColor="red"
            color={checked ? "#ffffff" : "#63b32e"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.checkBoxText} allowFontScaling={false}>
            Kişisel verilerimin işlenmesini kabul ediyorum.
          </Text>
        </View> */}
        {/* Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CreditCard")}
          >
            <Text style={styles.buttonText} allowFontScaling={false}>
              Devam et
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
    height: PhoneHeight * 0.37,
    alignItems: "center"
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
    paddingHorizontal: 10
  },
  inInput: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold"
  },
  detailAddressContainer: {
    height: PhoneHeight * 0.15
  },
  detailAddress: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.15,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 15,
    paddingHorizontal: 10
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  checkBox: {},
  checkBoxText: {
    color: "#ffffff",
    fontSize: 18
  },
  buttonContainer: {
    height: PhoneHeight * 0.2,
    alignItems: "center",
    paddingTop: 20
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
  }
});
