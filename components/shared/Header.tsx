import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "./Button";

interface IHeader {
  title: string;
  backTo?: string;
  withSafeArea?: boolean;
}
export function Header({ title, backTo, withSafeArea = true }: IHeader) {
  const data = (
    <View className="flex-row items-center gap-x-4">
      <View className=" flex-row  p-2">
        <BackButton to={backTo} />
      </View>
      <View>
        <Text className="font-cabin-semibold text-[20px] text-dark">
          {title}
        </Text>
      </View>
    </View>
  );
  if (!withSafeArea) {
    return data;
  } else {
    return <SafeAreaView className="">{data}</SafeAreaView>;
  }
}
