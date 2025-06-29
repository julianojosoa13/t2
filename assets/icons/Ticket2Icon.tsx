import Svg, { Path } from "react-native-svg";

function Ticket2Icon({
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
        d="M16.592 12.244a1.96 1.96 0 001.958 1.95c0 3.125-.783 3.908-3.908 3.908H6.825c-3.125 0-3.908-.783-3.908-3.908v-.384a1.967 1.967 0 001.958-1.958 1.967 1.967 0 00-1.958-1.958V9.51c.008-3.125.783-3.908 3.908-3.908h7.808c3.125 0 3.909.783 3.909 3.908v.784c-1.075 0-1.95.866-1.95 1.95z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.592 12.244a1.96 1.96 0 001.958 1.95c0 3.125-.783 3.908-3.908 3.908H6.825c-3.125 0-3.908-.783-3.908-3.908v-.384a1.967 1.967 0 001.958-1.958 1.967 1.967 0 00-1.958-1.958V9.51c.008-3.125.783-3.908 3.908-3.908h7.808c3.125 0 3.909.783 3.909 3.908v.784c-1.075 0-1.95.866-1.95 1.95z"
        stroke="#000"
        strokeOpacity={0.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.343 5.602H6.768L9.209 3.16c1.992-1.991 2.992-1.991 4.984 0l.5.5c-.525.525-.65 1.3-.35 1.942z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.343 5.602H6.768L9.209 3.16c1.992-1.991 2.992-1.991 4.984 0l.5.5c-.525.525-.65 1.3-.35 1.942z"
        stroke="#000"
        strokeOpacity={0.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.066 5.602v12.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 5"
      />
      <Path
        d="M9.066 5.602v12.5"
        stroke="#000"
        strokeOpacity={0.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 5"
      />
    </Svg>
  );
}

export default Ticket2Icon;
