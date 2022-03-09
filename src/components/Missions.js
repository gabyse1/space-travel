import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { getMissionsAPI } from '../redux/missions/missionsReducer';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    if (missionsList.length === 0) dispatch(getMissionsAPI());
  }, []);

  return (
    <section className="page__section">
      <table className="mission__table">
        <thead className="mission__table-head">
          <tr className="mission__table-row">
            <td className="table__row-mission"><h3>MISSION</h3></td>
            <td className="table__row-description"><h3>DESCRIPTION</h3></td>
            <td className="table__row-status"><h3>STATUS</h3></td>
            <td className="table__row-join" />
          </tr>
        </thead>
        <tbody className="mission__table-body">
          {
            missionsList.map((mission) => <Mission key={mission.mission_id} mission={mission} />)
          }
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
