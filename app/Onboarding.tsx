import React from "react";
import { Text, Image, ScrollView, View, TouchableOpacity } from "react-native";

const Onboarding = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="">
      <View className="bg-primary-100 py-4">
        <Image
          className="w-full h-[500]"
          resizeMode="contain"
          source={require("@/assets/images/onboardingImage.png")}
        />
        <Text className="text-center text-primary-300 font-cabin-bold text-3xl mb-4">
          Votre évènement démarre ici!
        </Text>
        <Text className="text-center mx-12 font-sm font-nunito">
          Créer, configurer et plannifier vos évenements facilement et
          rapidement
        </Text>
      </View>

      <View className="py-8">
        <TouchableOpacity className="bg-primary mx-4 rounded-xl h-14 justify-center">
          <Text className="text-center font-nunito-semibold text-lg">
            Ajouter un évènement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="border mx-4 my-8 rounded-xl h-14 justify-center">
          <Text className="text-center font-nunito-semibold text-lg">
            Voir une demo
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Onboarding;
