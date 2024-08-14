import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";

function Deneme() {
  return (
    <SafeAreaView style={styles.deneme}>
      <ScrollView>
        <View>
          <Text style={styles.denemeText} allowFontScaling={false}>
            Bu sayfaya geldiyseniz görmek istediğiniz sayfa henüz yapım
            aşamasında demektir. Daha sonra tekrar deneyiniz.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  deneme: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center"
  },
  denemeText: {
    color: "#ffffff",
    fontSize: 24,
    textAlign: "center"
  }
});

export default Deneme;
