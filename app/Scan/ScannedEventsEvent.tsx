import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Header } from "@/components/shared/Header";
import TicketExpiredIcon from "@/assets/icons/TicketExpiredIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import CircularProgress from "react-native-circular-progress-indicator";

const ScannedEventsEvent = () => {
  return (
    <View className="flex-1 bg-[#edfaff]">
      <View className="my-1" />
      <Header title="Scan & Vérification"></Header>

      <ScrollView
        className="flex-1 bg-[#edfaff]"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="self-center mt-8">
          <CircularProgress
            value={80}
            maxValue={100}
            radius={100}
            activeStrokeWidth={25}
            activeStrokeColor="#2ecc71"
            inActiveStrokeColor="transparent"
            clockwise={false}
            circleBackgroundColor="transparent"
          />
        </View>
        <Text className="text-primary text-lg font-cabin text-center mb-8 mt-4">
          2 000 / 3 000 Tickets scannés
        </Text>
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
        <Text className="m-8 text-dark font-nunito-bold text-lg">
          Voir l&apos;évènement
        </Text>

        <TouchableOpacity className="border-b-[2px] border-b-[#e4e4e4] px-4 my-4 flex-row items-center justify-betweenv rounded-2xl bg-white mx-6">
          <View>
            <Image
              source={require("@/assets/images/grand-concert.png")}
              className="w-[27.5vw] h-[22.5vw] rounded-2xl"
            />
            <Image
              source={require("@/assets/images/profile-picture.jpg")}
              className="w-12 h-12 absolute rounded-full border-4 border-primary bottom-3 right-3"
            />
          </View>
          <View className="mx-2 mb-6 flex-1 justify-center mt-6">
            <Text
              className="text-dark font-cabin-bold max-w-[40vw]"
              numberOfLines={3}
            >
              Géant Concert urbain
            </Text>
            <View className="flex-row items-center gap-2 my-2">
              <LocationTickIcon />
              <Text
                className="text-dark-secondary font-nunito text-sm max-w-[40vw]"
                numberOfLines={3}
              >
                Place de l&apos;amazon, Cotonou
              </Text>
            </View>

            <View className="flex-row items-center gap-2">
              <ClockIcon width={18} height={18} color="#979797" />
              <Text
                className="text-dark-secondary font-nunito text-sm max-w-[40vw]"
                numberOfLines={3}
              >
                Mardi 26 Septembre 2024 à 16h
              </Text>
            </View>
          </View>
          <ChevronRightIcon />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ScannedEventsEvent;

const styles = StyleSheet.create({});
