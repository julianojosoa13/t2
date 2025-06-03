import { Redirect } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

// interface Props {}

const Index = () => {
  return (
    <SafeAreaView>
      <Redirect href={"/Onboarding"} />
    </SafeAreaView>
  );
};

export default Index;
