import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Logo(props) {
  return (
    <Svg
      width={props.width || "35"}
      height={props.height || "35"}
      viewBox="0 0 35 31" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 7V5.5V4.5C4 3.66667 4.5 2 6.5 2H9" stroke="#B60707" />
      <Path
        d="M26.0271 1.9734L27.5271 1.98947L28.527 2.00019C29.3603 2.00912 31.0215 2.52695 31.0001 4.52683L30.9733 7.02669"
        stroke="#B60707"
      />
      <Path
        d="M31.0146 24.0147L31.0218 25.5147L31.0266 26.5147C31.0306 27.348 30.5386 29.017 28.5386 29.0266L26.0386 29.0386"
        stroke="#B60707"
      />
      <Path
        d="M8.95967 29.092L7.4602 29.0523L6.46055 29.0258C5.62751 29.0037 3.97467 28.4598 4.02765 26.4605L4.09386 23.9613"
        stroke="#B60707"
      />
      <Path
        d="M9.5 14V8H16V14H9.5Z"
        stroke="#1C203B"
        stroke-width="1.6"
        stroke-linejoin="round"
      />
      <Path
        d="M19.5 14V8H26V14H19.5Z"
        stroke="#1C203B"
        stroke-width="1.6"
        stroke-linejoin="round"
      />
      <Path
        d="M9.5 23V17H16V23H9.5Z"
        stroke="#1C203B"
        stroke-width="1.6"
        stroke-linejoin="round"
      />
      <Path d="M19 16.5V21" stroke="#2C3144" stroke-linejoin="round" />
      <Path
        d="M22 16.5V18.5M18.5 23H22V18.5M22 18.5H26"
        stroke="#2C3144"
        stroke-linejoin="round"
      />
      <Path d="M25.5 21.5V24" stroke="#2C3144" stroke-linejoin="round" />
      <Path
        d="M14 12V10H11.5V12H14ZM14 12L12 10H13.5V11H12L13 10.5"
        stroke="#BA1916"
        stroke-linejoin="round"
      />
      <Path
        d="M14 21V19H11.5V21H14ZM14 21L12 19H13.5V20H12L13 19.5"
        stroke="#BA1916"
        stroke-linejoin="round"
      />
      <Path
        d="M24 12V10H21.5V12H24ZM24 12L22 10H23.5V11H22L23 10.5"
        stroke="#BA1916"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
