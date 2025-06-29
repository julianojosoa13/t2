import { useState, useRef } from "react";
import { TextInput } from "react-native";

const OTP_LENGTH = 6; // You can make this configurable

export const useOTP = () => {
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

  const handleKeyPress = (
    e: { nativeEvent: { key: string } },
    index: number
  ) => {
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

  const clearOtp = () => {
    setOtp(Array(OTP_LENGTH).fill(""));
    inputs.current[0]?.focus();
  };

  const getOtpString = () => otp.join("");

  return {
    otp,
    setOtp,
    inputs,
    handleChangeText,
    handleKeyPress,
    handleFocus,
    clearOtp,
    getOtpString,
    OTP_LENGTH,
  };
};
