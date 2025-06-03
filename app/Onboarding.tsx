import { Button } from "@/components/shared/Button";
import { router } from "expo-router";
import React from "react";
import { Text, Image, ScrollView, View, TouchableOpacity } from "react-native";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";

const Onboarding = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="">
      <View className="bg-primary-100 py-4">
        <Animated.Image
          entering={FadeInLeft.delay(150).duration(500).stiffness(5)}
          className="w-full h-[500]"
          resizeMode="contain"
          source={require("@/assets/images/onboardingImage.png")}
        />
        <Animated.Text
          className="text-center text-primary-300 font-cabin-bold text-3xl mb-4"
          entering={FadeInUp}
        >
          Votre évènement démarre ici!
        </Animated.Text>
        <Animated.Text
          className="text-center mx-12 font-sm font-nunito"
          entering={FadeInDown}
        >
          Créer, configurer et plannifier vos évenements facilement et
          rapidement
        </Animated.Text>
      </View>

      <Animated.View
        className="py-8 px-4 gap-8"
        entering={FadeInDown.duration(300).delay(300)}
      >
        <Button onPress={() => router.navigate("/(root)/CreateEvent/Page1")}>
          <Text className="text-center font-nunito-semibold text-lg">
            Ajouter un évènement
          </Text>
        </Button>
        <Button
          style={{
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Text className="text-center font-nunito-semibold text-lg">
            Voir une démo
          </Text>
        </Button>
      </Animated.View>
    </ScrollView>
  );
};

export default Onboarding;
