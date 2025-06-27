import Svg, { Path } from "react-native-svg";

function HeartIcon({
  width = 20,
  height = 20,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 21" fill="none">
      <Path
        d="M10.517 17.842c-.284.1-.75.1-1.034 0-2.417-.825-7.817-4.267-7.817-10.1 0-2.575 2.075-4.659 4.634-4.659 1.516 0 2.858.734 3.7 1.867a4.608 4.608 0 013.7-1.867c2.558 0 4.633 2.084 4.633 4.659 0 5.833-5.4 9.275-7.816 10.1z"
        stroke="#FF9D97"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartIcon;
