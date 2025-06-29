import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TicketSmallIcon from "@/assets/icons/TicketSmallIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";

const EventCard = ({
  eventName,
  minPrice,
  maxPrice,
  eventAddress,
  eventDate,
  ticketsSold,
  publishedDate,
  imageSource,
  onPress = undefined,
}: {
  eventName: string;
  minPrice: number;
  maxPrice: number;
  eventAddress: string;
  eventDate: string;
  ticketsSold: number;
  publishedDate: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      className="rounded-3xl bg-white overflow-hidden m-6"
      style={{ elevation: 1 }}
      onPress={onPress}
    >
      <Image
        source={imageSource}
        className="h-[25vh] rounded-3xl w-full"
        resizeMode="cover"
      />
      <View
        className="bg-white py-2 px-4 mr-6 rounded-full self-end"
        style={{ transform: [{ translateY: "-50%" }], elevation: 1 }}
      >
        <Text className="font-cabin-bold text-lg text-primary">
          {minPrice} - {maxPrice} F CFA
        </Text>
      </View>
      <Text className="text-dark font-cabin-bold text-lg mx-4 -mt-4">
        {eventName}
      </Text>
      <View className="px-8 py-2">
        <View className="items-center flex-row gap-2 my-2">
          <LocationTickIcon />
          <Text className="text-dark-secondary font-nunito">
            {eventAddress}
          </Text>
        </View>

        <View className="items-center flex-row gap-2 my-2">
          <ClockIcon width={18} height={18} />
          <Text className="text-dark-secondary font-nunito">{eventDate}</Text>
        </View>

        <View className="items-center flex-row gap-2 my-2">
          <TicketSmallIcon color="#2ECC71" width={22} height={22} />
          <Text className="text-primary font-nunito">
            {ticketsSold} Tickets vendu
          </Text>
        </View>
      </View>
      <Text className="text-[#cccccc] mb-4 self-end mr-6 text-sm">
        Publié le {publishedDate}
      </Text>
    </TouchableOpacity>
  );
};

export default EventCard;
