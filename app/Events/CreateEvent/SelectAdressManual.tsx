import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import QuestionRoundedFillIcon from "@/assets/icons/QuestionRoundedFillIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import { router } from "expo-router";
import { Text, View, TextInput, StyleSheet, Keyboard } from "react-native";
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

const KeyboardListener = ({ onKeyboardShow }: any) => {
  useEffect(() => {
    // Add keyboard did show listener
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        // Execute the provided function with keyboard height and duration
        onKeyboardShow(event);
      }
    );

    // Clean up the listener when component unmounts
    return () => {
      keyboardDidShowListener.remove();
    };
  }, [onKeyboardShow]); // Re-run effect if onKeyboardShow changes

  return null; // This component doesn't render anything
};

const SelectAdressManual = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleKeyboardShow = (event: any) => {
    console.log("Keyboard appeared!", {
      height: event.endCoordinates.height,
      duration: event.duration,
    });
    // Add your custom logic here
    bottomSheetRef.current?.snapToIndex(2);
  };

  return (
    <KeyboardAvoidingScrollView contentContainerClassName="flex-1 justify-between">
      <View className="realtive top-14 px-4 z-10 flex-row items-center justify-between w-full">
        <Ripple
          className="w-12 h-12 rounded-full bg-white/30 shadow-xl items-center justify-center overflow-hidden"
          onPress={() => router.back()}
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
          <Text className="text-center m-2 font-cabin-bold">
            Explorer sur la carte
          </Text>
        </Ripple>
      </View>
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
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["55%", "85%"]}
      >
        <BottomSheetView className="flex-1 min-h-[200px] pb-32">
          <View className="h-full w-full-4 p-4">
            <View className="flex-row items-center gap-2">
              <View className="rounded-full bg-gray-100 px-4 py-0 flex-row items-center gap-2 flex-1">
                <KeyboardListener onKeyboardShow={handleKeyboardShow} />
                <SearchIcon />
                <TextInput
                  autoFocus
                  placeholder="Rechercher un emplacement..."
                  className="font-nunito-semibold"
                  onBlur={() => bottomSheetRef.current?.collapse()}
                />
              </View>

              <Ripple
                className="rounded-full bg-gray-100 px-4 py-0 justify-center items-center w-12 h-12 overflow-hidden"
                onPress={() =>
                  router.replace("/Events/CreateEvent/SelectAdressNew")
                }
              >
                <AddIcon />
              </Ripple>
            </View>

            <Text className="font-cabin-bold mt-2">Vos adresses manuelles</Text>

            <Ripple className="my-2 py-2 gap-3 flex-row items-center justify-between">
              <RotateLeftIcon />
              <View className="flex-1">
                <Text className="font-nunito-semibold text-[13px]">
                  Bar Le Sterneum, Djadjo, Abomey-Calavi
                </Text>
              </View>
              <AddIcon />
            </Ripple>
            <Ripple className="my-2 py-2 gap-3 flex-row items-center justify-between">
              <RotateLeftIcon />
              <View className="flex-1">
                <Text className="font-nunito-semibold text-[13px]">
                  Place le Renouveau, Godomey
                </Text>
              </View>
              <AddIcon />
            </Ripple>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </KeyboardAvoidingScrollView>
  );
};

export default SelectAdressManual;
