import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColors } from "../Utils/Colors";
import cities from "../Utils/Data";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Store } from "../Context/Wrapper";

const SelectCity = () => {
  const [isSelected, setisSelected] = useState();
  const [click, setClick] = useState(true);

  const [data, setData] = useContext(Store);
  console.log(data);
  const nav = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: useColors.white,
        paddingTop: 30,
        paddingHorizontal: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: useColors.black,
          marginBottom: 20,
        }}
      >
        Select City
      </Text>
      <View>
        <FlatList
          numColumns={3}
          data={cities}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setisSelected(index);
                setClick(false);
                setData(item);
              }}
              style={{
                borderWidth: 1,
                borderColor:
                  isSelected == index ? useColors.primary : useColors.grey,
                paddingHorizontal: 18,
                paddingVertical: 9,
                marginLeft: 12,
                marginBottom: 20,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color:
                    isSelected == index ? useColors.primary : useColors.grey,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ flex: 0.9, justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.setItem("login", "On");
            nav.navigate("Home");
          }}
          disabled={click}
          style={{
            backgroundColor:
              click == true ? useColors.lightGrey : useColors.primary,
            height: 55,
            marginHorizontal: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: click == true ? useColors.black : useColors.white,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectCity;
