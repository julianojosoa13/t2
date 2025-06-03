import LottieView from "lottie-react-native";
import { useTranslation } from "react-i18next";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";

export function ErrorState({ refresh, title = true, description }: { description?: string, refresh?: () => void, title?: boolean }) {
    const { t } = useTranslation()
    return (
        <View className="flex-1 justify-center">
            {
                title ?
                    (<View>
                        <Text className="font-cabin-bold text-primary text-center" style={{ fontSize: 50 }}>Oops!</Text>
                    </View>
                    ) : <></>
            }

            <View className="my-4">
                <Text className="text-center font-nunito text-[14px] text-dark-secondary">{description ?? t(" Nous n'avons pas pu charger les données. Veuillez rééssayer.")}</Text>
            </View>
            {
                refresh ? (
                    <View className="flex-row justify-center items-center ">
                        <TouchableOpacity onPress={() => refresh ? refresh() : undefined} className="p-2 px-4 rounded-[15px] bg-primary-light">
                            <Text className="font-nunito text-dark">{t("Rééssayer")}</Text>
                        </TouchableOpacity>
                    </View>
                ):<></>
            }

        </View>
    )
}

export function LoadingState() {
    return (
        <View className="flex-1 justify-center items-center">
            <View className="w-[50px] h-[50px]">
                <LottieView
                    autoPlay loop style={{ flex: 1 }} source={require("../../assets/lotties-animations/loading.json")}
                />
            </View>

        </View>
    )
}