import React, {
    forwardRef,
    ReactNode,
    useEffect,
    useImperativeHandle,
    useState
} from 'react';
import {
    Dimensions,
    EasingFunction,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';


import { Keyboard, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Animated, {
    Easing as ReanimatedEasing,
    runOnJS,
    useAnimatedStyle, useSharedValue, withTiming,
} from "react-native-reanimated";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Path, Svg } from "react-native-svg";
import { THEME } from '../../colors';
import { cls } from "../../helpers";

interface IBaseModal {
    title?: string | React.ReactNode,
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void,
    height?: string,
    closeButtonPosition?: "left" | "right",
    fullContent?: boolean,
    onOpen?: () => void,
}
const AnimatedSafeArea = Animated.createAnimatedComponent(SafeAreaView)
export const BaseModal = React.memo(({ onOpen, title, closeButtonPosition = "left", children, isOpen, onClose, height: modalHeight = "100%", fullContent = false }: IBaseModal) => {
    const { top } = useSafeAreaInsets()
    const { height: windowHeight, width } = useWindowDimensions()
    const height = windowHeight - top
    const bottom = useSharedValue(-height)
    const opacity = useSharedValue(0)
    const containerPositionTop = useSharedValue(0)
    React.useEffect(() => {
        if (isOpen) {
            if (Keyboard.isVisible()) Keyboard.dismiss()
            containerPositionTop.value = 0
            bottom.value = withTiming(0)
            opacity.value = withTiming(0.5)
            if (onOpen) onOpen()
        } else {
            bottom.value = withTiming(-height * 2, undefined, () => {
                containerPositionTop.value = height * 2
            })
            opacity.value = withTiming(0)
        }
    }, [isOpen])
    const animatedBottom = useAnimatedStyle(() => {
        return (
            {
                bottom: bottom.value,
            }
        )
    })

    const animatedOpacity = useAnimatedStyle(() => {
        return (
            {
                backgroundColor: `rgba(0,0,0,${opacity.value})`,
                top: containerPositionTop.value
            }
        )
    })

    return (
        <View className="flex-1 absolute " style={{ top: 0, left: 0, right: 0, bottom: 0 }}>

            <AnimatedSafeArea className="absolute justify-end" style={[{ top: 0, left: 0, bottom: 0, right: 0 }, animatedOpacity]}>
                <Animated.View className="absolute rounded-t-[20px] bg-white" style={[{ height: modalHeight as any, left: 0, right: 0 }, animatedBottom]}>
                    {
                        fullContent ?
                            children :

                            <View className="flex-1">
                                <View className={cls(" p-2 py-4  items-center", closeButtonPosition == "right" ? "flex-row-reverse" : "flex-row")}>
                                    <TouchableOpacity onPress={onClose} className="h-[40px] w-[40px] rounded-full p-3 rounded-full bg-gray-100 items-center justify-center overflow-hidden">
                                        <Svg width="13" height="13" viewBox="0 0 10 10" fill="none" >
                                            <Path d="M0.757324 9.24268L9.24261 0.757395" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <Path d="M9.24261 9.24261L0.757324 0.757324" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </Svg>
                                    </TouchableOpacity>
                                    <View className={cls("flex-1", closeButtonPosition == "left" && "ml-4")}>
                                        {
                                            typeof (title) == "string" ? <Text className="text-[20px] font-nunito-semibold text-dark">{title}</Text> : title
                                        }
                                    </View>
                                </View>
                                <View className="flex-1">
                                    {children}
                                </View>
                            </View>

                    }
                </Animated.View>
            </AnimatedSafeArea>
        </View>

    )
}
)
/*

<Portal>

            <AnimatedSafeArea className="absolute justify-end" style={[{ top: 0, left: 0, bottom: 0, right: 0  }, animatedOpacity]}>
            <Animated.View className="absolute rounded-t-[20px] bg-white" style={[{ height: modalHeight as any, left: 0, right: 0 }, animatedBottom]}>
            {
                fullContent ?
                    children :

                    <View className="flex-1">
                        <View className={cls(" p-2 py-4  items-center", closeButtonPosition == "right" ? "flex-row-reverse" : "flex-row")}>
                            <TouchableOpacity onPress={onClose} className="h-[40px] w-[40px] rounded-full p-3 rounded-full bg-gray-100 items-center justify-center overflow-hidden">
                                <Svg width="13" height="13" viewBox="0 0 10 10" fill="none" >
                                    <Path d="M0.757324 9.24268L9.24261 0.757395" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M9.24261 9.24261L0.757324 0.757324" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </Svg>
                            </TouchableOpacity>
                            <View className={cls("flex-1", closeButtonPosition == "left" && "ml-4")}>
                                {
                                    typeof (title) == "string" ? <Text className="text-[20px] font-nunito-semibold text-dark">{title}</Text> : title
                                }
                            </View>
                        </View>
                        <View className="flex-1">
                            {children}
                        </View>
                    </View>

            }
        </Animated.View>
    </AnimatedSafeArea>
</Portal>
*/







// ---------- Types ----------
export interface OverlayAnimationConfig {
    fadeInDuration?: number;
    fadeOutDuration?: number;
    easing?: EasingFunction;
}

interface OverlayItem {
    id: string;
    element: ReactNode;
    animationConfig?: OverlayAnimationConfig;
    _hide?: boolean;
    title?: React.ReactNode | ((state: any) => React.ReactNode),
    remove?: boolean,
    state?: any,
    events?: {
        onOpen?: () => void,
        onClose?: () => void
    }
}

// ---------- Global Control ----------
let overlayManagerRef: OverlayManagerHandle | null = null;

export const setOverlayManagerRef = (ref: OverlayManagerHandle) => {
    overlayManagerRef = ref;
};

export const configureOverlay = (
    element: ReactNode,
    id?: string,
    title?: React.ReactNode | ((state: any) => React.ReactNode),
    animationConfig?: OverlayAnimationConfig,
    state?: any,
    events?: {
        onOpen?: () => void,
        onClose?: () => void
    }
): string | undefined => {
    return overlayManagerRef?.configureOverlay(element, id, title, animationConfig, state, events);
};

export const showOverlay = (
    id: string,
    state?: any,
    animationConfig?: OverlayAnimationConfig
): void => {
    return overlayManagerRef?.showOverlay(id, state, animationConfig);
};

export const hideOverlay = (id: string) => {
    overlayManagerRef?.hideOverlay(id);
};

export const removeOverlay = (
    id: string,
    animationConfig?: OverlayAnimationConfig
): void => {
    return overlayManagerRef?.removeOverlay(id);
};

// ---------- Component ----------
export interface OverlayManagerHandle {
    configureOverlay: (
        element: ReactNode,
        id?: string,
        title?: React.ReactNode | ((state: any) => React.ReactNode),
        animationConfig?: OverlayAnimationConfig,
        state?: any,
        events?: {
            onOpen?: () => void,
            onClose?: () => void
        }
    ) => string;
    removeOverlay: (id: string) => void;
    showOverlay: (id: string, state?: any, animationConfig?: OverlayAnimationConfig) => void;
    hideOverlay: (id: string, animationConfig?: OverlayAnimationConfig) => void;
}

export const OverlayManager = forwardRef<OverlayManagerHandle>((_, ref) => {
    const [overlays, setOverlays] = useState<OverlayItem[]>([]);
    useImperativeHandle(ref, () => ({
        configureOverlay: (element, id, title, animationConfig, state, events) => {
            const overlayId = id ?? `${Date.now()}-${Math.random()}`;
            const newOverlay: OverlayItem = { id: overlayId, title, element, animationConfig, _hide: true, state, events };

            setOverlays((prev) => {
                const exists = prev.some((o) => o.id === overlayId);
                if (exists) {
                    return prev.map((o) => (o.id === overlayId ? { ...o, ...newOverlay, _hide: typeof (o._hide) !== "undefined" ? o._hide : newOverlay._hide } : o));
                }
                return [...prev, newOverlay];
            });
            return overlayId;
        },
        showOverlay: (id: string, state: any, animationConfig) => {
            setOverlays((prev) => {
                const data = prev.map((o) => (o.id === id ? { ...o, _hide: false, animationConfig: animationConfig !== undefined ? animationConfig : o.animationConfig, state: state !== undefined ? state : o.state } : o))
                return data
            });
        },
        hideOverlay: (id: string, animationConfig) => {
            setOverlays((prev) =>
                prev.map((o) => (o.id === id ? { ...o, _hide: true, animationConfig } : o))
            );
        },
        removeOverlay: (id) => {
            setOverlays((prev) => prev.filter((o) => o.id !== id)
            );
        },
    }));

    return (
        overlays.map(({ id, element, title, animationConfig, _hide, remove, events, state }) => {
            return (
                <AnimatedOverlay
                    key={id}
                    element={element}
                    id={id}
                    title={title}
                    animationConfig={animationConfig}
                    onRemove={() =>
                        setOverlays((prev) => prev.filter((o) => o.id !== id))
                    }
                    hide={_hide}
                    state={state}
                    events={events}
                    remove={remove}
                />
            )
        })
    );
});



// ---------- Styles ----------
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: "rgba(0,0,0,0.5)",
        height: Dimensions.get("screen").height,
        justifyContent: "flex-end",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        elevation: 9999,
        overflow: "hidden"
    },
});

// ---------- AnimatedOverlay (inline or split into file) ----------
interface AnimatedOverlayProps {
    id: string;
    title?: React.ReactNode | ((state: any) => React.ReactNode),
    element: ReactNode;
    animationConfig?: OverlayAnimationConfig;
    onRemove: () => void;
    hide?: boolean;
    remove?: boolean,
    state?: any,
    events?: {
        onOpen?: () => void,
        onClose?: () => void
    }
}

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const AnimatedKeyboardAvoidingView=Animated.createAnimatedComponent(KeyboardAvoidingView)
const AnimatedOverlay: React.FC<AnimatedOverlayProps> = ({
    element,
    id,
    title,
    animationConfig,
    onRemove,
    hide,
    state,
    remove,
    events
}) => {
    console.log(id, hide)
    const opacity = useSharedValue(0);
    const width = useSharedValue(windowWidth);
    const height = useSharedValue(windowHeight);
    const bottomSlide = useSharedValue(0)
    const { top } = useSafeAreaInsets()
    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: `rgba(0,0,0,${opacity.value})`,
        width: width.value,
        height: height.value,
    }));
    const slideAnimated = useAnimatedStyle(() => ({
        bottom: bottomSlide.value
    }))
    useEffect(() => {

        const animations = {
            duration: animationConfig?.fadeOutDuration ?? 300,
            easing: animationConfig?.easing ?? ReanimatedEasing.in(ReanimatedEasing.ease),
        }
        if (hide) {
            opacity.value = withTiming(0, animations, (finished) => {
                if (finished) {
                    width.value = 0;
                    height.value = 0;
                    if (remove) runOnJS(onRemove)();
                }
            });
            bottomSlide.value = withTiming(-windowHeight, animations)
            if (events?.onClose) events.onClose();
        } else {
            width.value = windowWidth;
            height.value = windowHeight;
            opacity.value = withTiming(0.5, animations);
            bottomSlide.value = withTiming(0, animations);
            if (events?.onOpen) events.onOpen();
        }
    }, [hide]);
   
    return (
        <AnimatedKeyboardAvoidingView style={[styles.container, { bottom: 2 * windowHeight }, animatedStyle, { paddingBottom: 0 }, { opacity: hide ? 0 : 1 }]}>
            <Animated.View className=" bg-white rounded-t-[20px]" style={[{ "position": "relative", backgroundColor: "#fff", height: "auto", maxHeight: windowHeight - top }, slideAnimated]}>
                {
                    title != false ? (
                        <View className={cls("p-2 py-2 items-center flex-row")}>
                            <TouchableOpacity onPress={() => {
                                hideOverlay(id)
                            }} className="h-[35px] w-[35px] rounded-full p-3 bg-gray-100 items-center justify-center overflow-hidden">
                                <Svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                                    <Path d="M0.757324 9.24268L9.24261 0.757395" stroke={THEME.colors.dark.secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <Path d="M9.24261 9.24261L0.757324 0.757324" stroke={THEME.colors.dark.secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </Svg>
                            </TouchableOpacity>
                            {
                                title ? (
                                    <View className='flex-1'>{typeof (title) == "function" ? title(state) : title}</View>
                                ) : <></>
                            }
                        </View>
                    ) : <></>
                }
                <View className=''>
                    {React.cloneElement(element as any, {
                        ...state
                    })}
                </View>
            </Animated.View>
        </AnimatedKeyboardAvoidingView>
    );
};
