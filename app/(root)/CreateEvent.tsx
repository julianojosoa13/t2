import { Header } from "@/components/shared/Header";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";

const bgColor = "#EFEFEF";
const fgColor = "#828282";

const CreateEvent = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Header title="" backTo="Onboarding" />

      <TextInput
        placeholder="Nom de l'évenement"
        className="px-4 text-2xl font-cabin-bold"
        multiline
      />
      <ScrollView
        className="flex-1 bg-white rounded-t-3xl mt-2 pt-4 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-1"
      >
        <Ripple
          className={`bg-[${bgColor}] px-4 h-12 justify-center rounded-full overflow-hidden`}
        >
          <View className="flex flex-row justify-between items-center bg-[#EFEFEF] flex-1">
            <View className="flex-row items-center gap-2">
              <AntDesign name="staro" size={20} color={fgColor} />
              <Text className="font-cabin text-[#828282]">
                Type d{"'"}évènement
              </Text>
            </View>
            <Entypo name="chevron-thin-right" size={20} color={fgColor} />
          </View>
        </Ripple>

        <Text className="my-4 font-cabin-bold">{"Date de l'évenement"}</Text>

        <View className="flex-row items-center justify-between gap-5">
          <Ripple
            className={`bg-[${bgColor}] flex-1 rounded-2xl p-2 overflow-hidden`}
          >
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="edit-calendar" size={20} color={fgColor} />
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
                <AntDesign name="clockcircleo" size={18} color={fgColor} />
                <Text className={`text-[${fgColor}] font-cabin-semibold`}>
                  22h
                </Text>
              </View>

              <Entypo name="chevron-thin-right" size={20} color={fgColor} />
            </View>
          </Ripple>

          <Ripple
            className={`bg-[${bgColor}] flex-1 rounded-2xl p-2 overflow-hidden`}
          >
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="edit-calendar" size={20} color={fgColor} />
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
                <AntDesign name="clockcircleo" size={18} color={fgColor} />
                <Text className={`text-[${fgColor}] font-cabin-semibold`}>
                  22h
                </Text>
              </View>

              <Entypo name="chevron-thin-right" size={20} color={fgColor} />
            </View>
          </Ripple>
        </View>

        <Text className="my-4 font-cabin-bold">
          {"Ouverture de l'évenement"}
        </Text>

        <View className="flex-row items-center justify-between gap-5">
          <Ripple
            className={`bg-primary-100 w-2/5 h-12 overflow-hidden rounded-xl justify-center`}
          >
            <View className="flex-row items-center px-4 gap-2">
              <AntDesign name="check" color="#2C7D4E" size={18} />
              <Text
                className={`font-nunito-semibold text-[16px] text-primary-300`}
              >
                Public
              </Text>
            </View>
          </Ripple>
          <Ripple
            className={`bg-[${bgColor}] w-2/5 h-12 overflow-hidden rounded-xl justify-center`}
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
          className={`bg-[${bgColor}] px-4 h-12 justify-center rounded-full overflow-hidden`}
        >
          <View className="flex flex-row justify-between items-center bg-[#EFEFEF] flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialCommunityIcons
                name="map-marker-check-outline"
                size={22}
                color={fgColor}
              />

              <Text className="font-cabin text-[#828282]">
                Ajouter une adresse
              </Text>
            </View>

            <Entypo name="chevron-thin-right" size={20} color={fgColor} />
          </View>
        </Ripple>
        <Image
          source={require("@/assets/images/createEventBg.png")}
          className="absolute bottom-0 -left-10 -z-10 w-full h-[200px]"
        />
        <Ripple
          className={`bg-primary w-16 h-16 rounded-full items-center justify-center absolute bottom-0 right-0 mb-14 mr-5 overflow-hidden`}
        >
          <Entypo name="chevron-thin-right" size={20} color={"#303338"} />
        </Ripple>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;
