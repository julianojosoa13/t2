import Svg, { Path } from "react-native-svg";

function Edit2Icon({
  width = 18,
  height = 19,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 19" fill="none">
      <Path
        d="M9.945 3.2L3.788 9.718c-.233.247-.458.735-.503 1.072l-.277 2.43c-.098.877.532 1.477 1.402 1.327l2.415-.412c.338-.06.81-.307 1.043-.563l6.157-6.517c1.065-1.125 1.545-2.407-.113-3.975-1.65-1.552-2.902-1.005-3.967.12zM8.917 4.287a4.595 4.595 0 004.088 3.863M2.25 17h13.5"
        stroke="#2ECC71"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Edit2Icon;
