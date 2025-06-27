import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HeartIcon from "@/assets/icons/HeartIcon";
import ChevronsRightIcon from "@/assets/icons/ChevronsRightIcon";
import Calendar2Icon from "@/assets/icons/Calendar2Icon";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";
import CoinIcon from "@/assets/icons/CoinIcon";
import Ripple from "react-native-material-ripple";
import TicketSmallIcon from "@/assets/icons/TicketSmallIcon";
import EditIcon from "@/assets/icons/EditIcon";
import SlidingButton from "@/components/SlidingButton";

const Page6 = () => {
  return (
    <View className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 300 }}
        className="flex-1"
      >
        <View>
          <Image
            source={require("@/assets/images/grand-concert.png")}
            className="rounded-b-[40] h-[35vh] w-full"
          />
          <Ripple
            className="overflow-hidden p-4 bg-white rounded-full flex-row w-[35vw] items-center justify-center gap-2 absolute bottom-0 right-8"
            style={{
              transform: [{ translateY: "50%" }],
            }}
          >
            <HeartIcon />
            <Text className="font-nunito-semibold text-[#3a3a3a] text-sm">
              +190k
            </Text>
          </Ripple>
        </View>
        <View className="p-6 my-4">
          <View className="flex-row items-center justify-between">
            <Text numberOfLines={2} className="font-cabin-bold text-2xl">
              Géant Concert urbain
            </Text>
            <View
              className="border p-2 rounded-xl"
              style={{ borderColor: "#2EC771" }}
            >
              <Text className="font-nunito-bold text-sm text-primary">
                Concert
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-4 my-6">
            <View className="h-16 w-16 bg-primary-100 rounded-xl items-center justify-center">
              <Calendar2Icon />
            </View>
            <View>
              <Text className="font-cabin-bold text-lg text-primary">
                Mardi 16 Décembre, 2024
              </Text>
              <Text className="font-nunito text-sm">18:00 - 23:00</Text>
            </View>
          </View>

          <View className="flex-row items-center gap-4 my-6">
            <View className="h-16 w-16 bg-primary-100 rounded-xl items-center justify-center">
              <LocationTickIcon color={"#2ECC71"} width={24} height={25} />
            </View>
            <View>
              <Text className="font-cabin-bold text-lg text-primary">
                Place des Martys
              </Text>
              <Text className="font-nunito text-sm">
                Cotonou, Littoral, Bénin
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-4 my-6">
            <View className="h-16 w-16 bg-primary-100 rounded-xl items-center justify-center">
              <CoinIcon width={24} height={25} />
            </View>
            <View>
              <Text className="font-cabin-bold text-lg text-primary">
                2 000 F CFA - 5 000 F CFA
              </Text>
              <Text className="font-nunito text-sm">
                Les prix varient selon le type de ticket choisis
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="font-cabin-bold  text-lg">Notes & Avis</Text>
            <TouchableOpacity>
              <Text className="font-nunito-bold text-sm text-primary">
                Voir Tout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 w-full bg-transparent">
        <Ripple
          className={
            "rounded-full overflow-hidden items-center justify-center my-6 mr-4 self-end"
          }
        >
          <EditIcon width={60} height={60} />
        </Ripple>
        <View className=" bg-primary rounded-t-3xl w-full">
          <View className="flex-row items-center mx-6 my-8 justify-between">
            <View>
              <Text className="font-cabin-bold text-xl text-white">
                3 000 - 10 000 F CFA
              </Text>
              <Text className="text-[#ffdc5d] text-sm">
                50 Tickets restants
              </Text>
            </View>
            <Ripple className="bg-white overflow-hidden rounded-lg p-2 flex-row items-center gap-2">
              <TicketSmallIcon color="#2ECC71" />
              <Text className="font-nunito-bold text-sm text-primary">
                Voir les tickets
              </Text>
            </Ripple>
          </View>

          <SlidingButton
            onSuccess={() => {
              // Handle the successful drag event here
              console.log("Event published!");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Page6;
