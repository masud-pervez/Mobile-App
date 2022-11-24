import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function Addmoney(props) {
  return (
    <Svg
      width={props.width || "60"}
      height={props.height || "60"}
      viewBox="0 0 47 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 26.5L11 18.5V8V5C11 4.66667 11.5 4 13.5 4H32H33C33.3333 4 34 4.2 34 5V8C35.2 8 35.8333 10 36 11V13.5H38H38.5V17.5V19.5V20H36V23.5C36 25.1 34 26.1667 33 26.5H21Z"
        fill="#AEDFCA"
      />
      <Path
        d="M36 20V23.5C36 25.1 34 26.1667 33 26.5H21L11 18.5V8M36 20H28.5C28.1667 19.8333 27.5 19.2 27.5 18C27.5 16.8 27.5 15.5 27.5 15C27.5 14.5 27.9 13.5 29.5 13.5C31.1 13.5 34.5 13.5 36 13.5M36 20H38.5V19.5V17.5V13.5H38H36M36 13.5V11C35.8333 10 35.2 8 34 8M34 8C32.8 8 18.5 8 11.5 8H11M34 8C34 7.33333 34 5.8 34 5C34 4.2 33.3333 4 33 4H32C26.6667 4 15.5 4 13.5 4C11.5 4 11 4.66667 11 5V8M29.5 16V16.5M29.5 16H30H30.5M29.5 16H30.5M31.5 17.5V17V16.5M31.5 17.5L30.5 16.5L31 16M31.5 17.5H30.5M31.5 16.5V16H31M31.5 16.5H31H29.5M29.5 16.5V17.5H30.5M29.5 16.5L30 17L30.5 17.5M30.5 16H31"
        stroke="#1C3C2D"
        stroke-width="0.7"
      />
      <Circle cx="15" cy="24" r="6.5" fill="#AEDFCA" stroke="#1C3C2D" />
      <Path
        d="M15 21V24M15 27V24M15 24H18H12"
        stroke="#1C3C2D"
        stroke-width="0.7"
      />
    </Svg>
  );
}
