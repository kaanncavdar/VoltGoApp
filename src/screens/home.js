import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";

function Home() {
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView>
        <View>
          <Text style={styles.homeText}>Bu sayfaya geldiyseniz görmek istediğiniz sayfa henüz yapım aşamasında demektir. Daha sonra tekrar deneyiniz.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center"
  },
  homeText: {
    color: "#ffffff",
    fontSize: 24,
    textAlign: "center"
  }
});

export default Home;
