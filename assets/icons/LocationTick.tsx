import Svg, { Path } from "react-native-svg";

const LocationTick = ({
  width = 18,
  height = 18,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 18 18">
    <Path
      stroke="#828282"
      d="M2.715 6.368c1.478-6.495 11.1-6.488 12.57.007.863 3.81-1.508 7.035-3.585 9.03a3.895 3.895 0 0 1-5.407 0c-2.07-1.995-4.44-5.227-3.578-9.037Z"
    ></Path>
    <Path
      stroke="#000"
      strokeOpacity="0.2"
      d="M2.715 6.368c1.478-6.495 11.1-6.488 12.57.007.863 3.81-1.508 7.035-3.585 9.03a3.895 3.895 0 0 1-5.407 0c-2.07-1.995-4.44-5.227-3.578-9.037Z"
    ></Path>
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.938 8.625 8.063 9.75l3-3"
    ></Path>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.2"
      d="M6.938 8.625 8.063 9.75l3-3"
    ></Path>
  </Svg>
);

export default LocationTick;
