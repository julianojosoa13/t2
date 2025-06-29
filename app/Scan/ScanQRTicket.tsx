import {
  CameraView,
  CameraType,
  useCameraPermissions,
  BarcodeScanningResult,
} from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "@/components/shared/Button";
import CameraFrameImage from "@/assets/icons/CameraFrameImage";
import ScannerButtonBG from "@/assets/icons/ScannerButtonBG";
import CrossIcon from "@/assets/icons/CrossIcon";
import PencilIcon from "@/assets/icons/PencilIcon";
import { Link, router } from "expo-router";
import LottieView from "lottie-react-native";
import { useIsFocused } from "@react-navigation/native";

const ScanQRTicket = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  const isFocused = useIsFocused();

  const handleBarCodeScanned = (scanningResult: BarcodeScanningResult) => {
    if (isScanning) {
      setScannedData(scanningResult.data);
      setIsScanning(false);
      //   Alert.alert("QR Code trouvé!", scanningResult.data);
    }
  };

  const toggleScanning = () => {
    setScannedData(null);
    setIsScanning(!isScanning);
  };

  useEffect(() => {
    if (isFocused) {
      toggleScanning();
      // Do something when screen comes into focus
    }
  }, [isFocused]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="items-center justify-center flex-1 p-6">
        <MaterialIcons name="camera-alt" size={50} color={"rgba(0,0,0,0.4)"} />
        <Text className="text-center mt-4 mb-6 font-nunito-bold text-lg text-dark-secondary max-w-[75vw]">
          Nous aurons besoin de votre permission pour utiliser l&apos;appareil
          photo de votre téléphone.
        </Text>
        <Button onPress={requestPermission}>
          <Text className="text-white mx-5 text-lg uppercase font-cabin-bold">
            Autoriser
          </Text>
        </Button>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center h-screen w-screen">
      <CameraView
        ref={cameraRef}
        facing={facing}
        style={{ flex: 1 }}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={isScanning ? handleBarCodeScanned : undefined}
      >
        <View className="flex-1 items-center justify-center">
          {/* Show success message when QR code is found */}
          {scannedData && (
            <View className="absolute top-20 bg-white/90 px-6 py-3 rounded-lg z-10 flex-row items-center gap-1">
              <Text className="font-cabin-bold text-lg text-primary">
                Billet trouvé!
              </Text>
              <LottieView
                loop={false}
                autoPlay
                source={require("@/assets/lotties-animations/success.json")}
                style={{ width: 40, height: 40 }}
              />
            </View>
          )}
          {isScanning && (
            <View className="absolute top-20 bg-transparent px-6 py-3 rounded-lg z-10 items-center">
              <Text className="text-center font-cabin-bold text-white/90 text-xl">
                Recherche de QR Code
              </Text>
              <LottieView
                autoPlay
                loop
                source={require("@/assets/lotties-animations/loading-1.json")}
                style={{ width: 50, height: 50 }}
              />
            </View>
          )}

          <CameraFrameImage />

          <View className="absolute bottom-0 flex-row items-center justify-between w-full p-8 mb-4">
            <TouchableOpacity
              className="w-12 h-12 bg-white rounded-full items-center justify-center"
              onPress={() => router.back()}
            >
              <CrossIcon />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleScanning}>
              <View className="relative">
                <ScannerButtonBG />
                {isScanning && (
                  <View className="absolute inset-0 bg-primary/30 rounded-full" />
                )}
              </View>
            </TouchableOpacity>
            <Link asChild href={"/Scan/ManualTicketValidation"}>
              <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center">
                <PencilIcon />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </CameraView>
    </View>
  );
};

export default ScanQRTicket;
