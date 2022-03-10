import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMissionsJoin } from '../redux/missions/missionsReducer';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const toggleJoining = (e) => {
    dispatch(setMissionsJoin(e.target.dataset.id));
  };

  return (
    <tr className="mission__table-row">
      <td className="table__row-mission"><h3>{mission.mission_name}</h3></td>
      <td className="table__row-description"><p>{mission.description}</p></td>
      <td className="table__row-status">
        <button type="button" className="btn-notmember">NOT A MEMBER</button>
      </td>
      <td className="table__row-join">
        <button type="button" className="btn-notjoin" data-id={mission.mission_id} onClick={toggleJoining}>Join Mission</button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
