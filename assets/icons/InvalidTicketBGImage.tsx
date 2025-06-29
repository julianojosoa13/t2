import Svg, { Ellipse, Path } from "react-native-svg";

function InvalidTicketBGImage() {
  return (
    <Svg width={75} height={75} viewBox="0 0 75 75" fill="none">
      <Ellipse
        cx={37.5}
        cy={37.2551}
        rx={37.1211}
        ry={37.2551}
        fill="#FF9292"
      />
      <Path
        d="M23 52l30-30M53 52L23 22"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default InvalidTicketBGImage;
