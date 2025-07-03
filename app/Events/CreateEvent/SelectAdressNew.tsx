import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import { router } from "expo-router";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Modal,
} from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import Ripple from "react-native-material-ripple";
import customMapStyle from "@/config/cutomMapStyle";

import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef } from "react";
import RotateLeftIcon from "@/assets/icons/RotateLeftIcon";
import AddIcon from "@/assets/icons/AddIcon";
import { Button } from "@/components/shared/Button";
import MapIcon from "@/assets/icons/MapIcon";
import Animated, { SlideInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const SelectAdressNew = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <KeyboardAvoidingScrollView contentContainerClassName="flex-1 justify-between">
      <SafeAreaView className="relative top-5 px-4 z-10 flex-row items-center justify-between w-full">
        <Ripple
          className="w-12 h-12 rounded-full bg-white/30 shadow-xl items-center justify-center overflow-hidden"
          onPress={() =>
            router.replace("/Events/CreateEvent/SelectAdressManual")
          }
        >
          <ChevronLeftIcon width={20} height={20} />
        </Ripple>
        <Ripple
          className="bg-white rounded-rull px-2 rounded-full overflow-hidden flex-row items-center gap-0"
          onPress={() => {
            bottomSheetRef.current?.collapse();
            Keyboard.dismiss();
            router.replace("/Events/CreateEvent/SelectAdress");
          }}
        >
          <MapIcon />
          <Text className="text-center m-2">Explorer sur la carte</Text>
        </Ripple>
      </SafeAreaView>
      <MapView
        style={StyleSheet.absoluteFillObject}
        customMapStyle={customMapStyle}
        region={{
          latitude: -18.8792,
          longitude: 47.5079,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <UrlTile
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />
        <Marker
          coordinate={{ latitude: -18.8792, longitude: 47.5079 }}
          pinColor="green" // Matches your image
        />
      </MapView>

      {/* <Modal className="flex-1 min-h-[200px] max-h-[85%] pb-8 px-4" transparent> */}
      <Animated.View
        entering={SlideInDown}
        className="h-[85%] absolute bottom-0 pb-8 px-4 rounded-t-xl overflow-hidden pt-2 bg-white"
      >
        <View className="self-center mb-2 h-1 w-8 rounded-full bg-dark"></View>
        <KeyboardAvoidingScrollView
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="font-cabin-bold text-primary text-xl mt-4">
            Lieu de l’évenement
          </Text>
          <Text className="text-xs font-nunito">
            Donner une localisation précise du lieu de l’évenement à vos cliens
            afin de mieux les orienter
          </Text>

          {/* Nom de l'emplacement */}
          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Nom de l&apos;emplacement
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
            placeholder="Entrer le nom de l'emplacement"
          />

          {/* Quartier  */}

          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Quartier
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
            placeholder="Entrer le nom du quartiert"
          />

          {/* Commune */}
          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Commune
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
            placeholder="Entrer le nom de la commune"
          />

          {/* Ville */}
          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Ville
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
            placeholder="Entrer le nom de la ville"
          />

          {/* Departement */}

          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Nom du departement
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
            placeholder="Entrer le nom du departement"
          />

          <Text className="mt-4 font-nunito-semibold text-sm text-dark-secondary">
            Description supplémentaire
          </Text>

          <TextInput
            className="bg-gray-150 my-2 rounded-xl px-4 font-nunito-semibold text-lg"
            placeholder={`Ajouter une description qui permettra aux participants  de facilement s’oienter dans la  pour atteindre le lieu de votre évenement`}
            multiline
          />
        </KeyboardAvoidingScrollView>
        <Button>
          <View className="flex-row items-center justify-center gap-2">
            <Text>Ajouter</Text>
            <AddIcon color="#303338" strokeWidth="2" />
          </View>
        </Button>
      </Animated.View>
      {/* </Modal> */}
    </KeyboardAvoidingScrollView>
  );
};

export default SelectAdressNew;
