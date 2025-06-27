import Svg, { Path } from "react-native-svg";

const Calendar2Icon = ({
  width = 24,
  height = 25,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M8 2.5v3M16 2.5v3M3.5 9.59h17M21 9v8.5c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V9c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
        stroke="#2ECC71"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.995 14.2h.01M8.294 14.2h.01M8.294 17.2h.01"
        stroke="#2ECC71"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Calendar2Icon;
