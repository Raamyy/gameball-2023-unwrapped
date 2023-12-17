import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { FONT_FAMILY } from './constants';



function getTitleStyle(gap: string, fontSize: string): React.CSSProperties {
	return {
		fontFamily: FONT_FAMILY,
		fontWeight: 'bold',
		fontSize: fontSize ?? 100,
		textAlign: 'center',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		display: 'flex',
		gap: gap ?? '16px',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center'
	};
}

const word: React.CSSProperties = {
	display: 'inline-block',
};

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
	gap?: string;
	fontSize?: string;
}> = ({ titleText, titleColor, gap = '16px', fontSize='100px' }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<h1 style={getTitleStyle(gap, fontSize)}>
			{words.map((t, i) => {
				const delay = i * 5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
