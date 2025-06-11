import Svg, { Path } from "react-native-svg";

const CalendarEditIcon = ({
  width = 20,
  height = 20,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 20 20">
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M6.667 1.667v2.5M13.333 1.667v2.5M2.917 7.575h14.166M16.008 13.142l-2.95 2.95a1.03 1.03 0 0 0-.25.491l-.158 1.125c-.058.409.225.692.633.634l1.125-.159a1 1 0 0 0 .492-.25l2.95-2.95c.508-.508.75-1.1 0-1.85-.742-.741-1.333-.5-1.842.009"
    ></Path>
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M15.583 13.567c.25.9.95 1.6 1.85 1.85M10 18.333H6.667c-2.917 0-4.167-1.666-4.167-4.166V7.083c0-2.5 1.25-4.166 4.167-4.166h6.666c2.917 0 4.167 1.666 4.167 4.166V10"
    ></Path>
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.996 11.417h.008M6.912 11.417h.007M6.912 13.917h.007"
    ></Path>
  </Svg>
);

export default CalendarEditIcon;
