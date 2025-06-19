import Svg, { Path } from "react-native-svg";

const TicketSmallIcon = ({
  width = 30,
  height = 30,
  color = "#2F80ED",
}: {
  width?: number;
  height?: number;
  color?: string;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 30 30">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M24.375 15.625c0-1.725 1.4-3.125 3.125-3.125v-1.25c0-5-1.25-6.25-6.25-6.25H8.75c-5 0-6.25 1.25-6.25 6.25v.625a3.126 3.126 0 0 1 0 6.25v.625c0 5 1.25 6.25 6.25 6.25h12.5c5 0 6.25-1.25 6.25-6.25a3.126 3.126 0 0 1-3.125-3.125"
    ></Path>
    <Path
      stroke={color}
      strokeDasharray="5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12.5 5v20"
    ></Path>
  </Svg>
);

export default TicketSmallIcon;
