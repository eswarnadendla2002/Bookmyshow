import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useColors } from "../Utils/Colors";
import { nowShowing } from "../Utils/Data";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Details = () => {
  const route = useRoute(); // Use useRoute hook to access route object
  const { id } = route.params; // Retrieve the id from the route.params
  const data = nowShowing.find((item) => item.id === id); // Use find instead of filter since there should be only one matching item
  // console.log(data);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          borderBottomColor: useColors.grey,
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="left" size={17} color={useColors.black} />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 17, textAlign: "center", fontWeight: "400" }}
            >
              {data.title}
            </Text>
          </View>
          <EvilIcons name="share-google" size={34} color={useColors.black} />
        </View>
      </View>
      <View
        style={{ alignItems: "center", marginTop: 15, position: "relative" }}
      >
        <Image
          source={{ uri: data.img }}
          style={{
            position: "relative",
            width: wp(90),
            height: hp(25),
            borderRadius: 10,
          }}
        />

        <View
          style={{
            position: "absolute",
            width: wp(90),
            overflow: "hidden",
            alignItems: "center",
            backgroundColor: "black",
            bottom: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: useColors.black,
              color: useColors.white,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 8,
            }}
          >
            In Cinemas
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",

            paddingHorizontal: 5,
            alignItems: "center",
            borderRadius: 5,
            marginTop: 8,
            marginHorizontal: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="heart"
              size={17}
              color={useColors.primary}
              style={{ marginRight: 6 }}
            />
            <Text style={{ fontSize: 15 }}>{data.fav}%</Text>
          </View>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Text style={{ marginLeft: 10, fontSize: 12 }}>
              {data.votes}k votes
            </Text>
            <View style={{ alignItems: "center", marginLeft: 2, marginTop: 2 }}>
              <AntDesign name="right" size={12} color={useColors.black} />
            </View>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={data.lang}
          renderItem={({ item }) => {
            <Text>{item}</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
