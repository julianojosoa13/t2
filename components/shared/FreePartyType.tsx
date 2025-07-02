import React, { FC } from "react";
import { Text } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
const FreePartyType = () => {
  return (
    <Animated.View
      className="bg-[black] rounded-3xl px-6 py-1"
      entering={FadeInRight}
    >
      <Text className="font-nunito-bold text-white text-xs">Gratuit</Text>
    </Animated.View>
  );
};

export default FreePartyType;
