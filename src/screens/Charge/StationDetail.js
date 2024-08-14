import React from "react";
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../constans/config";
import Icon from "react-native-vector-icons/Ionicons";

export default function StationDetail({route}) {
  const {name, image, distance, status, location, mapLocation, price} =
    route.params;

  const handleOpenMap = () => {
    Linking.openURL(mapLocation);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={{uri: image}} style={styles.image} />
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
        {/* <Text} allowFontScaling={false}>
          {distance}
        </Text> */}
        {/* <Text} allowFontScaling={false}>
          Status: {status}
        </Text> */}
        {/* <Text style={styles.price} allowFontScaling={false}>
          Price: {price}
        </Text> */}
        <View style={styles.accessContainer}>
          <View style={styles.row}>
            <View style={styles.column}></View>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.mapButton} onPress={handleOpenMap}>
          <Text style={styles.mapButtonText} allowFontScaling={false}>
            Open in Maps
          </Text>
        </TouchableOpacity> */}
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
    alignItems: "center"
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
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
  accessContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: PhoneWidth,
    height: PhoneHeight * 0.13,
    borderWidth: 1,
    borderColor: "#ffffff"
  },
  mapButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#63b32e",
    borderRadius: 15
  },
  mapButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
