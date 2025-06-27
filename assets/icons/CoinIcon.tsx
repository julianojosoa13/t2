import Svg, { Path } from "react-native-svg";

const CoinIcon = ({
  width = 24,
  height = 25,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 25" fill="none">
      <Path
        d="M18.5 13.15v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7c0 3.12 2.91 5.35 6.5 5.35s6.5-2.23 6.5-5.35z"
        stroke="#2ECC71"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 8.15c0 .91-.25 1.75-.69 2.47-1.07 1.76-3.27 2.88-5.81 2.88-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 3.13 10.2 2.5 12 2.5c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4z"
        stroke="#2ECC71"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 8.15v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 5.03 8.41 2.5 12 2.5c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4z"
        stroke="#2ECC71"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CoinIcon;
