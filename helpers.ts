import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    format,
    isPast,
    isSameWeek,
    isSameYear,
    isThisWeek,
    isToday,
    isTomorrow,
    isYesterday
} from 'date-fns';
import * as Application from 'expo-application';
import * as device from 'expo-device';

import * as Locale from 'date-fns/locale';
import { t } from 'i18next';
import { COUNTRIES } from "./data/countries/country";
import { store } from './data/store';
import { setAccessToken } from './data/store/reducers/auth';
import { IEventMedia, ITicketType } from './data/store/type';

export function cls(...classes: (undefined | null | false | string)[]) {
    return (
        classes.filter((c) => c).join(" ")
    )
}
export const transformAxiosRequestError = (e: any) => {
    const messages: any = { default: typeof (e?.response?.data?.details ?? undefined) == "string" ? e.response.data.details : e.e.message }
    if (e?.response?.data?.errors) e.response.data.errors.forEach((e: any) => {
        return messages[e.field] = e.message
    })

    return {
        data: e?.response?.data?.data,
        code: e?.response?.data?.code,
        message: e?.response?.data?.message,
        messages
    }
}

export const handleAxiosResponseEror = (error: any) => {

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error?.response?.data)
        let errorCode = "REQUEST_ERROR_NO_DATA"
        if (error?.response?.status == 401 && (error?.response?.data?.code == "UNAUTHORIZED_ACCESS" || error?.response?.data?.code == "RESET_DEVICE_ID_ERROR")) {
            errorCode = "UNAUTHORIZED_ACCESS"
            store.dispatch(setAccessToken(null))
        } else if (error?.response?.status === 422) {
            errorCode = "VALIDATION_ERROR"
        }
        return { code: errorCode, ...(error?.response?.data) }
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return { code: "REQUEST_ERROR_NO_DATA" }
    } else {
        // Something happened in setting up the request that triggered an Error
        return { code: "REQUEST_ERROR_NO_DATA" }
    }
}

export function capitalize(text: string, firstLetter = true) {
    return firstLetter ? text[0].toUpperCase() + text.slice(1) : text.split(" ").map((t) => t[0].toUpperCase() + t.slice(1)).join(" ")
}

// generate a function that return device information concatenated with a random id
export const getDeviceId = async () => {
    return `[${device.osName ?? ''}${device.modelName ? ";" + device.modelName : ""}${device.osVersion ? ";" + device.osVersion : ""}${device.osBuildId ? ";" + device.osBuildId : ""}${device.deviceName ? ";" + device.deviceName : ""}][${Application.applicationId ? ":" + Application.applicationId : ''}]`;  // Generate a new UUID
};

export const formatNumber = (number: number) => {
    if (number < 1000) return number;
    if (number < 1000000) return (number / 1000).toFixed(1) + "k";
    if (number < 1000000000) return (number / 1000000).toFixed(1) + "m";
    return (number / 1000000000).toFixed(1) + "b";
}




export const formatDate = (date: Date | number, options: any = {}, language = "fr") => {
    const dateObj = date instanceof Date ? date : new Date(date);
    const fr = Locale[language as keyof typeof Locale] ?? Locale["fr"];
    try {

        const {
            showRelativeTime = false,
            withSeconds = false,
            capitalizeDay = true,
            showHour = true,
            showDate = true,
            locale = "fr",
            shortFormat = false, // Format court pour les dates relatives (1h vs 1 heure)
        } = options;


        const now = new Date();
        const timeFormat = withSeconds ? "HH'h' mm':'ss" : "HH'h' mm";
        const timeStr = format(dateObj, timeFormat, { locale: fr });
        const diffMinutes = differenceInMinutes(now, dateObj);
        const diffHours = differenceInHours(now, dateObj);
        const diffDays = differenceInDays(now, dateObj);

        // Gestion des dates passées récentes
        if (isPast(dateObj)) {
            // Hier
            if (language === "fr" && isYesterday(dateObj)) {

                return `${showDate ? "Hier" : ""}${showHour ? (showDate ? " • " : "") + timeStr : ""}`;
            }

            // Cette semaine
            if (isThisWeek(dateObj)) {
                let dayName = format(dateObj, 'EEE', { locale: fr });
                if (capitalizeDay) {
                    dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
                }
                return `${showDate ? dayName : ""}${showHour ? (showDate ? " • " : "") + timeStr : ""}`;
            }
        }

        // Formatter la date selon les différents cas
        let formattedDate;

        if (isToday(dateObj)) {
            formattedDate = `"${showDate ? "Aujourd'hui" : ""}${showHour ? (showDate ? " • " : "") + timeStr : ""}`;
        } else if (isTomorrow(dateObj)) {
            formattedDate = `"${showDate ? "Demain" : ""}${showHour ? (showDate ? " • " : "") + timeStr : ""}`;
        } else if (isSameWeek(dateObj, new Date(), { locale: fr })) {
            let dayName = format(dateObj, 'EEE', { locale: fr });
            if (capitalizeDay) {
                dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
            }
            formattedDate = `${showDate ? dayName : ""}${showHour ? (showDate ? " • " : "") + timeStr : ""}`;
        } else if (isSameYear(dateObj, new Date())) {
            formattedDate = `${showDate ? format(dateObj, 'd MMM', { locale: fr }) : ""}${showHour ? (showDate ? " • " : "") + timeStr : ""}`;
        } else {
            formattedDate = `${showDate ? format(dateObj, 'd MMM, yyyy', { locale: fr }) : ""}${showHour ? (showDate ? " • " : "") + timeStr : ""}`;
        }

        return formattedDate;
    } catch (error) {
        console.log(error);
        return format(dateObj, 'd MMM, yyyy', { locale: fr });
    }
};



export function getCountry(countryCode: string) {
    return Object.values(COUNTRIES).find((c) => c.code == countryCode)
}

export const numbertoAbbreviation = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
};

export const fn = (amount: string | number, country: string) => {
    const countryDetails = COUNTRIES[country as keyof typeof COUNTRIES]
    try {
        return new Intl.NumberFormat(countryDetails.locale, {
            style: 'currency',
            currency: countryDetails.currency, // West African CFA Franc
        }).format(Number(amount));
    } catch (e) {
        return `${countryDetails.currency} ${amount}`
    }
}

export class ErrorHandler {
    static getFirstMessage(error: any) {
        return error.message
    }
}

export function getEventMediaPrimaryImage(medias:IEventMedia[]){
    return medias.find((m)=>m.isPrimaryImage) || medias[0]
}

export function getTicketName(ticket:ITicketType){
    return `${t("Ticket ")} ${capitalize(ticket.name)}`
}