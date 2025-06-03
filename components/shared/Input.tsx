import { THEME } from "@/colors";
import { format } from "date-fns";
import { Image } from 'expo-image';
import { useFocusEffect } from "expo-router";
import { getExampleNumber, isValidPhoneNumber, parsePhoneNumberFromString } from "libphonenumber-js";
import metadata from 'libphonenumber-js/examples.mobile.json';
import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Keyboard, Modal, Text, TextInput, TextInputProps, TouchableOpacity, View, ViewProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import { Path, Svg } from "react-native-svg";
import DateTimePicker, { DateType, useDefaultStyles } from "react-native-ui-datepicker";
import { COUNTRIES as COUNTRY } from "../../data/countries/country";
import { cls } from "../../helpers";
import { ISelectionInputValidation, ITextInputValidation } from "../hooks/useForm";
import { configureOverlay, hideOverlay, removeOverlay, showOverlay } from "./Modal";

const COUNTRIES = Object.values(COUNTRY)

interface ITextField extends ViewProps {
    leftElement?: React.ReactNode,
    TextInputProps?: TextInputProps & ITextInputValidation,
    rightElement?: React.ReactNode,
}
export function TextField({ rightElement, className, leftElement, TextInputProps }: ITextField) {
    const { className: TextInputClassName, error, isValid, ...TextInputRest } = TextInputProps ?? {}
    const { t } = useTranslation()
    React.useEffect(() => {
        Keyboard.dismiss()
    }, [])
    return (
        <View>
            <View className={cls("border border-gray rounded-[15px] flex-row items-center", isValid === false ? " bg-red-100" : "", className)}>
                {leftElement}
                <TextInput
                    autoFocus={false}
                    className={cls("p-4 flex-1 text-[16px] font-nunito rounded-[15px]", isValid === false ? "text-red" : "text-dark", TextInputClassName)}
                    {...TextInputRest}
                />
                {rightElement}
            </View>
            {
                isValid === false && error && (
                    <View>
                        <Text className="text-red text-[12px] font-nunito">{t(error)}</Text>
                    </View>
                )
            }

        </View>
    )
}
interface IPhoneInput extends TextInputProps {
    defaultCountryCode?: string,
    TextInputProps?: TextInputProps & ITextInputValidation,
    continent?: string
}


export function PhoneInput({ defaultCountryCode = "BJ", TextInputProps, continent = "Africa" }: IPhoneInput) {
    const { className: TextInputClassName, onChangeText, error, isValid, ...TextInputRest } = TextInputProps ?? {}
    const [selectedCountryCode, setSelectedCountryCode] = React.useState(defaultCountryCode)
    const currentCountry = useMemo(() => {
        return COUNTRIES.find((c) => c.code.toLowerCase() == selectedCountryCode.toLowerCase())
    }, [selectedCountryCode, COUNTRIES])
    const { t } = useTranslation()
    const [openModal, setOpenModal] = React.useState(false)
    const exemple = useMemo(() => {
        return getExampleNumber(selectedCountryCode.toUpperCase() as any, metadata)?.formatNational()
    }, [selectedCountryCode])
    const offset = useSharedValue(0)

    const shakeAnimation = () => {
        const OFFSET = 10;
        const TIME = 70;
        const DELAY = 100;

        offset.value = withDelay(
            DELAY,
            withSequence(
                // start from -OFFSET
                withTiming(-OFFSET, { duration: TIME / 2 }),
                // shake between -OFFSET and OFFSET 5 times
                withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
                // go back to 0 at the end
                withTiming(0, { duration: TIME / 2 })
            )
        );
    }

    const style = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));
    React.useEffect(() => {
        if (isValid === false) {
            shakeAnimation()
        }
    }, [isValid])
    const modalId = "country-modal"
    const ModalContent = <CountryList continent={continent} onSelect={(item) => {
        setSelectedCountryCode(item.code)
        hideOverlay(modalId)
    }} />
    useFocusEffect(useCallback(() => {
        configureOverlay(ModalContent, modalId, <Text className="ml-2 font-cabin text-[16px] text-dark">{t("Selectionner un pays")}</Text>)
        return () => {
            console.log("remove", modalId)
            removeOverlay(modalId)
        }
    }, []))
    if (currentCountry) {
        return (
            <>
                <Animated.View className={cls("border border-gray rounded-[15px] flex-row items-center", isValid === false ? "border-red" : "")} style={style}>
                    <TouchableOpacity onPress={() => showOverlay(modalId)} className="flex-row items-center pl-4 pr-2">
                        <View className="flex-row items-center gap-x-2 ">
                            <View>
                                <Image
                                    style={{
                                        width: 25,
                                        height: 15
                                    }}
                                    source={currentCountry.flagImage}
                                    contentFit="cover"
                                    transition={500}
                                />
                            </View>
                            <View>
                                <Text className="text-dark  text-[16px] font-nunito-semibold">{currentCountry.dialCode}</Text>
                            </View>
                        </View>
                        <View className="ml-1">
                            <Svg width="10" height="6" viewBox="0 0 10 6" fill="none" >
                                <Path d="M1 0.86676L5.36364 4.86676L9 0.86676" stroke="#303338" />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        className={cls("py-4 pr-4 text-[16px] text-dark font-nunito-medium flex-1 text-[14px] rounded-[15px]", isValid === false ? "text-red" : "", TextInputClassName)}
                        placeholder={exemple}
                        onChangeText={(text) => {
                            if (onChangeText) {
                                const formatted = parsePhoneNumberFromString(text, selectedCountryCode as any)
                                const value = formatted ? formatted.formatNational() : text
                                onChangeText(currentCountry.dialCode + "" + value, isValidPhoneNumber(value, selectedCountryCode as any) ? undefined : t("Format de numéro invalide "))
                            }
                        }}
                        keyboardType="phone-pad"
                        {...TextInputRest}
                        value={TextInputRest.value?.slice(currentCountry.dialCode.length)}
                    />
                </Animated.View>
            </>
        )
    }

}

export const CountryList = React.memo(({ onSelect, continent, showImage, filteredCountries, showDialCode = true, selectedIso2Code, searchText, }: {
    onSelect: (country: {
        name: string;
        dialCode: string;
        code: string;
        flagImage: any;

    }) => void, continent?: string, filteredCountries?: string[], showImage?: boolean, showDialCode?: boolean, selectedIso2Code?: string, searchText?: string
}) => {
    const getCountryElement = useCallback(({ item, index }: any) => {
        return (
            <CountryItem showImage={showImage} countryCode={item.code} selected={selectedIso2Code == item.code} flaImage={item.flagImage} title={`${showDialCode ? "(" + item.dialCode + ") " : ""}${item.name}`} onSelect={() => onSelect(item)} />
        )
    }, [])
    const filterCountries = useMemo(() => {
        return filteredCountries ? COUNTRIES.filter((f) => filteredCountries.includes(f.code)) : (continent ? COUNTRIES.filter((c) => c.continent == continent) : COUNTRIES)
    }, [filteredCountries])
    const countries = useMemo(() => {
        return searchText ? filterCountries.filter((item) => item.name.toLocaleLowerCase().includes(searchText.toLowerCase()) || item.code.toLowerCase().includes(searchText.toLowerCase())) : filterCountries
    }, [searchText, filterCountries])
    return (
        <View >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={countries}
                renderItem={getCountryElement}

            />
        </View>
    )
})
interface ICountryItem {
    showImage?: boolean,
    title: string,
    onSelect: () => void,
    flaImage: any,
    countryCode: string,
    selected?: boolean
}
const CountryItem = React.memo(({ title, onSelect, showImage = true, flaImage, selected }: ICountryItem) => {

    return (
        <TouchableOpacity onPress={onSelect as any} className="flex-row items-center ">
            <View className="flex-1 p-4 flex-row items-center gap-x-4">
                {
                    showImage && (
                        <View>
                            <Image
                                style={{
                                    width: 25,
                                    height: 15
                                }}
                                source={flaImage}
                                contentFit="cover"
                                transition={1000}
                            />

                        </View>
                    )
                }

                <View>
                    <Text className="text-[16px] font-nunito">{title}</Text>
                </View>
            </View>
            <View>
                {
                    selected && (
                        <Svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                            <Path d="M1 9L4.23309 11.4248C4.66178 11.7463 5.26772 11.6728 5.60705 11.2581L14 1" stroke="#2ECC71" stroke-width="2" stroke-linecap="round" />
                        </Svg>
                    )
                }
            </View>
        </TouchableOpacity>
    )
})

interface ISelectBase {
    data: { getElement: (onPress: () => void, selected?: boolean) => string | React.ReactNode, value: any }[]
    getElement: ({ selection, onPress }: { selection: any, onPress: () => void }) => React.ReactNode,
    value: any,
    onChange: (v: any) => void,
    modalTitle?: string
}
export function SelectBase({ data, getElement, value, onChange, modalTitle }: ISelectBase) {
    const [openModal, setOpenModal] = React.useState(false)
    const component = {
        id: "select" + modalTitle,
        component: (
            <View className="pb-6">
                {data.map((d, i) =>
                    <React.Fragment key={i}>
                        {
                            d.getElement(() => {
                                onChange({
                                    index: i,
                                    value: d.value,
                                    getElement: d.getElement
                                })
                                hideOverlay(component.id)
                            }, i === value?.index)
                        }
                    </React.Fragment>
                )}
            </View>
        ),
        callback: useCallback(() => {
            configureOverlay(component.component, component.id, modalTitle, undefined, undefined, {
                onClose: () => {
                    hideOverlay(component.id)
                }
            })
            return () => removeOverlay(component.id)
        }, [data, getElement, value, onChange, modalTitle])
    }
    useFocusEffect(component.callback)

    return (
        <View>
            {getElement({ selection: value, onPress: () => showOverlay(component.id) })}

        </View>
    )
}

interface ISelect extends ISelectionInputValidation {
    data: { title: string | React.ReactNode, value: any }[],
    value: any,
    onChange: (v: any) => void,
    placeholder?: string | React.ReactNode,

}
export function Select({ value, data, onChange, placeholder, isValid, error }: ISelect) {
    const { t } = useTranslation()
    const element = useCallback(({ selection, onPress }: any) => {

        return (
            <View>
                <TouchableOpacity onPress={onPress} className={cls("flex-row items-center bg-gray-100 p-4 rounded-[15px]", isValid == false && "bg-red-100")} >
                    <View className="flex-1">
                        {
                            value ?
                                value.getElement(undefined, true)
                                :
                                <Text className={cls("font-nunito text-[16px] text-dark-secondary", isValid == false && "text-red")}>{typeof (placeholder) === "string" ? placeholder : placeholder}</Text>
                        }
                    </View>
                    <View>
                        <Svg width="18" height="9" viewBox="0 0 18 9" fill="none" >
                            <Path d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951" stroke="#828282" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>

                    </View>
                </TouchableOpacity>
                {
                    isValid === false && error && (
                        <View>
                            <Text className="text-red font-nunito text-[12px]">{error}</Text>
                        </View>
                    )
                }
            </View>
        )
    }, [value, isValid, error])
    const datas = useMemo(() => (
        data.map((d, i) => ({
            getElement: (onPress: any, selected: any) => (
                <React.Fragment key={i}>
                    {
                        typeof (d.title) == "string" ?
                            (
                                onPress ?
                                    <TouchableOpacity onPress={onPress} className="px-4 py-3 flex-row items-center justify-between">
                                        <View>
                                            <Text className={cls("text-[16px] ", selected ? "text-primary  font-nunito-medium" : "text-dark  font-nunito")}>{d.title}</Text>
                                        </View>
                                        <View>
                                            {
                                                selected && <Svg width="20" height="19" viewBox="0 0 15 14" fill="none">
                                                    <Path d="M1 9.5L4.23309 11.9248C4.66178 12.2463 5.26772 12.1728 5.60705 11.7581L14 1.5" stroke="#2ECC71" stroke-width="2" stroke-linecap="round" />
                                                </Svg>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <View>
                                        <Text className={cls("text-[16px] font-nunito text-dark")}>{d.title}</Text>
                                    </View>
                            )
                            :
                            React.cloneElement(d.title as any, {
                                active: selected,
                                onPress
                            })
                    }
                </React.Fragment>
            ),
            value: d.value
        }))
    ), [])
    return <SelectBase
        getElement={element}
        data={datas}
        onChange={onChange}
        value={value}
    />
}

interface IDateSelect extends ISelectionInputValidation {
    placeholder?: string
}
export function DateSelect({ onChange, value, placeholder, isValid, error }: IDateSelect) {
    const { i18n } = useTranslation()
    const defaultStyles = useDefaultStyles();
    const [isVisible, setVisible] = React.useState(false);
    const { t } = useTranslation()
    const onConfirmSingle = (output: DateType) => {
        setVisible(false)
        console.log(output)
        if (onChange) onChange(output)
    }
    console.log(value)
    return (
        <>
            <View>
                <TouchableOpacity onPress={() => setVisible(true)} className={cls("bg-gray-100 rounded-[15px] flex-row items-center gap-x-4 p-4", isValid == false && "bg-red-100")}>
                    <View>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <Path d="M8 2V5" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M16 2V5" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M3.5 9.08997H20.5" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M19.21 15.77L15.6701 19.31C15.5301 19.45 15.4 19.71 15.37 19.9L15.18 21.25C15.11 21.74 15.45 22.0801 15.94 22.0101L17.29 21.82C17.48 21.79 17.75 21.66 17.88 21.52L21.4201 17.9801C22.0301 17.3701 22.3201 16.6601 21.4201 15.7601C20.5301 14.8701 19.82 15.16 19.21 15.77Z" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M18.7002 16.28C19.0002 17.36 19.8402 18.2 20.9202 18.5" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12" stroke="#717171" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M11.9956 13.7H12.0046" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M8.29419 13.7H8.30317" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <Path d="M8.29419 16.7H8.30317" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>

                    </View>
                    <View>
                        {
                            value && <Text className={cls("font-nunito text-[16px] text-dark", isValid == false && "text-red")}>{format(value, "dd-MM-yyyy")}</Text>
                        }
                        {
                            !value && <Text className={cls("font-nunito text-[16px] text-dark-secondary", isValid == false && "text-red")}>{t(placeholder ?? "Selectionner une date")}</Text>
                        }
                    </View>
                </TouchableOpacity>
                {
                    isValid === false && error && (
                        <View>
                            <Text className="text-red font-nunito text-[12px]">{error}</Text>
                        </View>
                    )
                }
            </View>
            <Modal visible={isVisible}  transparent>
                <View className="flex-1 p-4 bg-black/30 items-center justify-center">
                    <View className="bg-white rounded-[15px] p-2  ">
                        <DateTimePicker

                            mode="single"
                            date={value}
                            onChange={({ date }) => onConfirmSingle(date)}
                            styles={{
                                ...defaultStyles,
                                year_label: {
                                    fontSize: 14,
                                    fontFamily: "Nunito-Regular",
                                    color: THEME.colors.dark.secondary,

                                },
                                year: {
                                    borderWidth: 1,
                                    borderColor: "#ccc",
                                    borderRadius: 50
                                },
                                month_selector_label: {
                                    fontSize: 18,
                                    fontFamily: "Cabin-SemiBold",
                                    textTransform: "capitalize",
                                    color: THEME.colors.primary.DEFAULT,
                                },
                                year_selector_label: {
                                    fontSize: 18,
                                    fontFamily: "Cabin-SemiBold",
                                    color: THEME.colors.primary.DEFAULT,
                                },
                                selected_year_label: {
                                    fontSize: 16,
                                    fontFamily: "Nunito-SemiBold",
                                    color: "#fff",
                                },
                                selected_year: {
                                    backgroundColor: THEME.colors.primary.DEFAULT,
                                    borderRadius: 50
                                },
                                day: {
                                    paddingVertical: 10,
                                    paddingHorizontal: 8
                                },
                                today: {
                                    borderRadius: 50,
                                    width: 45,
                                    height: 50,
                                    padding: 0,
                                    marginHorizontal: "auto",
                                    backgroundColor: "#eee"
                                },
                                button_next: {
                                    backgroundColor: "#fff",
                                    padding: 8,
                                    borderRadius: 10,
                                    // iOS shadow
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 6,
                                    // Android shadow
                                    elevation: 8,
                                },

                                button_prev: {
                                    backgroundColor: "#fff",
                                    padding: 8,
                                    borderRadius: 10,
                                    // iOS shadow
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 6,
                                    // Android shadow
                                    elevation: 8,
                                },
                                
                                day_cell: {
                                    width: 50,
                                    height: 50,
                                },
                                selected: {
                                    backgroundColor:THEME.colors.primary.DEFAULT,
                                    borderRadius:50
                                },
                                selected_label: {
                                    fontFamily: "Nunito-Regular",
                                    color: "#fff"
                                }
                            }}
                            locale={i18n.language}

                            classNames={{

                            }}
                            components={{

                            }}

                            navigationPosition="right"
                        />
                    </View>
                </View>
            </Modal>



        </>
    )
}