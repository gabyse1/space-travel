import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileMission = () => {
  const [arrJoined, setArrJoined] = useState([]);
  const myMissions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    setArrJoined(myMissions.filter((obj) => obj.reserved));
  }, []);

  return (
    <div className="profile__group">
      <h2>My Missions</h2>
      <ul className="profile__list">
        {
          arrJoined.length > 0
            ? arrJoined.map((obj) => <li key={obj.mission_id} className="profile__list-item">{obj.mission_name}</li>)
            : <p>You haven&apos;t joined any mission yet.</p>
        }
      </ul>
    </div>
  );
};

export default ProfileMission;
