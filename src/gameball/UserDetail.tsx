import { interpolate } from 'remotion';

interface UserDetailProps {
  userData: {
    numberOfPrs: number;
    numberOfprojects: number;
    favProject: string;
    favProjectCount: number;
    favDay: string;
    favDayCount: number;
    rank: number;
  };
  frame: number;
}

export const UserDetail: React.FC<UserDetailProps> = ({ userData, frame }) => {
  // Perform animations or display logic based on the frame number
  const translateY = interpolate(frame, [0, 200], [0, 50]);

  return (
    <div style={{ transform: `translateY(${translateY}px)`, transition: 'transform 1s' }}>
      <h1>User Details</h1>
      <p>Number of PRs: {userData.numberOfPrs}</p>
      <p>Number of projects: {userData.numberOfprojects}</p>
      <p>Favorite Project: {userData.favProject}</p>
      <p>Favorite Project Count: {userData.favProjectCount}</p>
      <p>Favorite Day: {userData.favDay}</p>
      <p>Favorite Day Count: {userData.favDayCount}</p>
      <p>Rank: {userData.rank}</p>
      {/* Display other user details */}
    </div>
  );
};
