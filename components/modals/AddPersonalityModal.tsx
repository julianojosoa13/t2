import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  FadeInDown,
  ZoomIn,
  ZoomInDown,
} from "react-native-reanimated";
import Ripple from "react-native-material-ripple";
import UserAddIcon from "@/assets/icons/UserAddIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import { router } from "expo-router";

const AddPersonalityModal = ({
  visible = false,
  onRequestClose = undefined,
}: {
  visible?: boolean;
  onRequestClose?: () => void;
}) => {
  return (
    <Modal transparent visible={visible} onRequestClose={onRequestClose}>
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(255,255,255,0.75)",
        }}
        onPress={onRequestClose}
      />
      <Animated.View
        className={
          "absolute bottom-1 bg-white elevation-sm rounded-t-[40] mx-4 overflow-hidden"
        }
        // style={{ transform: [{ translateY: "-50%" }] }}
        entering={FadeInDown.delay(50)}
      >
        <Image
          source={require("@/assets/images/personality.png")}
          className="w-[94vw] h-[15vh]"
          resizeMode="cover"
        />
        <Text className="text-2xl font-cabin-bold text-dark text-center mb-4 mt-8 mx-2">
          Vos personnalités qui seront là !
        </Text>
        <Text className="font-nunito text-dark-secondary text-center mx-4 mb-6 mt-2">
          Ajoutez des personnalités et figures public qui seront présents à
          votre évenement permet de mieux attirer les utilisateurs à participer
          à l&apos;évenement
        </Text>
        <View className="my-4 flex-row items-center justify-around">
          <Ripple
            className={
              "flex-row items-center gap-2 justify-center py-3 px-8 overflow-hidden  rounded-xl bg-primary"
            }
            onPress={() => {
              onRequestClose && onRequestClose();
              router.navigate("/Events/CreateEvent/Page5");
            }}
          >
            {/* <UserAddIcon color={"#292d32"} /> */}
            <Image
              source={require("@/assets/images/user-add.png")}
              className="w-8 h-8 -my-2 -mr-2"
            />
            <Text className="font-nunito-semibold text-lg text-dark">
              {" "}
              Ajouter
            </Text>
          </Ripple>

          <Ripple
            className={
              "flex-row items-center gap-2 justify-center py-3 px-8 overflow-hidden rounded-xl bg-[#e0e0e0]"
            }
            onPress={() => {
              onRequestClose && onRequestClose();
              router.navigate("/Events/CreateEvent/Page6");
            }}
          >
            <Text className="font-nunito-semibold text-lg text-dark">
              Continuer
            </Text>
            <ChevronRightIcon color={"#292d32"} />
          </Ripple>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default AddPersonalityModal;

const styles = StyleSheet.create({});
