import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "../shared/Button";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";
import { router } from "expo-router";
import LottieView from "lottie-react-native";

const EventCreatedModal = ({ visible = false }: { visible?: boolean }) => {
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setShowLoading(true);
      }, 3000);
      setTimeout(() => {
        router.dismissTo("/Events");
      }, 4000);
    }
  }, [visible]);
  return (
    <Modal visible={visible}>
      <StatusBar style="dark" backgroundColor="white" />
      <Animated.View
        entering={FadeInDown}
        className="flex-1 items-center justify-center bg-white h-screen w-screen"
      >
        <Text className="font-cabin-bold text-xl text-primary text-center ">
          Evenement Créé !
        </Text>
        {showLoading ? (
          <LottieView
            autoPlay
            source={require("@/assets/lotties-animations/loading.json")}
            style={{ width: 50, height: 50 }}
          />
        ) : (
          <LottieView
            autoPlay
            source={require("@/assets/lotties-animations/success.json")}
            style={{ width: 60, height: 60 }}
            loop={false}
            speed={0.67}
          />
        )}
      </Animated.View>
    </Modal>
  );
};

export default EventCreatedModal;

const styles = StyleSheet.create({});
