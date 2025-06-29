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
import Ripple from "react-native-material-ripple";
import AddIcon from "@/assets/icons/AddIcon";
import { router } from "expo-router";
import ChevronDownIcon from "@/assets/icons/ChevronDownIcon";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import TicketSmallIcon from "@/assets/icons/TicketSmallIcon";
import EventCard from "@/components/EventCard";

const EventsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="my-1" />
      <Header title="Evenements & Tickets"></Header>
      <View className="border-b-[1px] -mt-2 border-gray" />

      <ScrollView className="flex-1 bg-white">
        <TouchableOpacity className="bg-gray-100 items-center flex-row px-5 py-2 m-4 gap-2 rounded-full overflow-hidden self-start">
          <Text className="font-cabin-bold text-dark-secondary">Tous</Text>
          <ChevronDownIcon />
        </TouchableOpacity>
        <Text className="font-nunito-bold text-gray-200 mx-6">
          26 Septembre
        </Text>

        <EventCard
          eventAddress="Place de l'amazon, Cotonou; Littoral"
          eventDate="Mardi 26 Sept. 2024 à 16h"
          eventName="Géant Concert urbain"
          imageSource={require("@/assets/images/grand-concert.png")}
          maxPrice={4000}
          minPrice={2000}
          publishedDate="Publié le 12 Avril 2024"
          ticketsSold={2}
        />
        <EventCard
          eventAddress="Place de l'amazon, Cotonou; Littoral"
          eventDate="Mardi 26 Sept. 2024 à 16h"
          eventName="Night Party"
          imageSource={require("@/assets/images/nightParty.png")}
          maxPrice={4500}
          minPrice={3200}
          publishedDate="Publié le 12 Avril 2024"
          ticketsSold={10}
        />
      </ScrollView>
      <Ripple
        className={
          "w-16 h-16 bg-primary rounded-full overflow-hidden items-center justify-center absolute bottom-0 right-0 mx-6 my-12"
        }
        onPress={() => router.navigate("/Events/CreateEvent/Onboarding")}
      >
        <AddIcon strokeWidth="3" color="black" />
      </Ripple>
    </View>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({});
