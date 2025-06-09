import { View, Text, TextInput, Image, Switch } from "react-native";
import React, { useState } from "react";
import { Header } from "@/components/shared/Header";
import Ripple from "react-native-material-ripple";
import Animated, {
  FadeInDown,
  FadeOutDown,
  FadeOutRight,
} from "react-native-reanimated";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import SwitchToggle from "react-native-switch-toggle";

const Page2 = () => {
  const [switchOn, setSwitchOn] = useState(false);
  return (
    <View className="bg-primary flex-1">
      <Header title="Festival du Lust" backTo="" />

      <View className="absolute top-10 right-4">
        <Ripple
          className={
            "bg-white rounded-full h-10 px-5 items-center justify-center overflow-hidden"
          }
        >
          <Text>Enreg. et ontinuer</Text>
        </Ripple>
      </View>
      <Animated.ScrollView
        entering={FadeInDown.duration(600)}
        exiting={FadeOutDown.duration(600)}
        className="flex-1 bg-white rounded-t-3xl mt-2 pt-4 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-1"
      >
        <View className="h-1/3 bg-gray-150 rounded-lg p-4">
          <Text className="font-cabin-semibold text-lg">Description</Text>
          <TextInput
            placeholder="Ajoutez une description à votre évènement..."
            multiline
            maxLength={300}
            className="font-nunito"
          />
        </View>
        <View className="flex-row items-center justify-normal gap-2 my-4">
          <SwitchToggle
            switchOn={switchOn}
            onPress={() => setSwitchOn(!switchOn)}
            circleColorOff="#FFF"
            circleColorOn="#FFF"
            backgroundColorOn="#2ECC71"
            backgroundColorOff="#E0E0E0"
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
            containerStyle={{
              width: 55,
              height: 30,
              borderRadius: 15,
              padding: 4,
              paddingLeft: 0,
            }}
          />
          <Text
            className="text-lg font-cabin"
            onPress={() => setSwitchOn(!switchOn)}
          >
            Limiter le nombre de place disponible
          </Text>
        </View>

        {switchOn && (
          <Animated.View
            className="rounded-full bg-gray-150 px-4"
            entering={FadeInDown}
            exiting={FadeOutRight}
          >
            <TextInput
              keyboardType="number-pad"
              placeholder="Nombre de place disponible"
              className="font-nunito-semibold"
              autoFocus
            />
          </Animated.View>
        )}

        <Image
          source={require("@/assets/images/createEventBg.png")}
          className="absolute bottom-0 -left-10 -z-10 w-full h-[200px]"
        />
        <Ripple
          className={`bg-primary w-16 h-16 rounded-full items-center justify-center absolute bottom-0 right-0 mb-14 mr-2 overflow-hidden`}
          onPress={() => router.navigate("/CreateEvent/SelectAdress")}
        >
          <Entypo name="chevron-thin-right" size={20} color={"#303338"} />
        </Ripple>
      </Animated.ScrollView>
    </View>
  );
};

export default Page2;
