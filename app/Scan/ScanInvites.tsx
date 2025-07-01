import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Header } from "@/components/shared/Header";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import CrossIcon from "@/assets/icons/CrossIcon";
import { router } from "expo-router";

const ScanInvites = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="mt-2"></View>
      <Header title="Invitations à scanner"></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          className="bg-[#eef8ff] p-4 m-4 flex-row items-center justify-between gap-2 rounded-2xl"
          onPress={() => router.navigate("/Scan/ScanInvitesEvent")}
        >
          <View>
            <Image
              source={require("@/assets/images/grand-concert.png")}
              className="w-[27.5vw] h-[27.5vw] rounded-2xl"
            />
            <Image
              source={require("@/assets/images/profile-picture.jpg")}
              className="w-12 h-12 absolute rounded-full border-4 border-primary bottom-3 right-3"
            />
          </View>
          <View>
            <View className="flex-row justify-between items-center gap-4 flex-1">
              <Text className="text-dark font-cabin-bold text-lg">
                Festival du CAN
              </Text>
              <View className="gap-2 flex-row items-center">
                <LocationTickIcon width={18} height={18} />
                <Text className="font-nunito-bold text-dark-secondary text-sm">
                  Cotonu
                </Text>
              </View>
            </View>

            <Text
              className="text-dark-secondary font-nunito max-w-[50vw] text-sm"
              numberOfLines={4}
            >
              <Text className="text-dark font-nunito-bold">
                Daniel Mirabell{" "}
              </Text>
              vous a invité à rejoindre l&apos;évenement Festival du can en tant
              que scanner
            </Text>
          </View>
          <ChevronRightIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity className="my-4">
          <View className="bg-transparent p-4 mx-4 flex-row items-center justify-between gap-2 rounded-2xl">
            <View>
              <Image
                source={require("@/assets/images/grand-concert.png")}
                className="w-[27.5vw] h-[27.5vw] rounded-2xl"
              />
              <Image
                source={require("@/assets/images/profile-picture.jpg")}
                className="w-12 h-12 absolute rounded-full border-4 border-primary bottom-3 right-3"
              />
            </View>
            <View>
              <View className="flex-row justify-between items-center gap-4 flex-1">
                <Text className="text-dark font-cabin-bold text-lg">
                  Festival du CAN
                </Text>
                <View className="gap-2 flex-row items-center">
                  <LocationTickIcon width={18} height={18} />
                  <Text className="font-nunito-bold text-dark-secondary text-sm">
                    Cotonu
                  </Text>
                </View>
              </View>

              <Text
                className="text-dark-secondary font-nunito max-w-[50vw] text-sm"
                numberOfLines={4}
              >
                <Text className="text-dark font-nunito-bold">
                  Daniel Mirabell{" "}
                </Text>
                vous a invité à rejoindre l&apos;évenement Festival du can en
                tant que scanner
              </Text>
            </View>
            <ChevronRightIcon width={24} height={24} />
          </View>
          <View className="bg-[#f3fff2] rounded-2xl items-center flex-row justify-center gap-2 p-2 mx-6">
            <Text className="text-primary font-cabin-bold">Accepté</Text>
            <CheckIcon color="#2ECC71" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="my-4">
          <View className="bg-transparent p-4 mx-4 flex-row items-center justify-between gap-2 rounded-2xl">
            <View>
              <Image
                source={require("@/assets/images/grand-concert.png")}
                className="w-[27.5vw] h-[27.5vw] rounded-2xl"
              />
              <Image
                source={require("@/assets/images/profile-picture.jpg")}
                className="w-12 h-12 absolute rounded-full border-4 border-primary bottom-3 right-3"
              />
            </View>
            <View>
              <View className="flex-row justify-between items-center gap-4 flex-1">
                <Text className="text-dark font-cabin-bold text-lg">
                  Festival du CAN
                </Text>
                <View className="gap-2 flex-row items-center">
                  <LocationTickIcon width={18} height={18} />
                  <Text className="font-nunito-bold text-dark-secondary text-sm">
                    Cotonu
                  </Text>
                </View>
              </View>

              <Text
                className="text-dark-secondary font-nunito max-w-[50vw] text-sm"
                numberOfLines={4}
              >
                <Text className="text-dark font-nunito-bold">
                  Daniel Mirabell{" "}
                </Text>
                vous a invité à rejoindre l&apos;évenement Festival du can en
                tant que scanner
              </Text>
            </View>
            <ChevronRightIcon width={24} height={24} />
          </View>
          <View className="bg-[#fff2f2] rounded-2xl items-center flex-row justify-center gap-2 p-2 mx-6">
            <Text className="text-[#f39797] font-cabin-bold">Rejeté</Text>
            <CrossIcon color="#f39292" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ScanInvites;
