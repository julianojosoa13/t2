import { Alert, Keyboard, Text, TextInput, View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Header } from "@/components/shared/Header";
import ManualScanImage from "@/assets/icons/ManualScanImage";
import { Button } from "@/components/shared/Button";
import Ripple from "react-native-material-ripple";
import { router } from "expo-router";
import ValidTicketModal from "@/components/modals/ValidTicketModal";
import { useOTP } from "@/components/hooks/useOtp";
import InvalidTicketModal from "@/components/modals/InvalidTicketModal";

const ManualTicketValidationScreen = () => {
  const [showValidTicketModal, setShowValidTicketModal] = useState(false);
  const [showInvalidTicketModal, setShowInvalidTicketModal] = useState(false);
  const {
    otp,
    inputs,
    handleChangeText,
    handleKeyPress,
    handleFocus,
    OTP_LENGTH,
  } = useOTP();

  const getOtpString = () => {
    return otp.join("");
  };

  useEffect(() => {
    if (getOtpString().length === 6) {
      Keyboard.dismiss();
      setShowInvalidTicketModal(true);
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
        <Button
          onPress={() => {
            setShowValidTicketModal(true);
            console.log("Valid");
          }}
        >
          Vérifier le ticket
        </Button>
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
      <ValidTicketModal
        visible={showValidTicketModal}
        onRequestClose={() => setShowValidTicketModal(false)}
      />
      <InvalidTicketModal
        visible={showInvalidTicketModal}
        onRequestClose={() => setShowInvalidTicketModal(false)}
      />
    </View>
  );
};

export default ManualTicketValidationScreen;
