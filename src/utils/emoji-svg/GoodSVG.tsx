import React from "react";
import { SvgProps } from "@/types/feedback.types";

const GoodSVG: React.FC<SvgProps> = ({ size }) => {
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
        x1="32"
        x2="32"
        y1="52.45"
        y2="43.016"
      >
        <stop offset="0" stopColor="#911625" />
        <stop offset=".587" stopColor="#630f19" />
        <stop offset="1" stopColor="#400a10" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-3"
        gradientUnits="userSpaceOnUse"
        x1="13.996"
        x2="50.004"
        y1="42"
        y2="42"
      >
        <stop offset="0" stopColor="#b8b4b2" />
        <stop offset=".333" stopColor="#e6e1de" />
        <stop offset=".5" stopColor="#fffaf6" />
        <stop offset=".638" stopColor="#f9f5f1" />
        <stop offset=".825" stopColor="#e8e5e3" />
        <stop offset="1" stopColor="#d1d1d1" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-4"
        gradientUnits="userSpaceOnUse"
        x1="32"
        x2="32"
        y1="39.712"
        y2="46.21"
      >
        <stop offset="0" stopColor="#ababab" stopOpacity=".5" />
        <stop offset=".541" stopColor="#c1c1c1" stopOpacity=".216" />
        <stop offset="1" stopColor="#d1d1d1" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-5"
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
        id="linear-gradient-6"
        x1="21"
        x2="21"
        xlinkHref="#linear-gradient-5"
        y1="29.856"
        y2="20.875"
      />
      <g id="_05-Grinning_Face" data-name="05-Grinning Face">
        <path
          d="m32 63c-27.7 0-31.038-24-31-30v-2c-.038-6 3.3-30 31-30 27.7 0 31.038 24 31 30v2c.038 6-3.3 30-31 30z"
          fill="url(#linear-gradient)"
        />
        <path
          d="m50 38.99a.94.94 0 0 0 -1.19-.96 72.587 72.587 0 0 1 -16.81 2.07 72.587 72.587 0 0 1 -16.81-2.07.94.94 0 0 0 -1.19.96c.018.187.056.363.083.545a.85.85 0 0 0 -.083.455 10.787 10.787 0 0 0 .49 2.34 9.632 9.632 0 0 0 .43 1.17 14.068 14.068 0 0 0 5.09 5.88 20.6 20.6 0 0 0 11.99 3.62 20.6 20.6 0 0 0 11.99-3.62 14.068 14.068 0 0 0 5.09-5.88 9.632 9.632 0 0 0 .43-1.17 10.787 10.787 0 0 0 .49-2.34.85.85 0 0 0 -.083-.455c.027-.182.065-.358.083-.545z"
          fill="#f9bf06"
        />
        <path
          d="m50 37.99a.94.94 0 0 0 -1.19-.96 72.587 72.587 0 0 1 -16.81 2.07 72.587 72.587 0 0 1 -16.81-2.07.94.94 0 0 0 -1.19.96c.018.187.056.363.083.545a.85.85 0 0 0 -.083.455 10.787 10.787 0 0 0 .49 2.34 9.632 9.632 0 0 0 .43 1.17 14.068 14.068 0 0 0 5.09 5.88 20.6 20.6 0 0 0 11.99 3.62 20.6 20.6 0 0 0 11.99-3.62 14.068 14.068 0 0 0 5.09-5.88 9.632 9.632 0 0 0 .43-1.17 10.787 10.787 0 0 0 .49-2.34.85.85 0 0 0 -.083-.455c.027-.182.065-.358.083-.545z"
          fill="#ed8d06"
        />
        <path
          d="m49.51 41.33a9.632 9.632 0 0 1 -.43 1.17 14.068 14.068 0 0 1 -5.09 5.88 20.6 20.6 0 0 1 -11.99 3.62 20.6 20.6 0 0 1 -11.99-3.62 14.068 14.068 0 0 1 -5.09-5.88 9.632 9.632 0 0 1 -.43-1.17 32.724 32.724 0 0 0 17.51 4.67 32.724 32.724 0 0 0 17.51-4.67z"
          fill="url(#linear-gradient-2)"
        />
        <path
          d="m48.81 38.03a.94.94 0 0 1 1.19.96 10.787 10.787 0 0 1 -.49 2.34 32.724 32.724 0 0 1 -17.51 4.67 32.724 32.724 0 0 1 -17.51-4.67 10.787 10.787 0 0 1 -.49-2.34.94.94 0 0 1 1.19-.96 72.587 72.587 0 0 0 16.81 2.07 72.587 72.587 0 0 0 16.81-2.07z"
          fill="url(#linear-gradient-3)"
        />
        <path
          d="m48.81 38.03a.94.94 0 0 1 1.19.96 10.787 10.787 0 0 1 -.49 2.34 32.724 32.724 0 0 1 -17.51 4.67 32.724 32.724 0 0 1 -17.51-4.67 10.787 10.787 0 0 1 -.49-2.34.94.94 0 0 1 1.19-.96 72.587 72.587 0 0 0 16.81 2.07 72.587 72.587 0 0 0 16.81-2.07z"
          fill="url(#linear-gradient-4)"
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
        <ellipse cx="43" cy="25" fill="url(#linear-gradient-5)" rx="3" ry="5" />
        <ellipse cx="21" cy="25" fill="url(#linear-gradient-6)" rx="3" ry="5" />
        <path d="m43 23c1.451 0 2.661.718 2.94 3a8.343 8.343 0 0 0 .06-1c0-2.761-1.343-5-3-5s-3 2.239-3 5a8.343 8.343 0 0 0 .06 1c.279-2.282 1.489-3 2.94-3z" />
        <path d="m21 23c1.451 0 2.661.718 2.94 3a8.343 8.343 0 0 0 .06-1c0-2.761-1.343-5-3-5s-3 2.239-3 5a8.343 8.343 0 0 0 .06 1c.279-2.282 1.489-3 2.94-3z" />
      </g>
    </svg>
  );
};

export default GoodSVG;
