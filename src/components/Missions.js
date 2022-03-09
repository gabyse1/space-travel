import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Mission from './Mission';
import { getMissionsAPI } from '../redux/missions/missionsReducer';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsAPI());
  }, []);

  const missionsList = [];

  return (
    <section className="page__section">
      <ul className="mission__list">
        <li className="mission-list-item">
          <div className="list__item-mission"><h3>Mission</h3></div>
          <div className="list__item-description"><h3>Description</h3></div>
          <div className="list__item-status"><h3>Status</h3></div>
          <div className="list__item-join" />
        </li>
        {
          missionsList.map((mission) => <Mission key={mission.mission_id} mission={mission} />)
        }
      </ul>
    </section>
  );
};

export default Missions;
