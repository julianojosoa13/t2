import React, { FC } from "react";
import { Text, View } from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";

const PayedPartyType = () => {
  return (
    <Animated.View
      entering={FadeInLeft}
      className="bg-[#7C15FF] rounded-3xl px-6 py-1"
    >
      <Text className="font-nunito-bold text-white text-xs">Payant</Text>
    </Animated.View>
  );
};

export default PayedPartyType;
