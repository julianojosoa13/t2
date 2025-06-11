import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = ({
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
      strokeWidth="1.5"
      d="M9.583 17.5a7.917 7.917 0 1 0 0-15.834 7.917 7.917 0 0 0 0 15.834"
    ></Path>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.2"
      strokeWidth="1.5"
      d="M9.583 17.5a7.917 7.917 0 1 0 0-15.834 7.917 7.917 0 0 0 0 15.834"
    ></Path>
    <Path
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m18.333 18.333-1.666-1.666"
    ></Path>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.2"
      strokeWidth="1.5"
      d="m18.333 18.333-1.666-1.666"
    ></Path>
  </Svg>
);

export default SearchIcon;
