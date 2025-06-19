import Svg, { Path } from "react-native-svg";

const CheckIcon = ({
  width = 15,
  height = 14,
  color = "#348857",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 15 14">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="m1 9.5 3.233 2.425a1 1 0 0 0 1.374-.167L14 1.5"
    ></Path>
  </Svg>
);

export default CheckIcon;
