import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useColors } from "../Utils/Colors";

const Header = () => {
  return (
    <View
      style={{
        paddingBottom: 5,
        borderBottomColor: useColors.grey,
        borderBottomWidth: 1,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 14,
      }}
    >
      <View style={{ paddingTop: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          It All Start Here
        </Text>
        <Text style={{ color: useColors.primary }}>
          Tirupati{" "}
          <AntDesign name="right" size={12} color={useColors.primary} />
        </Text>
      </View>
      <View>
        <FontAwesome name="search" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
