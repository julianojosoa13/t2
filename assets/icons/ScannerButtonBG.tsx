import Svg, { Rect, Path } from "react-native-svg";

function ScannerButtonBG({
  width = 100,
  height = 100,
  color = "#FFF",
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
      <Rect width={100} height={100} rx={50} fill="#DDFFD8" />
      <Rect x={15} y={15} width={70} height={70} rx={35} fill="#2ECC71" />
      <Path
        d="M60 47.75c-.41 0-.75-.34-.75-.75v-2c0-2.58-1.67-4.25-4.25-4.25H45c-2.58 0-4.25 1.67-4.25 4.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75zM55 60.75H45c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75zM60 50.75H40c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill={color}
      />
      <Path
        opacity={0.4}
        d="M54.5 47h-9c-.28 0-.5-.22-.5-.5v-2c0-.82.67-1.5 1.5-1.5h7c.83 0 1.5.68 1.5 1.5v2c0 .28-.22.5-.5.5zM54.5 53h-9c-.28 0-.5.22-.5.5v2c0 .82.67 1.5 1.5 1.5h7c.83 0 1.5-.68 1.5-1.5v-2c0-.28-.22-.5-.5-.5z"
        fill={color}
      />
    </Svg>
  );
}

export default ScannerButtonBG;
