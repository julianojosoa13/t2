import Svg, { Path } from "react-native-svg";
const ChevronRightIcon = ({
  width = 8,
  height = 15,
  color = "#828282",
  strokeWidth = 1.5,
}: {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 8 15">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
      d="m1.677 13.44 4.89-4.89a1.49 1.49 0 0 0 0-2.1l-4.89-4.89"
    ></Path>
  </Svg>
);

export default ChevronRightIcon;
