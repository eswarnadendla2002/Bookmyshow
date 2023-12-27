import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Carousel = () => {
  const images = [
    "https://goldandhra.com/wp-content/uploads/2023/12/Salaar-Trailer.jpg",
    "https://www.cinejosh.com/newsimg/newsmainimg/speculation-on-og-story_b_0709230144.jpg",
    "https://cdn.123telugu.com/content/wp-content/uploads/2023/05/devara-m.jpg",
    "https://lehren.com/wp-content/uploads/2023/04/pushpa-the-rule-allu-arjun-looks-unrecognisable-in-first-look-poster.jpg",
  ];

  return (
    <View style={{ marginTop: 5 }}>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        autoplayInterval={4000}
        dotColor={"#D70817"}
        inactiveDotColor={"#90A4AE"}
        ImageComponentStyle={{ borderRadius: 8, width: wp(94), height: hp(25) }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
