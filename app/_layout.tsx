import "react-native-reanimated";
import "../global.css";
import "../i18n";

import {
  OverlayManager,
  setOverlayManagerRef,
} from "@/components/shared/Modal";
import { initStore } from "@/data/store";
import { useInitialAppData } from "@/scripts/helper";
import { toastConfig } from "@/toast.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

function App() {
  const [loaded] = useFonts({
    "Nunito-Regular": require("../assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito/static/Nunito-Bold.ttf"),
    "Nunito-Black": require("../assets/fonts/Nunito/static/Nunito-Black.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito/static/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito/static/Nunito-SemiBold.ttf"),
    "Nunito-ExtraBold": require("../assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
    "Cabin-Regular": require("../assets/fonts/Cabin/static/Cabin-Regular.ttf"),
    "Cabin-Bold": require("../assets/fonts/Cabin/static/Cabin-Bold.ttf"),
    "Cabin-Medium": require("../assets/fonts/Cabin/static/Cabin-Medium.ttf"),
    "Cabin-SemiBold": require("../assets/fonts/Cabin/static/Cabin-SemiBold.ttf"),
  });

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (loaded)
    return (
      <>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="Onboarding" />
        </Stack>
      </>
    );
}
export default App;
