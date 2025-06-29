//import liraries
import HeartIcon from "@/assets/icons/HeartIcon";
import Home2Icon from "@/assets/icons/Home2Icon";
import Ticket2Icon from "@/assets/icons/Ticket2Icon";
import UserSquare from "@/assets/icons/UserSquare";
import { Tabs } from "expo-router";

import React from "react";

// create a component
const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#2ECC71" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Home2Icon color={focused ? "#2ECC71" : "#828282"} />
          ),
          title: "Accueil",
        }}
      />

      <Tabs.Screen
        name="FavoriteScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <HeartIcon color={focused ? "#2ECC71" : "#828282"} />
          ),
          title: "Favoris",
        }}
      />

      <Tabs.Screen
        name="TicketsScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ticket2Icon color={focused ? "#2ECC71" : "#828282"} />
          ),
          title: "Tickets",
        }}
      />

      <Tabs.Screen
        name="Account"
        options={{
          tabBarIcon: ({ focused }) => (
            <UserSquare color={focused ? "#2ECC71" : "#828282"} />
          ),
          title: "Compte",
        }}
      />
    </Tabs>
  );
};

//make this component available to the app
export default RootLayout;
