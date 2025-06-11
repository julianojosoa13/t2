import { Header } from "@/components/shared/Header";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import Ripple from "react-native-material-ripple";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
} from "react-native-reanimated";
import { router } from "expo-router";

import CalendarEditIcon from "@/assets/icons/CalendarEditIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import LocationTickIcon from "@/assets/icons/LocationTickIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import StarIcon from "@/assets/icons/StarIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";

const bgColor = "#EFEFEF";
const fgColor = "#828282";

const Page1 = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Header title="" backTo="" />
      <Animated.View entering={FadeInUp.duration(600)}>
        <TextInput
          placeholder="Nom de l'évenement"
          className="px-4 text-2xl font-cabin-bold"
          multiline
          autoFocus
        />
      </Animated.View>
      <Animated.ScrollView
        entering={FadeInDown.duration(600)}
        exiting={FadeOutDown.duration(600)}
        className="flex-1 bg-white rounded-t-3xl mt-2 pt-4 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-1"
      >
        <Ripple
          className={`bg-[${bgColor}] px-4 h-12 justify-center rounded-full overflow-hidden`}
        >
          <View className="flex flex-row justify-between items-center bg-[#EFEFEF] flex-1">
            <View className="flex-row items-center gap-2">
              <StarIcon />
              <Text className="font-cabin text-[#828282]">
                Type d{"'"}évènement
              </Text>
            </View>
            <ChevronRightIcon />
          </View>
        </Ripple>

        <Text className="my-4 font-cabin-bold">{"Date de l'évenement"}</Text>

        <View className="flex-row items-center justify-between gap-5">
          <Ripple
            className={`bg-[${bgColor}] flex-1 rounded-2xl p-2 overflow-hidden`}
          >
            <View className="flex-row items-center gap-2">
              <CalendarEditIcon />
              <Text className={`text-[${bgColor}] font-cabin text-xs`}>
                Début
              </Text>
            </View>

            <View className="flex-row items-center gap-4 mb-2">
              <Text className={`text-[40px] text-[${fgColor}] font-cabin-bold`}>
                01
              </Text>
              <View>
                <Text className={`text-[${fgColor}] font-cabin text-[16px]`}>
                  Déc
                </Text>
                <Text
                  className={`text-[${fgColor}] text-[16px] font-cabin-semibold`}
                >
                  2025
                </Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <ClockIcon />
                <Text className={`text-[${fgColor}] font-cabin-semibold`}>
                  22h
                </Text>
              </View>

              <ChevronRightIcon />
            </View>
          </Ripple>

          <Ripple
            className={`bg-[${bgColor}] flex-1 rounded-2xl p-2 overflow-hidden`}
          >
            <View className="flex-row items-center gap-2">
              <CalendarEditIcon />
              <Text className={`text-[${bgColor}] font-cabin text-xs`}>
                Fin
              </Text>
            </View>

            <View className="flex-row items-center gap-4 mb-2">
              <Text className={`text-[40px] text-[${fgColor}] font-cabin-bold`}>
                01
              </Text>
              <View>
                <Text className={`text-[${fgColor}] font-cabin text-[16px]`}>
                  Déc
                </Text>
                <Text
                  className={`text-[${fgColor}] text-[16px] font-cabin-semibold`}
                >
                  2025
                </Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <ClockIcon />
                <Text className={`text-[${fgColor}] font-cabin-semibold`}>
                  22h
                </Text>
              </View>

              <ChevronRightIcon />
            </View>
          </Ripple>
        </View>

        <Text className="my-4 font-cabin-bold">
          {"Ouverture de l'évenement"}
        </Text>

        <View className="flex-row items-center justify-between gap-5">
          <Ripple
            className={`bg-primary-100 w-5/12 h-12 overflow-hidden rounded-xl justify-center`}
          >
            <View className="flex-row items-center px-4 gap-2">
              <CheckIcon />
              <Text
                className={`font-nunito-semibold text-[16px] text-primary-300`}
              >
                Public
              </Text>
            </View>
          </Ripple>
          <Ripple
            className={`bg-[${bgColor}] w-5/12 h-12 overflow-hidden rounded-xl justify-center`}
          >
            <View className="flex-row items-center px-4 gap-2">
              <View />
              <Text
                className={`font-nunito-semibold text-[16px] text-[${fgColor}]`}
              >
                Privé
              </Text>
            </View>
          </Ripple>
        </View>

        <Text className="my-4 font-cabin-bold">{"Adresse et emplacement"}</Text>

        <Ripple
          className={`bg-[${bgColor}] px-4 h-12 justify-center rounded-xl overflow-hidden`}
          onPress={() => router.navigate("/CreateEvent/SelectAdress")}
        >
          <View className="flex flex-row justify-between items-center bg-[#EFEFEF] flex-1">
            <View className="flex-row items-center gap-2">
              <LocationTickIcon />

              <Text className="font-cabin text-[#828282]">
                Ajouter une adresse
              </Text>
            </View>

            <ChevronRightIcon />
          </View>
        </Ripple>
        <Image
          source={require("@/assets/images/createEventBg.png")}
          className="absolute bottom-0 -left-10 -z-10 w-full h-[200px]"
        />
        <Ripple
          className={`bg-primary w-16 h-16 rounded-full items-center justify-center absolute bottom-0 right-0 mb-14 mr-2 overflow-hidden`}
          onPress={() => router.navigate("/CreateEvent/Page2")}
        >
          <ChevronRightIcon strokeWidth={2} color="#303338" />
        </Ripple>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Page1;
