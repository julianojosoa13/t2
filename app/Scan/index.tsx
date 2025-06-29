import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Header } from "@/components/shared/Header";
import TicketExpiredIcon from "@/assets/icons/TicketExpiredIcon";
import Ripple from "react-native-material-ripple";
import ScannerButtonBG from "@/assets/icons/ScannerButtonBG";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import UserAddIcon from "@/assets/icons/UserAddIcon";
import TicketSmallAltIcon from "@/assets/icons/TicketSmallAltIcon";
import ScanEventModal from "@/components/modals/ScanEventModal";

const ScansScreen = () => {
  const { width } = Dimensions.get("window");
  const [showModal, setShowModal] = useState(false);

  const barMaxWidth = width - 48;
  const percentage = 80;
  return (
    <ScrollView
      className="flex-1 bg-[#edfaff]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="my-1" />
      <Header title="Scan & Vérification"></Header>
      <View className="self-center flex-row my-6 mx-6">
        <View className="flex-1 items-center bg-[#D0F0FD] rounded-l-full py-8">
          <Text className="text-[#2D9CDB] text-[40px]">0</Text>
          <Text className="text-[#2D9CDB] font-cabin-bold text-lg">
            Tickets valides
          </Text>
        </View>
        <View
          className="absolute left-1/2 top-1/2 z-10"
          style={{
            transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
          }}
        >
          <TicketExpiredIcon />
        </View>
        <View className="flex-1 items-center bg-[#FFEFEA] rounded-r-full py-8">
          <Text className="text-[#EB5757] text-[40px]">0</Text>
          <Text className="text-[#EB5757] font-cabin-bold text-lg">
            Tickets invalides
          </Text>
        </View>
      </View>
      <TouchableOpacity
        className={"rounded-full overflow-hidden  self-center my-6"}
        activeOpacity={0.5}
        onPress={() => setShowModal(true)}
      >
        <ScannerButtonBG />
      </TouchableOpacity>
      <View className="mx-[24px] flex-row items-center justify-between">
        <Text className="text-dark font-cabin-bold text-xl">
          Activité en cours
        </Text>
        <TouchableOpacity className="flex-row gap-2 items-center">
          <Text className="text-sm font-nunito text-primary">Voir tout </Text>
          <ChevronRightIcon color="#2ECC71" />
        </TouchableOpacity>
      </View>
      <View className="mx-[24px] flex-row my-4 items-center justify-between">
        <Text className="text-dark-secondary font-nunito-bold">
          Concert du louvre
        </Text>
        <Text className="text-sm text-dark-secondary font-nunito">
          80% de tickets scannés
        </Text>
      </View>
      <View
        className="rounded-full"
        style={{
          width: barMaxWidth,
          marginVertical: 12,
          marginHorizontal: 24,
          height: 10,
          backgroundColor: "#EEE",
        }}
      >
        <View
          className="bg-primary rounded-full"
          style={{ height: 10, width: (percentage * barMaxWidth) / 100 }}
        ></View>

        <Ripple
          className={"flex-row bg-white items-center px-4 py-8 mt-8 h-36 gap-4"}
        >
          <UserAddIcon />
          <View className="flex-1">
            <Text className="font-cabin-bold text-lg text-dark">
              Invitations à scanner
            </Text>
            <Text className="font-nunito text-dark-secondary text-sm max-w-[67%]">
              Vos amis peuvent vous inviter à les aider pour scanner les tickets
              sur leur évenement
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <View className="bg-[#EB5757] rounded-full  w-8 h-8 items-center justify-center">
              <Text className="font-cabin text-white">1</Text>
            </View>
            <ChevronRightIcon color="black" width={22} height={22} />
          </View>
        </Ripple>
        <Ripple
          className={"flex-row bg-white items-center px-4 py-8 mt-4 h-36 gap-4"}
        >
          <TicketSmallAltIcon />
          <View className="flex-1">
            <Text className="font-cabin-bold text-lg text-dark">
              Evenements scannés
            </Text>
            <Text className="font-nunito text-dark-secondary text-sm max-w-[67%]">
              Vos amis peuvent vous inviter à les aider pour scanner les tickets
              sur leur évenement
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <View />
            <ChevronRightIcon color="black" width={22} height={22} />
          </View>
        </Ripple>
      </View>
      <ScanEventModal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      />
    </ScrollView>
  );
};

export default ScansScreen;
