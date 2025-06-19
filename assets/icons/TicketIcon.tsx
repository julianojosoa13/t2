import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg";

const TicketIcon = ({
  width = 218,
  height = 80,
}: {
  width?: number;
  height?: number;
}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 218 80">
    <Path fill="url(#pattern0_3_6271)" d="M.5 0h217v80H.5z"></Path>
    <Defs>
      <Pattern
        id="pattern0_3_6271"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <Use
          xlinkHref="#image0_3_6271"
          transform="matrix(.00776 0 0 .02105 -.127 -.777)"
        ></Use>
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABdCAYAAABHLp+VAAAAAXNSR0IArs4c6QAABClJREFUeF7tnU1rE1EUhs/kow010EL9qK1QLUoXLly4di0i4j/QVXciFMSiWPcuhe66U3BRcOMHtCtdC5ZmKajYhbUVE6umNrXNRCaxhUoaWjJvkpn7ZJUh7Z2Zm3veee57T8718vl8JZFImO/7lkwmrVwuG8f0R7PjwQsGlpmZ53lWqVTfVl8c0x9NjYdgYKFUKHXYTyqvUChUmhqZKB1KX+dJV30UwlQwVbNM9f//w1gwpYapYSxmwwrGhrFgRAkjwlj4dhLfEsaCsWAsZq/Rmb3CWDAWjKWYvYTtONNeba0ZxoKxYCwYC8YiS8JxJcTHwsfCxyILI0L5cqwVslaomG3jY+Fj4WMpIgvfSfMbB3wsx2dvst84wFgwluJJAGPBWDCWIrJgLBhLElkyxnBdCWEsGEvxJICxXFcW0f2zVshaIWuFrBWyVkjVGseVEMYSMYbrs00Yy3FlUfl4rBWyVkjOOznv5LyT8+64EsJYMBY+Fj4WPhY+luNKiI+FjyXJGoGxHFcWfCyURaIsshUCVT7Wj801m1yZsQA30+mUFbdKlqmkQj0+mx6yG/0X6+6o8XJ13uaKuVDPF/b1R7W9Ez39dqv3csPZpIyxFtY/2fjy4x0/S/Emm+i2Fycn6kby+JdHtlBaVJyWNs3s1anJho69jLHm1z7axNcn9scv73wRXYlk6MdXsuft5pFLu/YCmv2VswffnpnifOr7iUr7wcBqlHkqWytshWJtj9hzmWG70DNqhxIZy5UWbbaYQ1XEPfB65H5j5lMx1tvih51HIcoRvlK3W9nmhu/Gl7HEQUnzDXog9ozV7sh19fxOMBbS0voegLHMmB0KZuMwVuuD2YkzwlhiHw3Gql/7IRY+lhMS0WE3CWPBWBLGhLE6LNLjcjkwFowlWavFx4qLRHTYfcBYMBaM1WFByeWwVljrAbIoWpdFAWOhO5IegLFQMomS42NJ4pVG8bHwsfCx0IHo9ACMBWPBWNGJV64UxoKxYCx0IDo9AGPBWDBWdOKVK4WxYCwYCx2ITg/AWDAWjBWdeOVKnWGsY6le6+vK2rvfnyVMQb7X7ny32OdjjXQdtTuHr9qZzPFqvaaiX7J7KzPVOlm8dD0Qe8aaHhyz0Z6hXXXlg8F1bWnKvm+uk1kqYsy25WO931i2saVpXciYWVDJ7+Hg9bqV5abyc/b05xvp+V1tPKj9+nz4dvX2vT2qWctqkPq+b0G5SOUrm8jY6e6BupXlljYKtry1qjy9s20PpPpsIN3Xnhqke43k7W+Dz71o1W0/aJ19VQ1S1Y4HgRI2qtbL553RP7I67yhTrQdcVWYpY6EsSWd3QZPVx3I1UlHqf0oNY3UGk8SNSWGsg852+Pt9zWZhLPYrZE9o9oRmT2hnZ0P4aDVmhbFgpn0x00FnuzAWjCVhrL/zQl2KnJhmsgAAAABJRU5ErkJggg=="
        id="image0_3_6271"
        width="150"
        height="93"
        preserveAspectRatio="none"
      ></Image>
    </Defs>
  </Svg>
);

export default TicketIcon;
