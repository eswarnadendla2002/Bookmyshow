import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../Components/Header";
import ScrollMedia from "../Components/scrollMedia";
import MyCarousel from "../Components/Carousel";
import Carousel_Next from "../Components/Carousel_Next";
import Recommend from "../Components/Recommend";

const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <Header />
        <ScrollMedia />
        <MyCarousel />
        <Carousel_Next />
        <Recommend />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
