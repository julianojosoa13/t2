import Svg, { Path } from "react-native-svg";

const AddIcon = ({
  width = 18,
  height = 18,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 18 18">
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 9h9M9 13.5v-9"
    ></Path>
  </Svg>
);

export default AddIcon;
