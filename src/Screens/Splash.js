import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useColors } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
  const nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("login").then((value) => {
        value != null ? nav.replace("Home") : nav.replace("SelectCity");
      });
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: useColors.primary }}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
        source={require("../../assets/bookmyshow.png")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
