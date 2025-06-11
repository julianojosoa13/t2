import Svg, { Path } from "react-native-svg";

const AddIcon = ({
  width = 18,
  height = 18,
  color = "#828282",
  strokeWidth = "1.5",
}: {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: string;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 18 18">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 9h9M9 13.5v-9"
      strokeWidth={strokeWidth}
    ></Path>
  </Svg>
);

export default AddIcon;
