import Svg, { Path } from "react-native-svg";

const ChevronDownIcon = ({
  width = 12,
  height = 7,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 12 7">
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M11 1.5 6.884 5.175a1.36 1.36 0 0 1-1.768 0L1 1.5"
    ></Path>
  </Svg>
);

export default ChevronDownIcon;
