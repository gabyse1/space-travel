import { PropTypes } from 'prop-types';

const Mission = ({ mission }) => (
  <tr className="mission__table-row">
    <td className="table__row-mission"><h3>{mission.mission_name}</h3></td>
    <td className="table__row-description"><p>{mission.description}</p></td>
    <td className="table__row-status">
      <button type="button" className="btn-notmember">NOT A MEMBER</button>
    </td>
    <td className="table__row-join">
      <button type="button" className="btn-notjoin">Join Mission</button>
    </td>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
