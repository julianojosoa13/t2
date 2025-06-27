import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { Header } from "@/components/shared/Header";
import Ripple from "react-native-material-ripple";
import { router } from "expo-router";
import SearchIcon from "@/assets/icons/SearchIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import CloseIcon from "@/assets/icons/CloseIcon";
import AddIcon from "@/assets/icons/AddIcon";
import CreateGuestModal from "@/components/modals/CreateGuestModal";

const Page5 = () => {
  const [ShowModal, setShowModal] = useState(false);
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <View className="bg-primary flex-1">
      <Header title="Festival du Lust" backTo="" />

      <View className="absolute top-10 right-4">
        <Ripple
          className="bg-white rounded-full h-10 px-5 items-center justify-center overflow-hidden"
          onPress={() => {
            router.navigate("/(root)/CreateEvent/Page6");
          }}
        >
          <Text>Enreg. et ontinuer</Text>
        </Ripple>
      </View>
      <Text className="mx-4 font-cabin-bold text-2xl">Invité</Text>
      <Text className="mx-4 font-nunito text-sm mb-2">
        Ajouter les invités à votre évenement
      </Text>
      <Animated.View
        entering={FadeInDown.duration(600)}
        exiting={FadeOutDown.duration(600)}
        className="flex-1 bg-[#ededed] rounded-t-3xl mt-2 pt-4"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
        >
          <View className="bg-gray-300 py-1 px-8 flex-row rounded-full items-center gap-2 mx-6">
            <SearchIcon />
            <TextInput className="font-nunito flex-1" />
          </View>
          <View className="mt-6 mx-6">
            <Text className="font-cabin-semibold text-sm text-dark-secondary">
              Les personnes les plus recherchées
            </Text>
            <View className="h-[50vh]">
              <TouchableOpacity className="flex-row items-center my-3 gap-2">
                <Image
                  source={require("@/assets/images/dadju.png")}
                  className="rounded-full h-16 w-16"
                />
                <View className="flex-grow">
                  <Text className="font-nunito-bold text-lg">Dadju</Text>
                  <Text className="font-nunito text-sm">Artiste/Chanteur</Text>
                </View>
                <CheckIcon />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center my-3 gap-2">
                <Image
                  source={require("@/assets/images/blaaz.png")}
                  className="rounded-full h-16 w-16"
                />
                <View className="flex-grow">
                  <Text className="font-nunito-bold text-lg">Blaaz</Text>
                  <Text className="font-nunito text-sm">Artiste/Chanteur</Text>
                </View>
                <CheckIcon />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center my-3 gap-2">
                <Image
                  source={require("@/assets/images/vanobaby.png")}
                  className="rounded-full h-16 w-16"
                />
                <View className="flex-grow">
                  <Text className="font-nunito-bold text-lg">Vano Baby</Text>
                  <Text className="font-nunito text-sm">Artiste/Chanteur</Text>
                </View>
                <CheckIcon />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center my-3 gap-2">
                <Image
                  source={require("@/assets/images/tayc.png")}
                  className="rounded-full h-16 w-16"
                />
                <View className="flex-grow">
                  <Text className="font-nunito-bold text-lg">Tayc</Text>
                  <Text className="font-nunito text-sm">Artiste/Chanteur</Text>
                </View>
                <CheckIcon />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center my-3 gap-2">
                <Image
                  source={require("@/assets/images/tiakola.png")}
                  className="rounded-full h-16 w-16"
                />
                <View className="flex-grow">
                  <Text className="font-nunito-bold text-lg">Tiakola</Text>
                  <Text className="font-nunito text-sm">Artiste/Chanteur</Text>
                </View>
                <CheckIcon />
              </TouchableOpacity>
            </View>

            <Text className="font-cabin-semibold text-dark-secondary">
              Invités séléctionnés
            </Text>
          </View>
          <ScrollView
            contentContainerClassName="flex-row items-center gap-4 pl-6"
            showsHorizontalScrollIndicator={false}
            className="mb-20"
            horizontal
          >
            <View
              className="flex-row items-center my-3 gap-2"
              style={{
                borderWidth: 4,
                borderColor: "#2ECC71",
                borderRadius: "50%",
              }}
            >
              <Image
                source={require("@/assets/images/dadju.png")}
                className="rounded-full h-16 w-16"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                className="absolute -top-2 -right-0"
                hitSlop={8}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            <View
              className="flex-row items-center my-3 gap-2"
              style={{
                borderWidth: 4,
                borderColor: "#2ECC71",
                borderRadius: "50%",
              }}
            >
              <Image
                source={require("@/assets/images/blaaz.png")}
                className="rounded-full h-16 w-16"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                className="absolute -top-2 -right-0"
                hitSlop={8}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            <View
              className="flex-row items-center my-3 gap-2"
              style={{
                borderWidth: 4,
                borderColor: "#2ECC71",
                borderRadius: "50%",
              }}
            >
              <Image
                source={require("@/assets/images/vanobaby.png")}
                className="rounded-full h-16 w-16"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                className="absolute -top-2 -right-0"
                hitSlop={8}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            <View
              className="flex-row items-center my-3 gap-2"
              style={{
                borderWidth: 4,
                borderColor: "#2ECC71",
                borderRadius: "50%",
              }}
            >
              <Image
                source={require("@/assets/images/tayc.png")}
                className="rounded-full h-16 w-16"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                className="absolute -top-2 -right-0"
                hitSlop={8}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <View
              className="flex-row items-center my-3 gap-2"
              style={{
                borderWidth: 4,
                borderColor: "#2ECC71",
                borderRadius: "50%",
              }}
            >
              <Image
                source={require("@/assets/images/tiakola.png")}
                className="rounded-full h-16 w-16"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                className="absolute -top-2 -right-0"
                hitSlop={8}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollView>
        <Ripple
          className={`bg-primary w-16 h-16 rounded-full items-center justify-center absolute bottom-0 right-0 mb-14 mr-2 overflow-hidden`}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <AddIcon color="#303338" />
        </Ripple>
      </Animated.View>
      <CreateGuestModal visible={ShowModal} onRequestClose={hideModal} />
    </View>
  );
};

export default Page5;
