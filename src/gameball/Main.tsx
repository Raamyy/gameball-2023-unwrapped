import { AbsoluteFill, Img, Sequence, staticFile, Audio, interpolate } from 'remotion';
import { Title } from './Title';
import RollingNumber from './RollingNumber';
import { FONT_FAMILY } from "./constants";
import Confetti, { ConfettiConfig } from '../confetti';
import ImgScroll from './ImgScroll';


const PrAnalysis = {
  Raamyy: {
    numberOfPrs: 186,
    numberOfprojects: 8,
    favProject: 'g-backend-v2',
    favProjectCount: 105,
    favDay: 'Tuesday',
    favDayCount: 48,
    rank: 9
  },
  'abdelrahman ahmed': {
    numberOfPrs: 496,
    numberOfprojects: 14,
    favProject: 'g-backend-v2',
    favProjectCount: 275,
    favDay: 'Wednesday',
    favDayCount: 114,
    rank: 1
  },
  'Youssef ElSayad': {
    numberOfPrs: 409,
    numberOfprojects: 12,
    favProject: 'gb-frontend-v2',
    favProjectCount: 177,
    favDay: 'Wednesday',
    favDayCount: 102,
    rank: 2
  },
  'Galal Shaban': {
    numberOfPrs: 194,
    numberOfprojects: 6,
    favProject: 'g-backend-v2',
    favProjectCount: 156,
    favDay: 'Wednesday',
    favDayCount: 49,
    rank: 8
  },
  'Ahmed El Monady': {
    numberOfPrs: 170,
    numberOfprojects: 6,
    favProject: 'gb-frontend-v2',
    favProjectCount: 74,
    favDay: 'Tuesday',
    favDayCount: 52,
    rank: 10
  },
  'youmna.khaled': {
    numberOfPrs: 239,
    numberOfprojects: 8,
    favProject: 'gb-frontend-v2',
    favProjectCount: 155,
    favDay: 'Tuesday',
    favDayCount: 59,
    rank: 7
  },
  'Jomana Wael': {
    numberOfPrs: 117,
    numberOfprojects: 9,
    favProject: 'g-backend-v2',
    favProjectCount: 59,
    favDay: 'Tuesday',
    favDayCount: 32,
    rank: 14
  },
  'Mohamed Ashraf': {
    numberOfPrs: 121,
    numberOfprojects: 10,
    favProject: 'g-backend-v2',
    favProjectCount: 66,
    favDay: 'Monday',
    favDayCount: 30,
    rank: 13
  },
  'Ahmed Elfiky': {
    numberOfPrs: 242,
    numberOfprojects: 9,
    favProject: 'g-backend-v2',
    favProjectCount: 84,
    favDay: 'Tuesday',
    favDayCount: 84,
    rank: 6
  },
  'Mina Mohsen': {
    numberOfPrs: 153,
    numberOfprojects: 9,
    favProject: 'gb-frontend-v2',
    favProjectCount: 57,
    favDay: 'Tuesday',
    favDayCount: 64,
    rank: 11
  },
  'mohaned tarek mashaly': {
    numberOfPrs: 248,
    numberOfprojects: 9,
    favProject: 'gb-frontend-v2',
    favProjectCount: 106,
    favDay: 'Tuesday',
    favDayCount: 58,
    rank: 5
  },
  Amr: {
    numberOfPrs: 1,
    numberOfprojects: 1,
    favProject: 'g-backend-v2',
    favProjectCount: 1,
    favDay: 'Monday',
    favDayCount: 1,
    rank: 16
  },
  'Ali Souidan': {
    numberOfPrs: 44,
    numberOfprojects: 2,
    favProject: 'g-backend-v2',
    favProjectCount: 40,
    favDay: 'Tuesday',
    favDayCount: 13,
    rank: 15
  },
  'Mariam Enany': {
    numberOfPrs: 1,
    numberOfprojects: 1,
    favProject: 'g-backend-v2',
    favProjectCount: 1,
    favDay: 'Sunday',
    favDayCount: 1,
    rank: 16
  },
  'Mostafa Moaty': {
    numberOfPrs: 272,
    numberOfprojects: 3,
    favProject: 'gb-frontend-v2',
    favProjectCount: 217,
    favDay: 'Tuesday',
    favDayCount: 62,
    rank: 4
  },
  'mohamed.elaraby': {
    numberOfPrs: 290,
    numberOfprojects: 2,
    favProject: 'gb-frontend-v2',
    favProjectCount: 240,
    favDay: 'Wednesday',
    favDayCount: 78,
    rank: 3
  },
  'Tasneem Hazem': {
    numberOfPrs: 151,
    numberOfprojects: 3,
    favProject: 'gb-frontend-v2',
    favProjectCount: 95,
    favDay: 'Tuesday',
    favDayCount: 33,
    rank: 12
  }
}

const NamesMap = {
  Raamyy: 'Raamyy',
  'abdelrahman ahmed': 'Bodda',
  'Youssef ElSayad': 'Sayad',
  'Galal Shaban': 'Galal',
  'Ahmed El Monady': 'Monady',
  'youmna.khaled': 'Youmna',
  'Jomana Wael': 'Jomana',
  'Mohamed Ashraf': 'Ashraf 🐳',
  'Ahmed Elfiky': 'Fiky',
  'Mina Mohsen': 'Mina',
  'mohaned tarek mashaly': 'Mohaned',
  'Amr': 'Amr',
  'Mostafa Moaty': 'Moaty',
  'mohamed.elaraby': 'Do7a',
  'Tasneem Hazem': 'Tasneem'
};

const CurrentUser = "Raamyy";

const confettiConfig1: ConfettiConfig = {
  particleCount: 200,
  startVelocity: 30,
  spread: 600,
  x: 360,
  y: 640,
  scalar: 1,
}

const UserContributions: React.FC = () => {
  // const frame = useCurrentFrame(); // Get the current frame number

  // Your user object data
  const userData = PrAnalysis[CurrentUser];

  return (
    <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Audio src={staticFile("music.mp3")} startFrom={1446} placeholder={"music"} volume={(f) =>
        interpolate(f, [600, 758], [1, 0], { extrapolateLeft: "clamp" })} />

      <AbsoluteFill style={{ backgroundColor: '#ffc348' }}>
        <div style={{ position: 'fixed', bottom: 0, right: '20px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
          <h1>#Gameball2023Unwrapped</h1>
        </div>

        <div style={{ position: 'fixed', top: '40px', left: '30px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
          <Img src={staticFile("logo.svg")} placeholder={"logo"} width={"250px"} style={{ fill: 'white' }} />
        </div>

        <Sequence from={0} durationInFrames={40}>
          <Title titleText={`Hi, ${NamesMap[CurrentUser] ?? CurrentUser}`} titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={40} durationInFrames={70}>
          <Title titleText="Welcome to your 2023 Gameball Unwrapped 🎉!" titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={110} durationInFrames={60}>
          <Title titleText="You have completed 🥁" titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={160} durationInFrames={80}>
          <RollingNumber number={userData.numberOfPrs} duration={80} freeze={35} subTitle="PRs this year!" />
        </Sequence>

        <Sequence from={210} durationInFrames={50}>
          <Confetti {...confettiConfig1} />
        </Sequence>

        <Sequence from={238} durationInFrames={64}>
          <Title titleText="What an outstanding effort 💝!" titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={300} durationInFrames={60}>
          <Title titleText={`You've contributed in ${userData.numberOfprojects} projects`} titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={360} durationInFrames={60}>
          <Title titleText="However, Your favourite project is..." titleColor="#0d0d1e" />
        </Sequence>

        <Sequence from={420} durationInFrames={70}>
          <Title titleText={`${userData.favProject} with total of ${userData.favProjectCount} PRs!`} titleColor="Black" />
        </Sequence>

        <Sequence from={490} durationInFrames={60}>
          <Title titleText={`You have your own routine 💅`} titleColor="#0d0d1e" fontSize='80px' />
        </Sequence>

        <Sequence from={550} durationInFrames={80}>
          <Title titleText={`You opened ${userData.favDayCount} PRs on ${userData.favDay}s!`} titleColor="#0d0d1e" />
        </Sequence>

      </AbsoluteFill>
      <Sequence from={630} durationInFrames={130}>
        <AbsoluteFill style={{ backgroundColor: ' white' }}>
          <div style={{ position: 'fixed', bottom: 0, right: '20px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
            <h1>#Gameball2023Unwrapped</h1>
          </div>

          <div style={{ position: 'fixed', top: '40px', left: '30px', fontFamily: FONT_FAMILY, fontWeight: 'bolder' }}>
            <Img src={staticFile("logo.svg")} placeholder={"logo"} width={"250px"} style={{ fill: 'white' }} />
          </div>

          <ImgScroll imgSrc={`${CurrentUser}.png`} />

          <Sequence from={0} durationInFrames={60}>
            <Title titleText={`WHAT A JOURNEY!`} titleColor="#0d0d1e" />
          </Sequence>

          <Sequence from={50} durationInFrames={50}>
            <Title titleText={`See you at 2024 👋💖`} titleColor="#0d0d1e" />
          </Sequence>

          <Sequence from={100} >
              <Title titleText={`#gameball_tech`} titleColor="#0d0d1e" fontSize='80px'/>
          </Sequence>

        </AbsoluteFill>
      </Sequence>
    </div>
  );
};

// Render the Remotion composition
export default UserContributions;
