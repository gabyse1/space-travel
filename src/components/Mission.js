import { PropTypes } from 'prop-types';

const Mission = ({ mission }) => (
  <li className="mission-list-item">
    <div className="list__item-mission"><h3>{mission.mission_name}</h3></div>
    <div className="list__item-description"><p>{mission.description}</p></div>
    <div className="list__item-status">
      <button type="button" className="btn-member">NOT A MEMBER</button>
    </div>
    <div className="list__item-join">
      <button type="button" className="btn-join">Join Mission</button>
    </div>
  </li>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
