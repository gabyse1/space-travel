import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMissionsJoin, setMissionsUnjoin } from '../redux/missions/missionsReducer';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const toggleJoining = (e) => {
    if (!mission.reserved) dispatch(setMissionsJoin(e.target.dataset.id));
    else dispatch(setMissionsUnjoin(e.target.dataset.id));
  };

  return (
    <tr className="mission__table-row">
      <td className="table__row-mission"><h3>{mission.mission_name}</h3></td>
      <td className="table__row-description"><p>{mission.description}</p></td>
      <td className="table__row-status">
        <span className={mission.reserved ? 'badge-active' : 'badge-unactive'} data-testid="badgeMember" role="status" aria-live="polite">
          {mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
        </span>
      </td>
      <td className="table__row-join">
        <button
          type="button"
          className={mission.reserved ? 'btn-cancelBooking' : 'btn-booking'}
          data-id={mission.mission_id}
          onClick={toggleJoining}
          data-testid={mission.mission_id}
          aria-label={!mission.reserved ? `Join to ${mission.mission_name} mission` : `Leave ${mission.mission_name} mission`}
        >
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
