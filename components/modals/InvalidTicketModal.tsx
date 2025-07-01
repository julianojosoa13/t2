import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Animated, { FadeIn, FadeInDown, ZoomIn } from "react-native-reanimated";
import CrossIcon from "@/assets/icons/CrossIcon";
import { Button } from "../shared/Button";
import ValidTicketBGImage from "@/assets/icons/ValidTicketBGImage";
import LottieView from "lottie-react-native";
import InvalidTicketBGImage from "@/assets/icons/InvalidTicketBGImage";
import Ripple from "react-native-material-ripple";

const InvalidTicketModal = ({
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
          className="bg-gray-100 rounded-full overflow-hidden items-center justify-center w-14 h-14 z-14"
          onPress={onRequestClose}
        >
          <CrossIcon />
        </TouchableOpacity>

        <Animated.View
          className="items-center gap-4 -mt-10"
          entering={ZoomIn.springify().duration(600).damping(100)}
        >
          <View>
            <InvalidTicketBGImage />
          </View>
          <Text className="mb-8 mt-0 text-xl text-red font-cabin-bold">
            Ticket déjà checké
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(600)}
          className={"flex-row items-center gap-4 justify-between"}
        >
          <Ripple
            className={
              "overflow-hidden rounded-2xl p-4  w-[40vw] items-center justify-center bg-transparent border-2 border-gray-300"
            }
          >
            <Text>Réinitialiser</Text>
          </Ripple>
          <View className="w-[42vw]">
            <Button>Voir</Button>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

export default InvalidTicketModal;
