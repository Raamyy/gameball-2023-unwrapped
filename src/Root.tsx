import {Composition} from 'remotion';
import Main from './gameball/Main';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="gameball-unwrapped"
				component={Main}
				durationInFrames={759}
				fps={30}
				width={720}
				height={1280}
			/>
		</>
	);
};
