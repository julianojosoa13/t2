import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRightIcon";
import NotificationIcon from "@/assets/icons/NotificationIcon";
import SecurityIcon from "@/assets/icons/SecurityIcon";
import DevicesMessage from "@/assets/icons/DevicesMessage";
import ShieldTick from "@/assets/icons/ShieldTick";
import Profile2UsersIcon from "@/assets/icons/Profile2UsersIcon";
import ChartsIcon from "@/assets/icons/ChartsIcon";
import TicketAltIcon from "@/assets/icons/TicketAltIcon";
import EmptyWalletIcon from "@/assets/icons/EmptyWalletIcon";
import ScanIcon from "@/assets/icons/ScanIcon";
import LogOutIcon from "@/assets/icons/LogOutIcon";

const AccountScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-[#f5f5f5]"
    >
      <View className="h-[20vh] bg-primary-100 w-full rounded-b-[40]"></View>

      <Image
        source={require("@/assets/images/profile-picture.jpg")}
        className="w-24 h-24 rounded-full border-4 border-primary self-center"
        style={{ transform: [{ translateY: "-50%" }] }}
      />
      <Text className="font-cabin-bold text-dark text-xl text-center -mt-12">
        Rikardo Binao
      </Text>
      <View className="px-6 my-4">
        <Text className="font-nunito text-sm text-dark-secondary mt-6 mb-4 uppercase">
          Général
        </Text>
        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <ProfileIcon />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Profile
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <NotificationIcon />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Notifications
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <SecurityIcon />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Sécurité
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <DevicesMessage />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Centre d&apos;aide
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <ShieldTick />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Politique de confidentialité
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <Profile2UsersIcon color="#2ECC71" />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Inviter des amis
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Text className="font-nunito text-sm text-dark-secondary mt-6 mb-4 uppercase">
          Outils vendeur
        </Text>
        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <ChartsIcon />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Rapports Analytics
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/Events" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <TicketAltIcon />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Evenements & Tickets
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <EmptyWalletIcon />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Portefeuille
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Link href="/Scan" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <ScanIcon />
            <Text className="font-nunito-bold text-dark text-lg flex-1">
              Scan & Véfication
            </Text>
            <ChevronRightIcon strokeWidth={2} />
          </TouchableOpacity>
        </Link>

        <Text className="font-nunito text-sm text-dark-secondary mt-6 mb-4 uppercase">
          Déconnexion
        </Text>
        <Link href="/(root)/Account" asChild>
          <TouchableOpacity
            className={"flex-row bg-white items-center px-4 py-2 gap-4 mb-[2]"}
          >
            <LogOutIcon />
            <Text className="font-nunito-bold text-red text-lg flex-1">
              Déconnexion
            </Text>
          </TouchableOpacity>
        </Link>

        <View className="mb-10"></View>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
