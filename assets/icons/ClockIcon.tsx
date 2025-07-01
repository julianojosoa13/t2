import Svg, { Path } from "react-native-svg";

const ClockIcon = ({
  width = 20,
  height = 20,
  color = "#828282",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 18 19">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M16.5 9.5c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5S4.86 2 9 2s7.5 3.36 7.5 7.5"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m11.783 11.885-2.325-1.387c-.405-.24-.735-.818-.735-1.29V6.132"
    ></Path>
  </Svg>
);

export default ClockIcon;
