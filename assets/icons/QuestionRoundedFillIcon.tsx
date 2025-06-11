import Svg, { Path } from "react-native-svg";

const QuestionRoundedFillIcon = ({
  width = 17,
  height = 18,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Svg viewBox="0 0 16 17" fill="none" width={width} height={height}>
      <Path
        fill="#828282"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-5.333 4a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0m.175-4.808A1.96 1.96 0 0 0 7.5 9.554v1.613h1V9.554c0-.414.265-.782.658-.913A1.96 1.96 0 0 0 10.5 6.779v-.341A2.44 2.44 0 0 0 8.063 4H8a2.5 2.5 0 0 0-2.5 2.5h1A1.5 1.5 0 0 1 8 5h.063C8.856 5 9.5 5.644 9.5 6.438v.341a.96.96 0 0 1-.658.913"
      />
      <Path
        fill="#000"
        fillOpacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-5.333 4a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0m.175-4.808A1.96 1.96 0 0 0 7.5 9.554v1.613h1V9.554c0-.414.265-.782.658-.913A1.96 1.96 0 0 0 10.5 6.779v-.341A2.44 2.44 0 0 0 8.063 4H8a2.5 2.5 0 0 0-2.5 2.5h1A1.5 1.5 0 0 1 8 5h.063C8.856 5 9.5 5.644 9.5 6.438v.341a.96.96 0 0 1-.658.913"
      />
    </Svg>
  );
};

export default QuestionRoundedFillIcon;
