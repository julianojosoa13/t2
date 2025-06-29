import { Alert, Text, TextInput, View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Header } from "@/components/shared/Header";
import ManualScanImage from "@/assets/icons/ManualScanImage";
import { Button } from "@/components/shared/Button";
import Ripple from "react-native-material-ripple";
import { router } from "expo-router";

const OTP_LENGTH = 6;

const ManualTicketValidationScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputs = useRef<TextInput[]>(Array(OTP_LENGTH).fill(null));

  const handleChangeText = (text: string, index: number) => {
    // Handle paste operation
    if (text.length > 1) {
      const pastedOtp = text.split("").slice(0, OTP_LENGTH);
      const newOtp = [...otp];

      pastedOtp.forEach((char, i) => {
        if (i < OTP_LENGTH) {
          newOtp[i] = char;
        }
      });

      setOtp(newOtp);

      // Focus the last filled input
      const lastFilledIndex = Math.min(pastedOtp.length - 1, OTP_LENGTH - 1);
      if (lastFilledIndex < OTP_LENGTH - 1) {
        inputs.current[lastFilledIndex + 1]?.focus();
      }
      return;
    }

    // Handle single character input
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus next input if there's a value
    if (text && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace on empty input
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    // Clear the field when focused (optional behavior)
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
  };

  const getOtpString = () => {
    return otp.join("");
  };

  useEffect(() => {
    if (getOtpString().length === 6) {
      Alert.alert("OTP", getOtpString());
    }
  }, [otp]);

  return (
    <View className="flex-1 bg-[#edfaff] h-full w-full justify-between">
      <View className="my-1">
        <Header title="Scan & Vérification - Code de vérification"></Header>
      </View>
      <View className="p-6 gap-6">
        <View className="self-center">
          <ManualScanImage />
        </View>
        <Text className="font-cabin-bold text-lg text-dark text-center">
          Saisissez le code du ticket
        </Text>

        <View
          className="rounded-3xl p-4 border-2 flex-row items-center justify-evenly px-4 h-30"
          style={{ borderColor: "#2ECC71" }}
        >
          {Array(OTP_LENGTH)
            .fill(0)
            .map((_: any, index: number) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  if (ref) {
                    inputs.current[index] = ref;
                  }
                }}
                className="border-b-4 w-8 border-primary font-cabin-bold text-xl text-primary-dark"
                maxLength={index === 0 ? OTP_LENGTH : 1}
                keyboardType="number-pad"
                value={otp[index]}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                onFocus={() => handleFocus(index)}
                textAlign="center"
                selectTextOnFocus
              />
            ))}
        </View>
      </View>
      <View className="p-6 gap-4">
        <Button>Vérifier le ticket</Button>
        <Ripple
          className={
            "bg-gray-300 p-4 rounded-2xl overflow-hidden items-center justify-center mb-6"
          }
          onPress={() => router.dismissTo("/Scan/ScanQRTicket")}
        >
          <Text className="font-cabin text-dark text-lg">
            Scanner le QR Code
          </Text>
        </Ripple>
      </View>
    </View>
  );
};

export default ManualTicketValidationScreen;
