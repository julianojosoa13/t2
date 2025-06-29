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
  FadeIn,
  FadeInDown,
  FadeOutDown,
} from "react-native-reanimated";
import AddIcon from "@/assets/icons/AddIcon";
import { router } from "expo-router";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import TicketIcon from "@/assets/icons/TicketIcon";
import TicketSmallIcon from "@/assets/icons/TicketSmallIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import PayedPartyType from "@/components/shared/PayedPartyType";
import FreePartyType from "@/components/shared/FreePartyType";
import PayedEventNoTicketType from "@/components/shared/PayedEventNoTicketType";
import IllustrationImage from "@/assets/icons/IllustrationImage";
import SwitchToggle from "react-native-switch-toggle";
import CreateTicketModal from "@/components/modals/CreateTicketModal";

export type ParticipationType = "payant" | "gratuit";

const Page4 = () => {
  const [showTicketType, setShowTicketType] = useState(false);
  const [selectedPartType, setSelectedPartType] =
    useState<ParticipationType>("payant");
  const [showModal, setShowModal] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);
  const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);

  const selectPartyType = (partyType: ParticipationType) => {
    // hideModal();
    setSelectedPartType(partyType);
  };

  const toggleShowModal = () => setShowModal(true);

  const hideModal = () => setShowModal(false);

  return (
    <View className="bg-primary flex-1">
      <Header title="Festival du Lust" backTo="" />

      <View className="absolute top-10 right-4">
        <Ripple
          className="bg-white rounded-full h-10 px-5 items-center justify-center overflow-hidden"
          onPress={() => {
            router.navigate("/Events/CreateEvent/Page5");
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
        {selectedPartType === "payant" ? (
          <View>
            {showTicketType ? (
              <View>
                <View className="flex-row items-center py-5 gap-2">
                  <View className="items-center justify-center px-5">
                    <TicketSmallIcon />
                  </View>
                  <View className="flex-grow">
                    <Text className="font-cabin-bold text-xl">
                      Ticket Groupe
                    </Text>
                    <Text className="font-nunito">Ticket Groupe</Text>
                  </View>
                  <Text className="font-cabin-bold text-xl">5 000 F CFA</Text>
                </View>

                <View className="flex-row items-center py-5 gap-2">
                  <View className="items-center justify-center px-5">
                    <TicketSmallIcon color="#f4cf5f" />
                  </View>
                  <View className="flex-grow">
                    <Text className="font-cabin-bold text-xl">
                      Ticket Standard
                    </Text>
                    <Text className="font-nunito">Ticket Standar</Text>
                  </View>
                  <Text className="font-cabin-bold text-xl">3 000 F CFA</Text>
                </View>
              </View>
            ) : (
              <PayedEventNoTicketType
                addTicketAction={() => {
                  setShowTicketType(true);
                }}
              />
            )}
          </View>
        ) : (
          <View>
            <View className="items-center my-8 gap-4">
              <IllustrationImage />
              <Text className="font-cabin-bold text-lg text-primary">
                Evenenement Gratuit !
              </Text>
              <Text className="text-center mx-6 text-sm font-nunito-bold text-dark-secondary">
                Vous avez configurer votre évenement sur le mode de
                participation gratuite pour les participants. Dans ce mode nous
                vous facturons uniquement des frais de publication de
                l&apos;évenement qui sont payable en 1 fois.
              </Text>
            </View>
            <View className="flex-row rounded-full bg-primary-100 overflow-hidden items-center justify-between mt-2 py-2 px-4">
              <Text className="font-cabin-semibold text-dark">
                Frais de publication & services
              </Text>
              <Text className="font-cabin-bold text-xl text-dark">
                15 000F CFA
              </Text>
            </View>

            <View className="flex-row items-center mt-4 gap-2 mx-2">
              <SwitchToggle
                switchOn={switchOn}
                onPress={() => setSwitchOn(!switchOn)}
                circleColorOff="#FFF"
                circleColorOn="#FFF"
                backgroundColorOn="#2ECC71"
                backgroundColorOff="#E0E0E0"
                circleStyle={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                }}
                containerStyle={{
                  width: 55,
                  height: 30,
                  borderRadius: 15,
                  padding: 4,
                  paddingLeft: 0,
                }}
              />
              <Text
                className="font-nunito-semibold text-dark"
                onPress={() => setSwitchOn(!switchOn)}
              >
                J&apos;accepte les termes & conditions
              </Text>
            </View>
          </View>
        )}
        <View className="absolute bottom-8 py-4 flex-row items-center gap-4 ml-2">
          <View className="flex-row items-center justify-between flex-grow">
            <Pressable
              className="flex-row items-center gap-2"
              onPress={toggleShowModal}
            >
              <Text className="font-cabin text-lg">Type de participation</Text>
              <ChevronDownIcon />
            </Pressable>
            {selectedPartType === "payant" ? (
              <PayedPartyType />
            ) : (
              <FreePartyType />
            )}
          </View>

          <TouchableOpacity
            className="bg-primary h-16 w-16 rounded-full items-center justify-center"
            onPress={() => {
              setShowCreateTicketModal(true);
            }}
          >
            <AddIcon color="black" />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>

      <Modal transparent visible={showModal} onRequestClose={hideModal}>
        <Pressable
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(235,235,235,0.85)",
          }}
          onPress={hideModal}
        />
        <Animated.View
          className="absolute mx-4 bottom-24  gap-4 bg-white rounded-2xl px-4 py-2 mr-24 elevation-sm max-h-1/3"
          entering={FadeInDown}
        >
          <TouchableOpacity
            className="flex-row p-4 "
            onPress={() => selectPartyType("gratuit")}
          >
            <View className="w-10 h-10 mt-2">
              {selectedPartType === "gratuit" && <CheckIcon color="black" />}
            </View>
            <View className="">
              <Text className="text-xl font-cabin-bold">Gratuit</Text>
              <Text className="font-nunito mr-6" numberOfLines={5}>
                Evénement accessible à tous sans frais d&apos;entrée. Les
                participants pourront s’inscrire gratuitement. Aucun ticket
                n’est requis.
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row p-2"
            onPress={() => selectPartyType("payant")}
          >
            <View className="w-10 h-10 mt-2">
              {selectedPartType === "payant" && <CheckIcon color="#7C15FF" />}
            </View>
            <View className="">
              <Text className="text-xl font-cabin-bold text-[#7C15FF]">
                Payant
              </Text>
              <Text className="font-nunito mr-6">
                Evénement accessible à tous sans frais d&apos;entrée. Les
                participants pourront s&apos;inscrire gratuitement. Aucun ticket
                n’est requis.
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          className="absolute mx-4 bottom-10 flex-row items-center gap-4 bg-white rounded-full px-4 py-2 mr-[80px] elevation-sm"
          entering={FadeIn}
        >
          <View className="flex-row items-center justify-between flex-grow">
            <TouchableOpacity
              className="flex-row items-center gap-2"
              onPress={hideModal}
            >
              <Text className="font-cabin text-lg">Type de participation</Text>
              <ChevronDownIcon />
            </TouchableOpacity>
            {selectedPartType === "payant" ? (
              <PayedPartyType />
            ) : (
              <FreePartyType />
            )}
          </View>
        </Animated.View>
      </Modal>

      <CreateTicketModal
        visible={showCreateTicketModal}
        onRequestClose={() => setShowCreateTicketModal(false)}
      />
    </View>
  );
};

export default Page4;
