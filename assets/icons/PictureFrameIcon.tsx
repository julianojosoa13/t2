import Svg, { Path } from "react-native-svg";

const PictureFrameIcon = ({
  width = 18,
  height = 19,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 18 19">
    <Path
      stroke="#303338"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.75 17h4.5c3.75 0 5.25-1.5 5.25-5.25v-4.5C16.5 3.5 15 2 11.25 2h-4.5C3 2 1.5 3.5 1.5 7.25v4.5C1.5 15.5 3 17 6.75 17M6.75 2l3.713 15M8.648 9.665 1.5 11.75"
    ></Path>
  </Svg>
);

export default PictureFrameIcon;
