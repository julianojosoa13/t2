import {
  View,
  Text,
  TextInput,
  Image,
  Switch,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Header } from "@/components/shared/Header";
import Ripple from "react-native-material-ripple";
import Animated, {
  FadeInDown,
  FadeOutDown,
  SlideInDown,
} from "react-native-reanimated";
import GaleryImageIcon from "@/assets/icons/GaleryImageIcon";
import AddIcon from "@/assets/icons/AddIcon";
import PictureFrameIcon from "@/assets/icons/PictureFrameIcon";
import { router } from "expo-router";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import TicketIcon from "@/assets/icons/TicketIcon";
import TicketSmallIcon from "@/assets/icons/TicketSmallIcon";
import CheckIcon from "@/assets/icons/CheckIcon";

const Page4 = () => {
  const [showTicketType, setShowTicketType] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
        {showTicketType ? (
          <View>
            <View className="flex-row items-center py-5 gap-2">
              <View className="items-center justify-center px-5">
                <TicketSmallIcon />
              </View>
              <View className="flex-grow">
                <Text className="font-cabin-bold text-xl">Ticket Groupe</Text>
                <Text className="font-nunito">Ticket Groupe</Text>
              </View>
              <Text className="font-cabin-bold text-xl">5 000 F CFA</Text>
            </View>

            <View className="flex-row items-center py-5 gap-2">
              <View className="items-center justify-center px-5">
                <TicketSmallIcon color="#f4cf5f" />
              </View>
              <View className="flex-grow">
                <Text className="font-cabin-bold text-xl">Ticket Standard</Text>
                <Text className="font-nunito">Ticket Standar</Text>
              </View>
              <Text className="font-cabin-bold text-xl">3 000 F CFA</Text>
            </View>
          </View>
        ) : (
          <View className="items-center gap-4 flex-grow justify-center mb-32">
            <TicketIcon />
            <Text className="font-cabin-bold text-lg text-primary">
              Ajoutez les tickets à votre évenement
            </Text>
            <Text className="font-nunito">
              Vous n&apos;avez ajouter aucun ticket pour le moment.
            </Text>

            <Ripple
              className="flex-row gap-2 border p-2 rounded-full border-primary overflow-hidden my-4"
              onPress={() => {
                setShowTicketType(true);
              }}
            >
              <Text className="text-primary">Ajouter</Text>
              <AddIcon color="#2ECC71" />
            </Ripple>
          </View>
        )}

        <View className="absolute bottom-8 py-4 flex-row items-center gap-4 ml-2">
          <View className="flex-row items-center justify-between flex-grow">
            <TouchableOpacity
              className="flex-row items-center gap-2"
              onPress={() => {
                setShowModal(true);
              }}
            >
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

      <Modal
        transparent
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <Pressable
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(235,235,235,0.85)",
          }}
          onPress={() => {
            setShowModal(false);
          }}
        />
        <Animated.View
          className="absolute mx-4 bottom-24  gap-4 bg-white rounded-2xl px-4 py-2 mr-24 elevation-sm max-h-1/3"
          entering={FadeInDown}
        >
          <TouchableOpacity className="flex-row p-4 ">
            <View className="w-10 h-10" />
            <View className="">
              <Text className="text-xl font-cabin-bold">Gratuit</Text>
              <Text className="font-nunito mr-6" numberOfLines={5}>
                Evénement accessible à tous sans frais d&apos;entrée. Les
                participants pourront s’inscrire gratuitement. Aucun ticket
                n’est requis.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row p-4">
            <View className="w-10 h-10 mt-4">
              <CheckIcon color="#7C15FF" />
            </View>
            <View className="">
              <Text className="text-xl font-cabin-bold text-[#7C15FF]">
                Payant
              </Text>
              <Text className="font-nunito mr-6">
                Evénement accessible à tous sans frais d'entrée. Les
                participants pourront s&apos;inscrire gratuitement. Aucun ticket
                n’est requis.
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <View className="absolute mx-4 bottom-10 flex-row items-center gap-4 bg-white rounded-full px-4 py-2 mr-[80px] elevation-sm">
          <View className="flex-row items-center justify-between flex-grow">
            <TouchableOpacity
              className="flex-row items-center gap-2"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text className="font-cabin text-lg">Type de participation</Text>
              <ChevronDownIcon />
            </TouchableOpacity>
            <View className="bg-[##7C15FF] rounded-3xl px-6 py-1">
              <Text className="font-nunito-bold text-white text-xs">
                Payant
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Page4;
