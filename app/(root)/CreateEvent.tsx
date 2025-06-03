import { Button } from "@/components/shared/Button";
import { Header } from "@/components/shared/Header";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { FontAwesome6 } from "@expo/vector-icons";
import Ripple from "react-native-material-ripple";
const CreateEvent = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Header title="" backTo="Onboarding" />
      <TextInput
        placeholder="Nom de l'évenement"
        className="px-4 text-2xl font-cabin-bold"
      />
      <ScrollView
        className="flex-1 bg-white rounded-t-3xl mt-2 pt-4"
        showsVerticalScrollIndicator={false}
      >
        <Ripple
          className={"bg-[#EFEFEF] mx-4 px-4 h-12 justify-center rounded-full"}
        >
          <View className="flex flex-row justify-between">
            <View className="flex-row items-center gap-2">
              <Entypo name="star-outlined" size={20} color={"#828282"} />
              <Text className="font-cabin text-[#828282]">
                Type d{"'"}évènement
              </Text>
            </View>
            <Entypo name="chevron-thin-right" size={20} color="#828282" />
          </View>
        </Ripple>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEvent;
