import { View, Text } from "react-native";
import React from "react";
import { Header } from "@/components/shared/Header";

export default function Page2() {
  return (
    <View className="bg-primary flex-1">
      <Header title="Festival du Lust" backTo="/(root)/CreateEvent/Page1" />
    </View>
  );
}
