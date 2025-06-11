import Svg, { Path } from "react-native-svg";

const ChevronLeftIcon = ({
  width = 20,
  height = 20,
  color = "#303338",
  strokeWidth = 1.5,
}: {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 20 20">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="m12.5 16.6-5.433-5.433a1.655 1.655 0 0 1 0-2.334L12.5 3.4"
    ></Path>
  </Svg>
);

export default ChevronLeftIcon;
