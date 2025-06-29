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
import CloseIcon from "@/assets/icons/CloseIcon";
import CrossIcon from "@/assets/icons/CrossIcon";
import ScannerIcon from "@/assets/icons/ScannerIcon";
import TicketCodeIcon from "@/assets/icons/TicketCodeIcon";
import { Link } from "expo-router";

const ScanEventModal = ({
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
          className="bg-gray-100 rounded-full overflow-hidden items-center justify-center w-16 h-16"
          onPress={onRequestClose}
        >
          <CrossIcon />
        </TouchableOpacity>
        <Link asChild href={"/Scan/ScanQRTicket"}>
          <TouchableOpacity
            className="bg-[#DBDBDB] rounded-t-[30] h-16 gap-4 flex-row items-center border-b-gray border-b-2 mt-6 p-4"
            activeOpacity={0.75}
          >
            <ScannerIcon />
            <Text className="font-cabin text-dark text-lg">
              Scanner le code QR
            </Text>
          </TouchableOpacity>
        </Link>
        <Link asChild href={"/Scan/ManualTicketValidation"}>
          <TouchableOpacity
            className="bg-[#DBDBDB] rounded-b-[30] h-16 gap-4 flex-row items-center p-4"
            activeOpacity={0.75}
          >
            <TicketCodeIcon />
            <Text className="font-cabin text-dark text-lg">
              Saisir le code du ticket
            </Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </Modal>
  );
};

export default ScanEventModal;

const styles = StyleSheet.create({});
