import ChevronsRightIcon from "@/assets/icons/ChevronsRightIcon";
import React, { useRef } from "react";
import {
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  GestureResponderEvent,
  PanResponderGestureState,
} from "react-native";

interface SlidingButtonProps {
  onSuccess: () => void;
}

const SlidingButton: React.FC<SlidingButtonProps> = ({ onSuccess }) => {
  const containerWidth = Dimensions.get("window").width - 32;
  const halfWayPoint = containerWidth / 2;
  const circleWidth = 64;
  const pan = useRef(new Animated.Value(0)).current;

  // Create an animated value for the background width
  const bgWidth = pan.interpolate({
    inputRange: [0, containerWidth - circleWidth],
    outputRange: [circleWidth, containerWidth - 8], // -8 for padding
    extrapolate: "clamp",
  });

  // Create an animated value for the background opacity (fade in effect)
  const bgOpacity = pan.interpolate({
    inputRange: [0, containerWidth / 4, containerWidth - circleWidth],
    outputRange: [0, 0.8, 1],
    extrapolate: "clamp",
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (
      _: GestureResponderEvent,
      gestureState: PanResponderGestureState
    ) => {
      if (
        gestureState.dx > 0 &&
        gestureState.dx <= containerWidth - circleWidth
      ) {
        pan.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (
      _: GestureResponderEvent,
      gestureState: PanResponderGestureState
    ) => {
      if (gestureState.dx >= halfWayPoint) {
        Animated.timing(pan, {
          toValue: containerWidth - circleWidth,
          duration: 200,
          useNativeDriver: false,
        }).start(() => onSuccess());
      } else {
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View className="flex-row bg-primary-300 rounded-full mx-4 mb-8 p-1 items-center h-20 relative">
      {/* Background expanding circle */}
      <Animated.View
        className="bg-[#f2994a] h-16 rounded-full absolute left-2"
        style={{
          width: bgWidth,
          opacity: bgOpacity,
          transform: [{ translateY: 0 }],
        }}
      />

      {/* Draggable circle */}
      <Animated.View
        className="bg-[#f2994a] w-16 h-16 rounded-full items-center justify-center z-10"
        style={{
          transform: [{ translateX: pan }],
        }}
        {...panResponder.panHandlers}
      >
        <ChevronsRightIcon />
      </Animated.View>

      <Text
        className="text-center absolute text-white font-cabin text-lg z-0"
        style={{ transform: [{ translateX: "33%" }] }}
      >
        Glisser pour publier l&apos;évenement
      </Text>
    </View>
  );
};

export default SlidingButton;
