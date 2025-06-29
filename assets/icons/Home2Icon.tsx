import Svg, { Path } from "react-native-svg";

function Home2Icon({
  width = 21,
  height = 20,
  color = "#828282",
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 20" fill="none">
      <Path
        d="M8.017 2.367l-4.492 3.5c-.75.583-1.358 1.825-1.358 2.766v6.175a3.521 3.521 0 003.508 3.517h9.65a3.52 3.52 0 003.508-3.508V8.75c0-1.008-.675-2.3-1.5-2.875l-5.15-3.608c-1.166-.817-3.041-.775-4.166.1zM10.5 14.992v-2.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Home2Icon;
