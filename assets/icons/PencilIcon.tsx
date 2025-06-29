import Svg, { Path } from "react-native-svg";

function PencilIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.367 5.517L3.8 12.084c-.25.25-.5.741-.55 1.1l-.358 2.508c-.134.908.508 1.541 1.416 1.416l2.509-.358c.35-.05.841-.3 1.1-.55l6.566-6.566c1.134-1.134 1.667-2.45 0-4.117-1.666-1.667-2.983-1.133-4.116 0zM9.425 6.458a5.954 5.954 0 004.116 4.117"
        stroke="#303338"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PencilIcon;
