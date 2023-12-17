import React from "react";
import {
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const ImgScroll: React.FC<{ imgSrc: string }> = ({ imgSrc }) => {
  const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();


  const leftMargin = interpolate(
		frame,
		[0, durationInFrames-30],
		[0, 2200],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

  console.log(leftMargin);
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      marginLeft: `-${leftMargin}px`,
      left: '0px'
    }}>
      <Img src={staticFile(`${imgSrc}`)} placeholder={"logo"}  height={"500px"}  />
    </div>
  );
};

export default ImgScroll;