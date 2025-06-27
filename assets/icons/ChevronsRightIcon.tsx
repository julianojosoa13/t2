import Svg, { Path } from "react-native-svg";

function ChevronsRightIcon({
  width = 26,
  height = 26,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
      <Path
        d="M13 19.25L19.25 13 13 6.75M6.75 19.25L13 13 6.75 6.75"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default ChevronsRightIcon;
