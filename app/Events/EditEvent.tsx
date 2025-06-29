import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ripple from "react-native-material-ripple";
import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import { router } from "expo-router";
import GaleryAddIcon from "@/assets/icons/GaleryAddIcon";
import TextIcon from "@/assets/icons/TextIcon";
import Edit2Icon from "@/assets/icons/Edit2Icon";
import ShapesIcon from "@/assets/icons/ShapesIcon";
import LocationAdd from "@/assets/icons/LocationAdd";
import CalendarAddIcon from "@/assets/icons/CalendarAddIcon";
import FirstLineIcon from "@/assets/icons/FirstLineIcon";
import TicketStarIcon from "@/assets/icons/TicketStarIcon";
import Profile2UsersIcon from "@/assets/icons/Profile2UsersIcon";
import GaleryImageIcon from "@/assets/icons/GaleryImageIcon";
import { Button } from "@/components/shared/Button";

const EditEvent = () => {
  return (
    <View className="flex-1">
      <Ripple
        className={
          "absolute top-0 mt-10 mx-4 p-4 items-center justify-center bg-gray rounded-full overflow-hidden z-10"
        }
        onPress={() => {
          router.back();
        }}
      >
        <ChevronLeftIcon />
      </Ripple>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white"
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="h-[33vh] w-full bg-primary-100 items-center justify-center">
          <TouchableOpacity className="opacity-60 my-8">
            <GaleryAddIcon width={80} height={80} />
          </TouchableOpacity>

          <Text className="font-nunito-bold text-dark-secondary">
            Ajouter des images banières{" "}
          </Text>
          <Text className="text-dark-secondary font-nunito">
            Jusqu&apos;à 3 images{" "}
          </Text>
        </View>
        <View className="p-4 bg-white">
          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 my-4"
            onPress={() => {
              router.navigate("/Events/CreateEvent/Page1");
            }}
          >
            <TextIcon />
            <View className="flex-1">
              <Text className="font-nunito-bold text-primary text-lg">
                Nom de l&apos;évenement
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Ajouter le nom de l’évenement
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>

          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 my-4"
            onPress={() => {
              router.navigate("/Events/CreateEvent/Page1");
            }}
          >
            <ShapesIcon />
            <View className="flex-1">
              <Text className="font-nunito-bold text-primary text-lg">
                Type d&apos;évenement
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Selectionner le type d’évenement pour mieux catégoriser votre
                évenement
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>

          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 my-4"
            onPress={() => {
              router.navigate("/Events/CreateEvent/SelectAdress");
            }}
          >
            <LocationAdd />
            <View className="flex-1 ">
              <Text className="font-nunito-bold text-primary text-lg">
                Lieu de l&apos;évenement
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Enrégistrer le lieu de l&apos;évenement afin d&apos;orienter les
                clients
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>

          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 my-4"
            onPress={() => {
              router.navigate("/Events/CreateEvent/Page1");
            }}
          >
            <CalendarAddIcon />
            <View className="flex-1 ">
              <Text className="font-nunito-bold text-primary text-lg">
                Date & Heures
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Selectionner le type d’évenement pour mieux catégoriser votre
                évenement
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>

          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 my-4"
            onPress={() => {
              router.navigate("/Events/CreateEvent/Page2");
            }}
          >
            <FirstLineIcon />
            <View className="flex-1 ">
              <Text className="font-nunito-bold text-primary text-lg">
                Description de l&apos;évenement
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Décrivez l&apos;évenement pour permettre a votre public de mieux
                cerné le but de l&apos;évenement et pourquoi cela pourrait les
                intéressé
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>

          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 my-4"
            onPress={() => {
              router.navigate("/Events/CreateEvent/Page4");
            }}
          >
            <TicketStarIcon width={25} height={25} />
            <View className="flex-1 ">
              <Text className="font-nunito-bold text-primary text-lg">
                Tickets & Prix
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Ajoutez les tickets disponibles pour les participants à votre
                évenement et définissez les prix de ces tickets.
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>

          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 my-4"
            onPress={() => {
              router.navigate("/Events/CreateEvent/Page5");
            }}
          >
            <Profile2UsersIcon width={25} height={25} />
            <View className="flex-1 ">
              <Text className="font-nunito-bold text-primary text-lg">
                Invités spéciaux
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Ajouter les invités que vous attendez pour à votre évenement.
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>

          <Ripple
            className="flex-row items-center justify-between p-2 gap-4 mt-4 mb-12"
            onPress={() => {
              router.navigate("/Events/CreateEvent/Page3");
            }}
          >
            <GaleryImageIcon width={25} height={25} />
            <View className="flex-1 ">
              <Text className="font-nunito-bold text-primary text-lg">
                Galerie
              </Text>
              <Text className="font-nunito text-sm text-dark-secondary">
                Ajouter les invités que vous attendez pour à votre évenement.
              </Text>
            </View>

            <Edit2Icon />
          </Ripple>
          <Button>Enrégistrer </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditEvent;

const styles = StyleSheet.create({});
