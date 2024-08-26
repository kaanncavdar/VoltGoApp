import React from "react";
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
  ImageBackground
} from "react-native";
import {PhoneHeight, PhoneWidth} from "../../../constans/config";
import StationsData from "../../../data/StationsData";


export default function Station({navigation}) {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("StationDetail", {
            name: item.name,
            image: item.image,
            distance: item.distance,
            status: item.status,
            location: item.location,
            mapLocation: item.mapLocation,
            price: item.price,
            power: item.power,
            sockets: item.sockets,
            chargeTime: item.chargeTime,
            socketCount: item.socketCount
          })
        }
      >
        <ImageBackground source={{uri: item.image}} style={styles.image}>
          <View style={styles.stationText}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.distance}>{item.distance}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/*Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Şarj istasyonu ara" style={styles.searchBar} />
      </View>
      {/*AC Stations */}
      <View style={styles.StationsContainer}>
        <Text style={styles.headerText} allowFontScaling={false}>
          AC İstasyonları
        </Text>
        <FlatList
          data={StationsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.stationList}
        />
      </View>
      {/*DC Stations */}
      <View style={styles.StationsContainer}>
        <Text style={styles.headerText} allowFontScaling={false}>
          DC İstasyonları
        </Text>
        <FlatList
          data={StationsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.stationList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  searchBarContainer: {
    alignSelf: "center",
    width: PhoneWidth * 0.95,
    height: PhoneHeight * 0.135
  },
  searchBar: {
    width: PhoneWidth * 0.95,
    height: PhoneHeight * 0.075,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#000000"
  },
  StationsContainer: {
    flex: 1,
    alignSelf: "center",
    width: PhoneWidth * 0.95,
    height: PhoneHeight
  },
  headerText: {
    color: "#ffffff",
    fontSize: 25
  },
  itemContainer: {
    flexDirection: "horizontal",
    padding: 10
  },
  image: {
    width: PhoneHeight * 0.2,
    height: PhoneHeight * 0.25,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden"
  },
  stationText: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff"
  },
  distance: {
    fontSize: 14,
    color: "#ffffff"
  }
});
