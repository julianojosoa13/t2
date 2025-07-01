import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import { Header } from "@/components/shared/Header";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";
import { router } from "expo-router";
import ClockIcon from "@/assets/icons/ClockIcon";
import CheckIcon from "@/assets/icons/CheckIcon";

const ScannedEvents = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="my-1" />
      <Header title="Evenements - Scan & Vérification"></Header>
      <View className="border-b-[1px] -mt-2 border-gray" />

      <ScrollView className="flex-1 bg-white">
        <TouchableOpacity className="bg-gray-100 items-center flex-row px-5 py-2 m-4 gap-2 rounded-full overflow-hidden self-start">
          <Text className="font-cabin-bold text-dark-secondary">Tous</Text>
          <ChevronDownIcon />
        </TouchableOpacity>
        <Text className="font-nunito-bold text-gray-200 mx-6">
          26 Septembre
        </Text>

        <TouchableOpacity
          className="border-b-[2px] border-b-[#e4e4e4] px-4 my-4 flex-row items-center justify-betweenv rounded-2xl"
          onPress={() => {
            router.navigate("/Scan/ScannedEventsEvent");
          }}
        >
          <View>
            <Image
              source={require("@/assets/images/grand-concert.png")}
              className="w-[27.5vw] h-[22.5vw] rounded-2xl"
            />
            <Image
              source={require("@/assets/images/profile-picture.jpg")}
              className="w-12 h-12 absolute rounded-full border-4 border-primary bottom-3 right-3"
            />
          </View>
          <View className="mx-2 mb-6 flex-1 justify-center mt-6">
            <Text
              className="text-dark font-cabin-bold max-w-[40vw]"
              numberOfLines={3}
            >
              Géant Concert urbain
            </Text>
            <View className="flex-row items-center gap-2 my-2">
              <LocationTickIcon />
              <Text
                className="text-dark-secondary font-nunito text-sm max-w-[40vw]"
                numberOfLines={3}
              >
                Place de l&apos;amazon, Cotonou
              </Text>
            </View>

            <View className="flex-row items-center gap-2">
              <ClockIcon width={18} height={18} color="#979797" />
              <Text
                className="text-dark-secondary font-nunito text-sm max-w-[40vw]"
                numberOfLines={3}
              >
                Mardi 26 Septembre 2024 à 16h
              </Text>
            </View>
          </View>
          <View className="bg-primary rounded-full w-8 h-8 items-center justify-center">
            <CheckIcon color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="px-4 flex-row items-center justify-betweenv rounded-2xl -mt-4"
          onPress={() => {
            router.navigate("/Scan/ScannedEventsEvent");
          }}
        >
          <View>
            <Image
              source={require("@/assets/images/nightParty.png")}
              className="w-[27.5vw] h-[22.5vw] rounded-2xl"
            />
            <Image
              source={require("@/assets/images/profile-picture.jpg")}
              className="w-12 h-12 absolute rounded-full border-4 border-primary bottom-3 right-3"
            />
          </View>
          <View className="mx-2 mb-6 flex-1 justify-center mt-6">
            <Text
              className="text-dark font-cabin-bold max-w-[40vw]"
              numberOfLines={3}
            >
              Géant Concert urbain
            </Text>
            <View className="flex-row items-center gap-2 my-2">
              <LocationTickIcon />
              <Text
                className="text-dark-secondary font-nunito text-sm max-w-[40vw]"
                numberOfLines={3}
              >
                Place de l&apos;amazon, Cotonou
              </Text>
            </View>

            <View className="flex-row items-center gap-2">
              <ClockIcon width={18} height={18} color="#979797" />
              <Text
                className="text-dark-secondary font-nunito text-sm max-w-[40vw]"
                numberOfLines={3}
              >
                Mardi 26 Septembre 2024 à 16h
              </Text>
            </View>
          </View>
          <View
            className="bg-transparent w-8 h-8 items-center justify-center"
            style={{
              borderColor: "#2ECC71",
              borderWidth: 2,
              borderRadius: "50%",
            }}
          >
            <Text className="font-nunito-bold text-primary text-sm">80</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ScannedEvents;

const styles = StyleSheet.create({});
