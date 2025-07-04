import { DateType } from "react-native-ui-datepicker";

export interface FormattedDate {
  day: number;
  monthString: string;
  year: number;
  hour: string;
  min: string;
}

export const formatDateComponents = (dateString: DateType): FormattedDate => {
  const date = new Date(dateString as string);

  // French month abbreviations
  const monthAbbreviations = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jul",
    "Aoû",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  return {
    day: date.getDate(),
    monthString: monthAbbreviations[date.getMonth()],
    year: date.getFullYear(),
    hour: date.getHours().toString().padStart(2, "0"),
    min: date.getMinutes().toString().padStart(2, "0"),
  };
};
