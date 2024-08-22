import React from "react";
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../constans/config";
import Icon from "react-native-vector-icons/Ionicons";

export default function StationDetail({route, navigation}) {
  const {
    name,
    image,
    distance,
    status,
    location,
    mapLocation,
    price,
    power,
    sockets
  } = route.params;

  const handleOpenMap = () => {
    Linking.openURL(mapLocation);
  };

  // Soket türüne göre filtreleme
  const renderSocketItem = ({item}) => (
    <View style={styles.socketContainer}>
      <Icon
        name="battery-charging"
        size={45}
        color="#63b32e"
        style={styles.socketIcon}
      />
      <View style={styles.socketInfo}>
        <Text style={styles.socketName}>{item.type}</Text>
        <Text style={styles.socketStatus}>{item.status}</Text>
        <Text style={styles.socketPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.chargeButton}
        onPress={() => navigation.navigate("Deneme")}
      >
        <Text style={styles.chargeButtonText}>Şarj Et</Text>
      </TouchableOpacity>
    </View>
  );

  // AC ve DC soketlerini filtreleyin
  const acSockets = sockets.filter(socket => socket.type === "AC");
  const dcSockets = sockets.filter(socket => socket.type === "DC");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        {/* Photo */}
        <Image source={{uri: image}} style={styles.image} />
        {/* Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.stationName} allowFontScaling={false}>
            {name}
          </Text>
          <View style={styles.row}>
            <View style={styles.icon}>
              <Icon name="location" size={20} color="#ffffff" />
            </View>
            <Text style={styles.stationLocation} allowFontScaling={false}>
              {location}
            </Text>
          </View>
        </View>
        {/* Access */}
        <View style={styles.accessContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.accessText} allowFontScaling={false}>
                Erişim Saatleri
              </Text>
              <Text style={styles.accessText} allowFontScaling={false}>
                00.00 - 23.59
              </Text>
            </View>
            <TouchableOpacity style={styles.mapButton} onPress={handleOpenMap}>
              <Text style={styles.buttonText} allowFontScaling={false}>
                Yol Tarifi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* AC Soketler */}
        <View style={styles.chargeContainer}>
          <FlatList
            data={acSockets}
            renderItem={renderSocketItem}
            keyExtractor={item => item.type}
            contentContainerStyle={styles.socketListContainer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 10
  },
  detailsContainer: {
    alignItems: "center",
    height: PhoneHeight * 0.9
  },
  image: {
    width: PhoneWidth,
    height: PhoneHeight * 0.25,
    marginBottom: 20
  },
  infoContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ffffff",
    width: PhoneWidth,
    height: PhoneHeight * 0.13,
    padding: 10
  },
  stationName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff"
  },
  icon: {
    paddingRight: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  stationLocation: {
    fontSize: 20,
    color: "#ffffff",
    marginLeft: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  column: {
    flexDirection: "column",
    flex: 0.95
  },
  accessText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 5
  },
  accessContainer: {
    justifyContent: "space-between",
    width: PhoneWidth,
    height: PhoneHeight * 0.13
  },
  mapButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#63b32e",
    borderRadius: 15,
    width: PhoneWidth * 0.4,
    height: PhoneHeight * 0.07,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  chargeContainer: {
    flex: 1,
    width: PhoneWidth,
    padding: 10,
    borderRadius: 15
  },
  socketContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#63b32e",
    borderWidth: 1
  },
  socketIcon: {
    marginRight: 10
  },
  socketInfo: {
    flex: 1
  },
  socketName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff"
  },
  socketStatus: {
    fontSize: 14,
    color: "#cccccc"
  },
  socketPrice: {
    fontSize: 14,
    color: "#cccccc"
  },
  chargeButton: {
    backgroundColor: "#63b32e",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  chargeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  },
  socketListContainer: {
    paddingVertical: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10
  }
});
