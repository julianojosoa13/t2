import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/shared/Header";
import Ripple from "react-native-material-ripple";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import GaleryImageIcon from "@/assets/icons/GaleryImageIcon";
import AddIcon from "@/assets/icons/AddIcon";
import PictureFrameIcon from "@/assets/icons/PictureFrameIcon";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/toast.config";

type SelectedImage = {
  uri: string;
  id: string;
};

const Page3 = () => {
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);

  const pickImage = async () => {
    if (selectedImages.length >= 10) {
      Toast.show({
        ...toastConfig,
        type: "error",
        text1: "Galerie",
        text2: "Vous avez déjà séléctioné le maximum de 10 images!",
      });

      return;
    }
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    // Launch image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const newImages = result.assets.map((asset) => ({
        uri: asset.uri,
        id: Math.random().toString(36).substring(7),
      }));
      setSelectedImages([...selectedImages, ...newImages]);
    }
  };

  const removeImage = (id: string) => {
    setSelectedImages(selectedImages.filter((img) => img.id !== id));
  };

  useEffect(() => {
    if (selectedImages.length > 10) {
      const first10Images: SelectedImage[] = selectedImages?.filter(
        (_, index) => index < 10
      );
      setSelectedImages(first10Images);
    }
  }, [selectedImages]);

  const renderImagePlaceholder = (index: number, isLarge = false) => {
    if (selectedImages[index]) {
      return (
        <View
          className={`${
            isLarge ? "h-[358px]" : "h-[128px]"
          } rounded-3xl overflow-hidden `}
        >
          <Image
            source={{ uri: selectedImages[index].uri }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <TouchableOpacity
            className="absolute top-2 right-2 h-8 w-8 items-center justify-center bg-white/50 p-1 rounded-full"
            onPress={() => removeImage(selectedImages[index].id)}
          >
            <Text>✕</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <TouchableOpacity
        className={`${
          isLarge ? "h-[358px]" : "h-[128px]"
        } p-4 bg-[#D7D7D7] rounded-3xl mt-2 gap-2 ${!isLarge && "flex-grow"}`}
        onPress={pickImage}
      >
        <View className="flex-1 self-center items-center justify-center">
          <GaleryImageIcon
            width={isLarge ? undefined : 40}
            height={isLarge ? undefined : 40}
          />
        </View>
        <View className="flex-row items-center justify-between">
          <View />
          <TouchableOpacity
            className="absolute bottom-2 right-2 h-[20px] w-[20px] rounded-full overflow-hidden bg-white items-center justify-center"
            hitSlop={8}
            onPress={pickImage}
          >
            <AddIcon />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="bg-primary flex-1">
      <Header title="Festival du Lust" backTo="" />

      <SafeAreaView className="absolute top-7 right-4">
        <Ripple
          className="bg-white rounded-full h-10 px-5 items-center justify-center overflow-hidden"
          onPress={() => {
            if (selectedImages.length < 3) {
              Alert.alert(
                "Attention",
                "Vous devez ajouter au moins 3 images pour continuer"
              );
              return;
            }
            router.navigate("/Events/CreateEvent/Page4");
          }}
        >
          <Text>Enreg. et continuer</Text>
        </Ripple>
      </SafeAreaView>
      <Text className="mx-4 font-cabin-bold text-3xl">
        Gallerie d&apos;image
      </Text>
      <Text className="mx-4 font-nunito text-sm mb-2">
        Ajouter minimum 3 images de l&apos;évenements pour continuer
      </Text>
      <Animated.ScrollView
        entering={FadeInDown.duration(600)}
        exiting={FadeOutDown.duration(600)}
        className="flex-1 bg-white rounded-t-3xl mt-2 pt-4"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-1"
      >
        <View className="mx-6">{renderImagePlaceholder(0, true)}</View>

        {selectedImages.length <= 1 && (
          <View className="flex-row items-center gap-4 mt-10 mx-6">
            <View className="w-[128px] h-[128px]">
              {renderImagePlaceholder(1)}
            </View>
            <View className="w-[128px] h-[128px]">
              {renderImagePlaceholder(2)}
            </View>
          </View>
        )}

        {/* Additional images if needed */}
        {selectedImages.length > 1 && (
          <ScrollView
            horizontal
            className="mb-28"
            contentContainerClassName="pl-6 pr-6"
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-row items-center gap-4 justify-evenly mt-4">
              {selectedImages.slice(1).map((image, index) => (
                <View
                  key={image.id}
                  className="h-[128px] w-[128px] rounded-3xl overflow-hidden flex-grow"
                >
                  <Image
                    source={{ uri: image.uri }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                  <TouchableOpacity
                    className="absolute top-2 right-2 bg-white/50 p-1 items-center justify-center h-8 w-8 rounded-full"
                    onPress={() => removeImage(image.id)}
                  >
                    <Text>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <View className="flex-row items-center gap-4 mx-4 justify-evenly mt-4 w-[128px]">
              {selectedImages.length < 10 &&
                renderImagePlaceholder(selectedImages.length)}
            </View>
          </ScrollView>
        )}

        <View className="absolute bottom-8 py-4 flex-row items-center gap-4 mx-6">
          <View className="flex-row items-center justify-between flex-grow">
            <View className="flex-row items-center gap-2">
              <PictureFrameIcon />
              <Text className="font-cabin text-xl">Galerie</Text>
            </View>

            <Text className="font-nunito-bold text-dark-secondary text-sm">
              {selectedImages.length} Images sélectionnées
            </Text>
          </View>

          <TouchableOpacity
            className="bg-primary h-16 w-16 rounded-full items-center justify-center"
            onPress={pickImage}
          >
            <AddIcon color="black" strokeWidth="2" />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Page3;
