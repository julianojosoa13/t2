import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Header } from "@/components/shared/Header";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import CrossIcon from "@/assets/icons/CrossIcon";
import ClockIcon from "@/assets/icons/ClockIcon";

const ScanInvites = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="mt-2"></View>
      <Header title="Invitations - Scan & vérification"></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-4">
          <Image
            source={require("@/assets/images/grand-concert.png")}
            className="h-[25vh] w-[94vw] rounded-2xl self-center"
          />
        </View>
        <View className="mx-4 mb-6">
          <Text className="text-dark font-cabin-bold text-2xl mb-4">
            Géant Concert urbain
          </Text>
          <View className="flex-row items-center gap-2 my-2">
            <LocationTickIcon />
            <Text className="text-dark-secondary font-nunito">
              Place de l&apos;amazon, Cotonou
            </Text>
          </View>

          <View className="flex-row items-center gap-2 mt-2 mb-8">
            <ClockIcon width={18} height={18} color="#979797" />
            <Text className="text-dark-secondary font-nunito">
              Mardi 26 Septembre 2024 à 16h
            </Text>
          </View>

          <View className="flex-row gap-2 items-center mb-4">
            <Image
              source={require("@/assets/images/profile-picture.jpg")}
              className="w-20 h-20  rounded-full border-4 border-primary "
            />
            <View>
              <Text className="text-dark font-cabin-bold text-xl">
                Mélaine Jirar
              </Text>
              <Text className="text-primary font-nunito text-sm">
                Organisateur de l&apos;évenement
              </Text>
            </View>
          </View>

          <View className="rounded-2xl bg-[#efefef] p-3 mb-[20vh]">
            <Text className="text-dark-secondary font-nunito">
              Vous etes invité participer à l&apos;évenement Géant concert
              organisé le 20 fev. 2025 à 16h au Palais des congrès en tant que
              validateur de ticket. Votre role sera principalement de vérifier
              la validité des ticket des participants
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 w-full">
        <View className="flex-row items-center justify-center flex-1 my-6 gap-6">
          <TouchableOpacity className="bg-primary rounded-2xl items-center flex-row justify-center gap-2 p-4 w-[40vw]">
            <CheckIcon color="#303338" />
            <Text className="text-[#303338] font-cabin-bold">Accepter</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#f39292] rounded-2xl items-center flex-row justify-center gap-2 p-4 w-[40vw]">
            <CrossIcon color="#303338" />
            <Text className="text-[#303338] font-cabin-bold">Rejeter</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="mb-8 rounded-xl w-[86vw] p-4 items-center justify-center self-center bg-[#eeeeee]">
          <Text className="font-nunito-bold text-dark">
            Voir l&apos;évenement
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanInvites;
