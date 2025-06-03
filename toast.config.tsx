import LottieView from "lottie-react-native";
import { Text, View } from "react-native";
import { ToastShowParams } from "react-native-toast-message";
import { THEME } from "./colors";

export const toastConfig = {

  success: ({ text1, props, text2 }: ToastShowParams) => (
    <View style={{ maxHeight: 100, width: '90%', display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 15, backgroundColor: THEME.colors.dark.DEFAULT + "c2", padding: 10, paddingHorizontal: 10 }}>
      <View className=" " style={{ width: 30, height: 30 }}>
        <LottieView autoPlay loop style={{ flex: 1 }} source={require("./assets/lotties-animations/success.json")} />
      </View>
      <View style={{ marginLeft: 10 }}>
        {
          text1 ? (
            <View>
              <Text className="font-nunito-semibold text-[15px] text-white">{text1}</Text>
            </View>
          ):<></>
        }

        {
          text2 ? (
            <View className="mt-2">
              <Text className="font-nunito text-[14px] text-white">{text2}</Text>
            </View>
          ) : <></>
        }
      </View>
    </View>
  ),
  error: ({ text1, props, text2 }: ToastShowParams) => (
    <View style={{ maxHeight: 100, width: '90%', display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 15, backgroundColor: THEME.colors.red.DEFAULT + "c2", padding: 10, paddingHorizontal: 10 }}>
      <View className=" " style={{ width: 30, height: 30 }}>
        <LottieView autoPlay loop style={{ flex: 1 }} source={require("./assets/lotties-animations/error-1.json")} />
      </View>
      <View style={{ marginLeft: 10 }}>
        {
          text1 ? (
            <View>
              <Text className="font-nunito-semibold text-[15px] text-dark">{text1}</Text>
            </View>
          ):<></>
        }

        {
          text2 ? (
            <View className="mt-2">
              <Text className="font-nunito text-[14px] text-dark">{text2}</Text>
            </View>
          ) : <></>
        }
      </View>
    </View>
  )
};
