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

const SelectAdressNew = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <KeyboardAvoidingScrollView contentContainerClassName="flex-1 justify-between">
      <View className="realtive top-8 px-4 z-10 flex-row items-center justify-between w-full">
        <Ripple
          className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.825)] shadow-xl items-center justify-center overflow-hidden"
          onPress={() =>
            router.replace("/(root)/CreateEvent/SelectAdressManual")
          }
        >
          <ChevronLeftIcon width={20} height={20} />
        </Ripple>
        <Ripple
          className="bg-white rounded-rull px-2 rounded-full overflow-hidden flex-row items-center gap-0"
          onPress={() => {
            bottomSheetRef.current?.collapse();
            Keyboard.dismiss();
            router.replace("/(root)/CreateEvent/SelectAdress");
          }}
        >
          <MapIcon />
          <Text className="text-center m-2">Explorer sur la carte</Text>
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
        <BottomSheetView className="flex-1 min-h-[200px] pb-8">
          <View className="h-full w-full-4 p-4 justify-between">
            <KeyboardAvoidingScrollView></KeyboardAvoidingScrollView>
            <Button>
              <View className="flex-row items-center justify-center gap-2">
                <Text>Ajouter</Text>
                <AddIcon color="#303338" strokeWidth="2" />
              </View>
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </KeyboardAvoidingScrollView>
  );
};

export default SelectAdressNew;
