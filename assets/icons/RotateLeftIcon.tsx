import Svg, { Path } from "react-native-svg";

const RotateLeftIcon = ({
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
      d="M6.833 3.81A7.5 7.5 0 0 1 9 3.488a6.5 6.5 0 0 1 6.503 6.502A6.5 6.5 0 0 1 9 16.492 6.5 6.5 0 0 1 2.498 9.99c0-1.335.405-2.58 1.095-3.615M5.903 3.99 8.07 1.5M5.903 3.99 8.43 5.835"
    ></Path>
  </Svg>
);

export default RotateLeftIcon;
