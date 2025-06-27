import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

function CloseIcon({
  width = 18,
  height = 18,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <G clipPath="url(#clip0_3_7983)">
        <Rect width={18} height={18} rx={9} fill="#2ECC71" />
        <Path
          d="M6.485 11.828l5.657-5.656M12.142 11.829L6.485 6.171"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3_7983">
          <Rect width={18} height={18} rx={9} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CloseIcon;
