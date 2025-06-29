import { Redirect } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

// interface Props {}

const Index = () => {
  return (
    <SafeAreaView>
      <Redirect href={"/(root)"} />
    </SafeAreaView>
  );
};

export default Index;
