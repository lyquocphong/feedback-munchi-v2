import React from "react";
import { SvgProps } from "@/types/feedback.types";

const BadSVG: React.FC<SvgProps> = ({ size }) => {
  return (
    <svg
      height={size}
      viewBox="0 0 64 64"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <linearGradient
        id="linear-gradient"
        gradientUnits="userSpaceOnUse"
        x1="32"
        x2="32"
        y1="1.304"
        y2="63.304"
      >
        <stop offset="0" stopColor="#ffe100" />
        <stop offset="1" stopColor="#f98900" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        gradientUnits="userSpaceOnUse"
        x1="43"
        x2="43"
        y1="29.725"
        y2="20.193"
      >
        <stop offset=".005" stopColor="#414d4d" />
        <stop offset=".206" stopColor="#3a4545" />
        <stop offset=".522" stopColor="#272e2e" />
        <stop offset=".914" stopColor="#080909" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        x1="21"
        x2="21"
        xlinkHref="#linear-gradient-2"
        y1="29.856"
        y2="20.875"
      />
      <linearGradient
        id="linear-gradient-4"
        gradientTransform="matrix(-1 0 0 -1 64 89)"
        gradientUnits="userSpaceOnUse"
        x1="32"
        x2="32"
        y1="49.287"
        y2="41.333"
      >
        <stop offset="0" stopColor="#803f02" />
        <stop offset=".174" stopColor="#6d3602" />
        <stop offset=".515" stopColor="#4d2601" />
        <stop offset=".802" stopColor="#3a1c01" />
        <stop offset="1" stopColor="#331901" />
      </linearGradient>
      <g id="_12-Slightly_Frowning_Face" data-name="12-Slightly Frowning Face">
        <path
          d="m32 63c-27.7 0-31.038-24-31-30v-2c-.038-6 3.3-30 31-30 27.7 0 31.038 24 31 30v2c.038 6-3.3 30-31 30z"
          fill="url(#linear-gradient)"
        />
        <path
          d="m46 24c0-2.761-1.343-5-3-5s-3 2.239-3 5c0 .171.02.333.03.5-.01.167-.03.329-.03.5 0 2.761 1.343 5 3 5s3-2.239 3-5c0-.171-.02-.333-.03-.5.01-.167.03-.329.03-.5z"
          fill="#eda406"
        />
        <path
          d="m24 24c0-2.761-1.343-5-3-5s-3 2.239-3 5c0 .171.02.333.03.5-.01.167-.03.329-.03.5 0 2.761 1.343 5 3 5s3-2.239 3-5c0-.171-.02-.333-.03-.5.01-.167.03-.329.03-.5z"
          fill="#eda406"
        />
        <path
          d="m46 25c0-2.761-1.343-5-3-5s-3 2.239-3 5c0 .171.02.333.03.5-.01.167-.03.329-.03.5 0 2.761 1.343 5 3 5s3-2.239 3-5c0-.171-.02-.333-.03-.5.01-.167.03-.329.03-.5z"
          fill="#ffd000"
        />
        <path
          d="m24 25c0-2.761-1.343-5-3-5s-3 2.239-3 5c0 .171.02.333.03.5-.01.167-.03.329-.03.5 0 2.761 1.343 5 3 5s3-2.239 3-5c0-.171-.02-.333-.03-.5.01-.167.03-.329.03-.5z"
          fill="#ffd000"
        />
        <ellipse cx="43" cy="25" fill="url(#linear-gradient-2)" rx="3" ry="5" />
        <ellipse cx="21" cy="25" fill="url(#linear-gradient-3)" rx="3" ry="5" />
        <path d="m43 23c1.451 0 2.661.718 2.94 3a8.343 8.343 0 0 0 .06-1c0-2.761-1.343-5-3-5s-3 2.239-3 5a8.343 8.343 0 0 0 .06 1c.279-2.282 1.489-3 2.94-3z" />
        <path d="m21 23c1.451 0 2.661.718 2.94 3a8.343 8.343 0 0 0 .06-1c0-2.761-1.343-5-3-5s-3 2.239-3 5a8.343 8.343 0 0 0 .06 1c.279-2.282 1.489-3 2.94-3z" />
        <path
          d="m32 42c8 0 13 6 13 6a11.733 11.733 0 0 0 -5.612-7.123 15.477 15.477 0 0 0 -14.776 0 11.733 11.733 0 0 0 -5.612 7.123s5-6 13-6z"
          fill="#ed8d06"
        />
        <path
          d="m32 43a19.617 19.617 0 0 1 13 5s-1.02-3.622-5.612-6.123a15.477 15.477 0 0 0 -14.776 0c-4.592 2.501-5.612 6.123-5.612 6.123a19.617 19.617 0 0 1 13-5z"
          fill="#f9bf06"
        />
        <path
          d="m19 48s1.02-3.622 5.612-6.123a15.477 15.477 0 0 1 14.776 0c4.592 2.501 5.612 6.123 5.612 6.123s-5-6-13-6-13 6-13 6z"
          fill="url(#linear-gradient-4)"
        />
      </g>
    </svg>
  );
};

export default BadSVG;
