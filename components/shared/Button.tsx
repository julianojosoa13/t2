import { Text, TouchableOpacity, View, TouchableWithoutFeedbackProps } from "react-native";
import { Path, Svg } from "react-native-svg"
import Ripple from 'react-native-material-ripple';
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { cls } from "../../helpers";
export function BackButton({ to }: { to?: string }) {
    const router = useNavigation()
    const handleBack = () => {
        console.log("here")
        if (to) {
            router.navigate(...[to] as never)
        } else {
            console.log(router.canGoBack())
            if (router.canGoBack()) {
                router.goBack()
            } else {
                
            }
        }
    }
    return (
        <TouchableOpacity onPress={handleBack} className="h-[40px] w-[40px] rounded-full p-3 rounded-full bg-gray-100 items-center justify-center">
            <Svg width="9" height="16" viewBox="0 0 9 16" fill="none" >
                <Path d="M7.50003 14.6L2.0667 9.16669C1.42503 8.52502 1.42503 7.47502 2.0667 6.83336L7.50003 1.40002" stroke="#303338" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </Svg>

        </TouchableOpacity>
    )
}
interface IButton extends TouchableWithoutFeedbackProps {
    children: string | React.ReactNode,
    isLoading?: boolean,
}
export function Button({ children, isLoading, disabled, ...props }: IButton) {
    return (
        <Ripple disabled={disabled || isLoading} className={cls("  bg-primary p-4 rounded-[15px] overflow-hidden", disabled && "opacity-70")} {...props}>
            {
                typeof children == "string" ? (
                    <Text className="text-center font-cabin-medium text-white text-[16px] text-dark">{children}</Text>
                )
                    :
                    children
            }
            {
                isLoading && (
                    <View className="absolute top-0 left-0 right-0 bottom-0 bg-primary">
                        <LottieView autoPlay loop style={{ flex: 1 }} source={require("../../assets/lotties-animations/loading-1.json")} />
                    </View>
                )
            }

        </Ripple>
    )
}