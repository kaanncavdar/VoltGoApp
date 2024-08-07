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
import {PhoneHeight, PhoneWidth} from "../../constans/config";

export default function PersonID({navigation}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const handleChangeFirstName = text => setFirstName(text);
  const handleChangeLastName = text => setLastName(text);
  const handleChangeEmail = text => setEmail(text);
  const handleChangeBirthYear = text =>
    setBirthYear(text.replace(/[^0-9]/g, ""));

  const isFormValid = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.includes("@") &&
      birthYear.length === 4
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../assets/logoVoltgo.png")}
        />
        <View style={styles.info}>
          <Text style={styles.infoText} allowFontScaling={false}>
            Adım 3: Lütfen kayıt olmak için kimlik bilgilerinizi giriniz.
          </Text>
        </View>
        <View style={styles.idContainer}>
          <View>
            <Text style={styles.inputText} allowFontScaling={false}>
              Adınız:
            </Text>
            <TextInput
              placeholder="Lütfen kimlik kartınızda bulunan adınızı giriniz"
              style={styles.input}
              value={firstName}
              onChangeText={handleChangeFirstName}
            />
          </View>
          <View>
            <Text style={styles.inputText} allowFontScaling={false}>
              Soyadınız:
            </Text>
            <TextInput
              placeholder="Lütfen kimlik kartınızda bulunan soyadınızı giriniz"
              style={styles.input}
              value={lastName}
              onChangeText={handleChangeLastName}
            />
          </View>
          <View>
            <Text style={styles.inputText} allowFontScaling={false}>
              E-posta*
            </Text>
            <TextInput
              placeholder="xxxx@xxx.com"
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={handleChangeEmail}
            />
          </View>
          <View>
            <Text style={styles.inputText} allowFontScaling={false}>
              Doğum Yılı*
            </Text>
            <TextInput
              placeholder="Lütfen doğum yılınızı giriniz"
              style={styles.input}
              keyboardType="numeric"
              maxLength={4}
              value={birthYear}
              onChangeText={handleChangeBirthYear}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isFormValid() ? "#63b32e" : "#ccc"}
            ]}
            onPress={() => {
              if (isFormValid()) {
                navigation.navigate("Choose");
              }
            }}
            disabled={!isFormValid()}
          >
            <Text style={styles.buttonText}>İleri</Text>
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
  idContainer: {
    alignItems: "center",
    height: PhoneHeight * 0.7
  },
  inputText: {
    color: "#ffffff",
    fontSize: 18,
    marginVertical: 15,
    width: PhoneWidth * 0.9,
    marginTop: 15
  },
  input: {
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.066,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    borderRadius: 15,
    fontSize: 15,
    paddingHorizontal: 10,
    color: "#000000"
  },
  button: {
    width: PhoneWidth * 0.35,
    height: PhoneHeight * 0.066,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
