import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useColors } from "../Utils/Colors";
const ScrollMedia = () => {
  const scrollMedia = [
    {
      title: "Movies",
      item: (
        <MaterialIcons name="local-movies" size={24} color={useColors.grey} />
      ),
    },
    {
      title: "Stream",
      item: <MaterialIcons name="stream" size={24} color={useColors.grey} />,
    },
    {
      title: "Sports",
      item: (
        <MaterialIcons name="sports-cricket" size={24} color={useColors.grey} />
      ),
    },
    {
      title: "Music Shows",
      item: (
        <MaterialIcons name="library-music" size={24} color={useColors.grey} />
      ),
    },
    {
      title: "Sports",
      item: (
        <MaterialIcons name="sports-cricket" size={24} color={useColors.grey} />
      ),
    },
    {
      title: "Comedy Shows",
      item: <Ionicons name="mic" size={24} color={useColors.grey} />,
    },
  ];
  return (
    <View>
      <FlatList
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
        horizontal={true}
        data={scrollMedia}
        renderItem={({ item }) => (
          <View
            style={{
              paddingHorizontal: 10,
              gap: 7,
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>{item.item}</View>
            <Text style={{ width: 60, textAlign: "center" }}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ScrollMedia;

const styles = StyleSheet.create({});
