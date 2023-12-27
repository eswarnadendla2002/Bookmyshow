import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { nowShowing } from "../Utils/Data";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useColors } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
const Recommend = () => {
  const navi = useNavigation();
  return (
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 10,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "bold",

              marginRight: 10,
            }}
          >
            Recommended Movies
          </Text>
          <Text style={{ color: useColors.primary }}>
            See All{" "}
            <AntDesign name="right" size={12} color={useColors.primary} />
          </Text>
        </View>
        <View style={{ marginRight: 10, marginLeft: 10 }}>
          <FlatList
            data={nowShowing}
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={{ marginRight: 10, marginTop: 10 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navi.navigate("Details", { id: item.id });
                    }}
                  >
                    <Image
                      source={{ uri: item.img }}
                      style={{ width: wp(30), height: hp(20), borderRadius: 4 }}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 5,
                      alignItems: "center",
                      borderRadius: 5,
                      marginTop: 5,
                      backgroundColor: useColors.lightGrey,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <AntDesign
                        name="heart"
                        size={13}
                        color={useColors.primary}
                        style={{ marginRight: 3 }}
                      />
                      <Text style={{ fontSize: 12 }}>{item.fav}%</Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 12 }}>{item.votes}k votes</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{item.title}</Text>
                  </View>
                </View>
              );
            }}
            // Add a keyExtractor
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Recommend;

const styles = StyleSheet.create({});
