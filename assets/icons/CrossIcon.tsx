import Svg, { Path } from "react-native-svg";

function CrossIcon({ color = "#828282" }: { color?: string }) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path
        d="M1 11L11 1M11 11L1 1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CrossIcon;
