import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import GaleryAddIcon from "@/assets/icons/GaleryAddIcon";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import { Button } from "../shared/Button";
import EditIcon from "@/assets/icons/EditIcon";

const CreateGuestModal = ({
  visible = false,
  onRequestClose = () => null,
}: {
  visible?: boolean;
  onRequestClose?: () => void;
}) => {
  return (
    <Modal visible={visible} transparent onRequestClose={onRequestClose}>
      <Pressable
        onPress={onRequestClose}
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(255,255,255,0.55)",
        }}
      />
      <Animated.View
        entering={FadeInDown}
        className="h-2/3 rounded-t-xl bg-white absolute bottom-0 w-full"
      >
        <View className="self-center my-2 h-1 w-8 rounded-full bg-dark"></View>
        <KeyboardAvoidingScrollView>
          <View className="px-6">
            <Text className="font-cabin-bold text-xl text-primary">
              Ajouter un invité
            </Text>
            <Text className="font-nunito text-sm text-dark-secondary">
              Ajouter un invité à votre évènement
            </Text>
          </View>
          <TouchableOpacity className="h-24 w-24 rounded-full bg-gray-100 items-center justify-center my-8 self-center">
            <GaleryAddIcon width={37} height={37} />
            <View className="absolute bottom-0 right-2">
              <EditIcon width={25} height={25} />
            </View>
          </TouchableOpacity>
          <View className="mx-6">
            <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
              Nom de l&apos;invité
            </Text>

            <TextInput
              className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
              placeholder="Ex: Dadju"
            />

            <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
              Catégorie de l&apos;invité
            </Text>

            <TouchableOpacity className="bg-gray-150 mt-2 mb-6 rounded-xl px-4 flex-row items-center gap-2 py-4">
              <Text className="font-nunito-semibold text-lg text-dark-secondary">
                Sélectionner la catégorie de l&apos;invité
              </Text>
              <ChevronDownIcon />
            </TouchableOpacity>
            <Button>Créér</Button>
          </View>
        </KeyboardAvoidingScrollView>
      </Animated.View>
    </Modal>
  );
};

export default CreateGuestModal;
