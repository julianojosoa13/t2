import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Header } from "@/components/shared/Header";
import Ripple from "react-native-material-ripple";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import GaleryImageIcon from "@/assets/icons/GaleryImageIcon";
import AddIcon from "@/assets/icons/AddIcon";
import PictureFrameIcon from "@/assets/icons/PictureFrameIcon";
import { router } from "expo-router";

const Page3 = () => {
  return (
    <View className="bg-primary flex-1">
      <Header title="Festival du Lust" backTo="" />

      <View className="absolute top-10 right-4">
        <Ripple
          className="bg-white rounded-full h-10 px-5 items-center justify-center overflow-hidden"
          onPress={() => {
            router.navigate("/(root)/CreateEvent/Page4");
          }}
        >
          <Text>Enreg. et ontinuer</Text>
        </Ripple>
      </View>
      <Text className="mx-4 font-cabin-bold text-2xl">
        Gallerie d&apos;image
      </Text>
      <Text className="mx-4 font-nunito text-sm mb-2">
        Ajouter minimum 3 images de l&apos;évenements pour continuer
      </Text>
      <Animated.ScrollView
        entering={FadeInDown.duration(600)}
        exiting={FadeOutDown.duration(600)}
        className="flex-1 bg-white rounded-t-3xl mt-2 pt-4 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-1"
      >
        <TouchableOpacity
          className={"h-[258px] p-4 bg-[#D7D7D7] rounded-3xl mt-2 gap-2"}
        >
          <View className="flex-1 self-center items-center justify-center">
            <GaleryImageIcon />
          </View>
          <View className="flex-row items-center justify-between">
            <View />
            <TouchableOpacity
              className="absolute bottom-2 right-2 h-[20px] w-[20px] rounded-full overflow-hidden bg-white items-center justify-center"
              hitSlop={8}
            >
              <AddIcon />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View className="flex-row items-center gap-4 justify-evenly mt-4">
          <TouchableOpacity className="h-[128px] p-4 bg-[#D7D7D7] rounded-3xl mt-2 gap-2 flex-grow">
            <View className="flex-1 self-center items-center justify-center">
              <GaleryImageIcon width={40} height={40} />
            </View>
            <View className="flex-row items-center justify-between">
              <View />
              <TouchableOpacity
                className="absolute bottom-2 right-2 h-[20px] w-[20px] rounded-full overflow-hidden bg-white items-center justify-center"
                hitSlop={8}
              >
                <AddIcon />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="h-[128px] p-4 bg-[#D7D7D7] rounded-3xl mt-2 gap-2 flex-grow">
            <View className="flex-1 self-center items-center justify-center">
              <GaleryImageIcon width={40} height={40} />
            </View>
            <View className="flex-row items-center justify-between">
              <View />
              <TouchableOpacity
                className="absolute bottom-2 right-2 h-[20px] w-[20px] rounded-full overflow-hidden bg-white items-center justify-center"
                hitSlop={8}
              >
                <AddIcon />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-8 py-4 flex-row items-center gap-4">
          <View className="flex-row items-center justify-between flex-grow">
            <View className="flex-row items-center gap-2">
              <PictureFrameIcon />
              <Text className="font-cabin text-xl">Galerie</Text>
            </View>

            <Text className="font-nunito-bold text-dark-secondary text-sm">
              10 Images totales
            </Text>
          </View>

          <TouchableOpacity className="bg-primary h-16 w-16 rounded-full items-center justify-center">
            <AddIcon color="black" strokeWidth="2" />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Page3;
