import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import CrossIcon from "@/assets/icons/CrossIcon";
import { Button } from "../shared/Button";
import ValidTicketBGImage from "@/assets/icons/ValidTicketBGImage";
import LottieView from "lottie-react-native";

const ValidTicketModal = ({
  visible = false,
  onRequestClose = undefined,
}: {
  visible?: boolean;
  onRequestClose?: () => void;
}) => {
  return (
    <Modal transparent visible={visible} onRequestClose={onRequestClose}>
      <Animated.View
        entering={FadeIn}
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0,0,0,0.33)",
        }}
      >
        <Pressable className="flex-1 w-full h-full" onPress={onRequestClose} />
      </Animated.View>
      <Animated.View
        className={
          "absolute bottom-0 bg-white rounded-t-[40px] w-full h-72 p-6"
        }
        entering={FadeInDown}
      >
        <TouchableOpacity
          className="bg-gray-100 rounded-full overflow-hidden items-center justify-center w-14 h-14 z-10"
          onPress={onRequestClose}
        >
          <CrossIcon />
        </TouchableOpacity>
        <Animated.View
          className="absolute top-4"
          entering={FadeInDown.delay(500)}
        >
          <ValidTicketBGImage />
        </Animated.View>

        <View className="items-center gap-4 -mt-10">
          <LottieView
            autoPlay
            loop={false}
            source={require("@/assets/lotties-animations/success.json")}
            style={{ width: 100, height: 100 }}
          />
          <Text className="mb-8 -mt-6 text-xl text-primary-dark font-cabin-bold">
            Ticket valide
          </Text>
        </View>

        <Button>Voir</Button>
      </Animated.View>
    </Modal>
  );
};

export default ValidTicketModal;
