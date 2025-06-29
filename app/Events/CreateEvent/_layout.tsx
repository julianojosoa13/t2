import { Stack } from "expo-router";
import React from "react";

// create a component
const RootLayout = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

//make this component available to the app
export default RootLayout;
