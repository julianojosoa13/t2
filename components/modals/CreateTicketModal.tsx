import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import CheckIcon from "@/assets/icons/CheckIcon";

const colors = ["#F36F56", "#F2C94C", "#D3C1FF", "#633B48", "#007AFF"];

const CreateTicketModal = ({
  visible = false,
  onRequestClose,
}: {
  visible?: boolean;
  onRequestClose: () => void;
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <Modal visible={visible} transparent onRequestClose={onRequestClose}>
      <Pressable
        className="bg-[rgba(235,235,235,0.85)]"
        style={{ ...StyleSheet.absoluteFillObject }}
        onPress={onRequestClose}
      />
      <Animated.View
        entering={FadeInDown}
        className="h-2/3 bg-white absolute bottom-0 w-full rounded-t-3xl overflow-hidden px-6 py-2"
      >
        <KeyboardAvoidingScrollView>
          <View className="self-center mb-2 h-1 w-8 rounded-full bg-dark"></View>
          <Text className="font-cabin-bold text-xl text-primary">
            Créér un ticket
          </Text>
          <Text className="font-nunito text-sm text-dark-secondary">
            Ajouter le nom, le prix et la description de votre ticket{" "}
          </Text>

          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Nom du Ticket
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
            placeholder="Ex: Ticket Personnel, Ticket Groupe, Couple"
          />

          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Description
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg pb-10"
            placeholder="Décrivez les avantages qu’offre ce ticket aux participants."
            multiline
            numberOfLines={4}
          />

          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Prix du Ticket
          </Text>
          <View className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg flex-row items-center">
            <TextInput
              className="flex-grow"
              placeholder="Ex: 500"
              keyboardType="decimal-pad"
            />
            <Text className="font-cabin-bold text-lg">F CFA</Text>
          </View>

          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Couleur principale du ticket
          </Text>
          <View className="flex-row gap-2 items-center">
            {colors?.map((color) => {
              const selected = selectedColor === color;
              console.log(color);
              console.log(
                `h-10 w-10 rounded-full bg-[${color}] ${
                  selected ? "border-4" : ""
                } overflow-hidden border-[${color}]`
              );
              return (
                <TouchableOpacity
                  key={color}
                  onPress={() => {
                    setSelectedColor(color);
                  }}
                >
                  <View
                    className={`h-10 w-10 rounded-full bg-[${color}] ${
                      selected ? "border-4" : ""
                    } overflow-hi border-[${color}] justify-center items-center`}
                  >
                    {selected && <CheckIcon color={color} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </KeyboardAvoidingScrollView>
      </Animated.View>
    </Modal>
  );
};

export default CreateTicketModal;
