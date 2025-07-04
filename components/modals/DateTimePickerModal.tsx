import Calendar2Icon from "@/assets/icons/Calendar2Icon";
import ClockIcon from "@/assets/icons/ClockIcon";
import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  SlideInDown,
  SlideInLeft,
} from "react-native-reanimated";
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from "react-native-ui-datepicker";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: (data: { date: DateType }) => void;
  value?: DateType;
};

const DateTimePickerModal: React.FC<Props> = ({
  visible,
  onClose,
  onConfirm,
  value = undefined,
}) => {
  const defaultStyles = useDefaultStyles();
  const [selectedDate, setSelectedDate] = useState<DateType>(new Date());
  const today = new Date();

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
    }
  }, [value]);

  const handleConfirm = () => {
    if (selectedDate) {
      onConfirm({
        date: selectedDate,
      });
      console.log(selectedDate);
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable
        style={{ ...StyleSheet.absoluteFillObject }}
        className="bg-dark/55"
        onPress={onClose}
      />
      <Animated.View
        entering={FadeInDown.duration(600)}
        className="bg-white absolute bottom-0 w-full elevation-sm rounded-t-3xl p-4 gap-y-4 max-h-[90%]"
      >
        <Text className="text-3xl text-dark-secondary font-cabin-bold">
          <Calendar2Icon /> Date - <ClockIcon color="#2ecc71" /> Heure
        </Text>

        <View className="bg-white rounded-lg overflow-hidden">
          <DateTimePicker
            mode="single"
            date={selectedDate}
            onChange={({ date }) => setSelectedDate(date)}
            styles={defaultStyles}
            minDate={today}
            style={{}}
            timePicker
          />
        </View>

        <View className="flex-row justify-end gap-x-4 mt-4">
          <Pressable
            onPress={onClose}
            className="px-6 py-2 rounded-lg border border-gray-300"
          >
            <Text className="text-dark font-cabin-bold">Annuler</Text>
          </Pressable>
          <Pressable
            onPress={handleConfirm}
            className="px-6 py-2 rounded-lg bg-primary"
          >
            <Text className="text-white font-cabin-bold">Confirmer</Text>
          </Pressable>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default DateTimePickerModal;
