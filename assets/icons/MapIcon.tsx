import Svg, { Path } from "react-native-svg";
const MapIcon = ({
  width = 18,
  height = 18,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 18 18">
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.718 5.835v7.298c0 1.425 1.012 2.01 2.242 1.305l1.763-1.006c.382-.217 1.02-.24 1.417-.037l3.938 1.973c.397.194 1.035.18 1.417-.038l3.248-1.86c.412-.24.757-.825.757-1.305V4.867c0-1.425-1.012-2.01-2.242-1.305l-1.763 1.005c-.382.218-1.02.24-1.417.038L7.14 2.64c-.397-.195-1.035-.18-1.417.037l-3.248 1.86c-.42.24-.757.825-.757 1.298M6.42 3v9.75M11.798 4.965V15"
    ></Path>
  </Svg>
);

export default MapIcon;
