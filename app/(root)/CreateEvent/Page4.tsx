import {
  View,
  Text,
  TextInput,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Header } from "@/components/shared/Header";
import Ripple from "react-native-material-ripple";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import GaleryImageIcon from "@/assets/icons/GaleryImageIcon";
import AddIcon from "@/assets/icons/AddIcon";
import PictureFrameIcon from "@/assets/icons/PictureFrameIcon";
import { router } from "expo-router";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import TicketIcon from "@/assets/icons/TicketIcon";

const Page4 = () => {
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
      <Text className="mx-4 font-cabin-bold text-2xl">Tickets</Text>
      <Text className="mx-4 font-nunito text-sm mb-2">
        Ajouter les différents tickets pour l’évenement
      </Text>
      <Animated.ScrollView
        entering={FadeInDown.duration(600)}
        exiting={FadeOutDown.duration(600)}
        className="flex-1 bg-[#ededed] rounded-t-3xl mt-2 pt-4 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-1"
      >
        <View className="items-center gap-4 flex-grow justify-center mb-32">
          <TicketIcon />
          <Text className="font-cabin-bold text-lg text-primary">
            Ajoutez les tickets à votre évenement
          </Text>
          <Text className="font-nunito">
            Vous n&apos;avez ajouter aucun ticket pour le moment.
          </Text>

          <Ripple className="flex-row gap-2 border p-2 rounded-full border-primary overflow-hidden my-4">
            <Text className="text-primary">Ajouter</Text>
            <AddIcon color="#2ECC71" />
          </Ripple>
        </View>
        <View className="absolute bottom-8 py-4 flex-row items-center gap-4">
          <View className="flex-row items-center justify-between flex-grow">
            <TouchableOpacity className="flex-row items-center gap-2">
              <Text className="font-cabin text-lg">Type de participation</Text>
              <ChevronDownIcon />
            </TouchableOpacity>
            <View className="bg-[##7C15FF] rounded-3xl px-6 py-1">
              <Text className="font-nunito-bold text-white text-xs">
                Payant
              </Text>
            </View>
          </View>

          <TouchableOpacity className="bg-primary h-16 w-16 rounded-full items-center justify-center">
            <AddIcon color="black" />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Page4;
