// Tc dısında tam kısım yok, adres kısmını text olarak girdim görüntü için, şehirleri ve o şehir display olduğunda gözükecek ilçeleri listeyemedim. Adres box'ı düzeltilmeli. Çalışan bir checkbox yazamadım. Şu noktada bir buton yazıp sonraki sayfayı bitirip buraya geri döneceğim.
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
  Modal,
  FlatList,
  Alert
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../../constans/config";

const cities = [
  {
    id: "1",
    name: "İstanbul",
    districts: [
      "Adalar",
      "Arnavutköy",
      "Ataşehir",
      "Avcılar",
      "Bağcılar",
      "Bahçelievler",
      "Bakırköy",
      "Başakşehir",
      "Bayrampaşa",
      "Beşiktaş",
      "Beykoz",
      "Beylikdüzü",
      "Beyoğlu",
      "Büyükçekmece",
      "Çatalca",
      "Çekmeköy",
      "Esenler",
      "Esenyurt",
      "Eyüpsultan",
      "Fatih",
      "Gaziosmanpaşa",
      "Güngören",
      "Kadıköy",
      "Kağıthane",
      "Kartal",
      "Küçükçekmece",
      "Maltepe",
      "Pendik",
      "Sancaktepe",
      "Sarıyer",
      "Silivri",
      "Sultanbeyli",
      "Sultangazi",
      "Şile",
      "Şişli",
      "Tuzla",
      "Ümraniye",
      "Üsküdar",
      "Zeytinburnu"
    ]
  },
  {
    id: "2",
    name: "Ankara",
    districts: [
      "Akyurt",
      "Altındağ",
      "Ayaş",
      "Bala",
      "Beypazarı",
      "Çamlıdere",
      "Çankaya",
      "Çubuk",
      "Elmadağ",
      "Etimesgut",
      "Evren",
      "Gölbaşı",
      "Güdül",
      "Haymana",
      "Kahramankazan",
      "Kalecik",
      "Keçiören",
      "Kızılcahamam",
      "Mamak",
      "Nallıhan",
      "Polatlı",
      "Pursaklar",
      "Sincan",
      "Şereflikoçhisar",
      "Yenimahalle"
    ]
  },
  {
    id: "3",
    name: "Adana",
    districts: [
      "Seyhan",
      "Yüreğir",
      "Sarıçam",
      "Çukurova",
      "Karaisalı",
      "Karataş",
      "Pozantı",
      "Saimbeyli",
      "Tufanbeyli",
      "Yumurtalık",
      "Ceyhan",
      "Feke",
      "İmamoğlu",
      "Kozan"
    ]
  },
  {
    id: "4",
    name: "Adıyaman",
    districts: ["Kahta", "Gölbaşı", "Besni", "Samsat", "Gerger", "Tut"]
  },
  {
    id: "5",
    name: "Afyon",
    districts: [
      "Afyonkarahisar Merkez",
      "Sandıklı",
      "Dinar",
      "Bolvadin",
      "Çay",
      "İscehisar",
      "Emirdağ",
      "Sultandağı",
      "Şuhut"
    ]
  }
];

export default function Individual({navigation}) {
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [districtModalVisible, setDistrictModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Şehir Seçiniz");
  const [selectedDistrict, setSelectedDistrict] = useState("İlçe Seçiniz");
  const [currentDistricts, setCurrentDistricts] = useState([]);

  const handleSelectCity = (city, districts) => {
    setSelectedCity(city);
    setCurrentDistricts(districts);
    setCityModalVisible(false);
    setDistrictModalVisible(true); // Şehir seçildiğinde ilçe modalını aç
  };

  const handleSelectDistrict = district => {
    setSelectedDistrict(district);
    setDistrictModalVisible(false);
  };

  const renderCityItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleSelectCity(item.name, item.districts)}
    >
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderDistrictItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleSelectDistrict(item)}
    >
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  );

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
        {/* Corpo Name */}
        <View style={styles.tckn}>
          <Text style={styles.tcknText} allowFontScaling={false}>
            Şirket Adı
          </Text>
          <TextInput
            style={styles.input}
          />
        </View>
        {/* Tax Number */}
        <View style={styles.tckn}>
          <Text style={styles.tcknText} allowFontScaling={false}>
            Vergi Numarası*
          </Text>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="numeric"
          />
        </View>
        {/* Tax Place*/}
        <View style={styles.tckn}>
          <Text style={styles.tcknText} allowFontScaling={false}>
            Vergi Dairesi*
          </Text>
          <TextInput
            style={styles.input}
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
          {/* Şehir*/}
          <Text style={styles.addressText} allowFontScaling={false}>
            Şehir*
          </Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setCityModalVisible(true)}
          >
            <Text style={styles.inInput}>{selectedCity}</Text>
          </TouchableOpacity>
          {/* İlçe*/}
          <Text style={styles.addressText} allowFontScaling={false}>
            İlçe*
          </Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setDistrictModalVisible(true)}
            disabled={!currentDistricts.length} // İlçe seçimi şehir seçildiğinde aktif olur
          >
            <Text style={styles.inInput}>{selectedDistrict}</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={false}
            visible={cityModalVisible}
            onRequestClose={() => setCityModalVisible(!cityModalVisible)}
          >
            <View style={styles.modalView}>
              <FlatList
                data={cities}
                renderItem={renderCityItem}
                keyExtractor={item => item.id}
              />
            </View>
          </Modal>

          {/* İlçe*/}

          <Modal
            animationType="slide"
            transparent={false}
            visible={districtModalVisible}
            onRequestClose={() =>
              setDistrictModalVisible(!districtModalVisible)
            }
          >
            <View style={styles.modalView}>
              <FlatList
                data={currentDistricts}
                renderItem={renderDistrictItem}
                keyExtractor={item => item}
              />
            </View>
          </Modal>
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
    height: PhoneHeight * 0.13
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
  modalView: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Hafif şeffaf bir arka plan
    borderRadius: 10, // Kenarları yuvarlak
    padding: 20 // İç boşluk
  },

  item: {
    backgroundColor: "#ffffff", // Elemanların arka planı beyaz
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1, // Alt kenar çizgisi
    borderBottomColor: "#E0E0E0", // Çizgi rengi
    flexDirection: "row",
    alignItems: "center", // İkon ve metni ortala
    justifyContent: "space-between" // İkonu sağa metni sola yasla
  },
  text: {
    fontSize: 18,
    color: "#333", // Metin rengi
    fontWeight: "bold" // Yazı tipi kalınlığı
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
