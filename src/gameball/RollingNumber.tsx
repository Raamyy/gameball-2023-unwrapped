import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
} from "remotion";
import { FONT_FAMILY } from "./constants";

const RollingNumber: React.FC<{ number: number, duration: number, freeze?: number, subTitle?: string }> = ({ number, duration, freeze = 30, subTitle = "" }) => {
  const frame = useCurrentFrame();

  const n = interpolate(
    frame,
    [0, duration - freeze],
    [0, number]
  );
  let fontSize = interpolate(
    frame,
    [0, duration - freeze],
    [0, 120]
  );
  if (fontSize > 100) fontSize = 100;

  const animation = spring({
    fps: 30,
    frame,
    config: {
      damping: 400,
    },
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          height: 200,
          width: 400,
          borderRadius: 20,
          fontFamily: FONT_FAMILY,
          transform: `translateY(${interpolate(
            animation,
            [0, 1],
            [600, 0]
          )}px)`,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: 'column',
          color: "black",
          fontSize: fontSize,
          fontWeight: "bold"
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
          <div>
            {n < number ? Math.floor(n) : number}
          </div>

          {n > number && <div style={{ fontSize: fontSize-51}}>
            {subTitle}
          </div>}
        </div>

      </div>
    </AbsoluteFill>
  );
};

export default RollingNumber;