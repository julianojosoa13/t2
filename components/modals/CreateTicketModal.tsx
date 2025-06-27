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
import Animated, { FadeInDown } from "react-native-reanimated";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import CheckIcon from "@/assets/icons/CheckIcon";
import { Button } from "../shared/Button";

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
        className="h-3/4 bg-white absolute bottom-0 w-full rounded-t-3xl overflow-hidden px-6 py-2"
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
          <View className="flex-row gap-2 items-center justify-evenly my-8 ">
            {colors?.map((color) => {
              const selected = selectedColor === color;
              console.log(color);

              return (
                <TouchableOpacity
                  key={color}
                  onPress={() => {
                    setSelectedColor(color);
                  }}
                >
                  <View
                    className={`h-[60px] w-[60px] rounded-full  ${
                      selected ? "border-4" : ""
                    } overflow-hidden  justify-center items-center`}
                    style={{
                      borderWidth: selected ? 10 : 0,
                      borderColor: "rgba(0,0,0,0.2)",
                      backgroundColor: color,
                    }}
                  >
                    {selected && <CheckIcon color={"#303338"} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <Button>
            <Text className="font-nunito text-lg text-center text-dark">
              Créer
            </Text>
          </Button>
        </KeyboardAvoidingScrollView>
      </Animated.View>
    </Modal>
  );
};

export default CreateTicketModal;
