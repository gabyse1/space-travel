import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setRocketsReserved, setRocketsUnreserved } from '../redux/rockets/rocketsReducer';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const toggleReservation = (e) => {
    if (!rocket.reserved) dispatch(setRocketsReserved(+e.target.dataset.id));
    else dispatch(setRocketsUnreserved(+e.target.dataset.id));
  };

  return (
    <li className="rocket__list-item">
      <div className="list__item-image">
        <img src={rocket.flickr_images[0]} alt={rocket.flickr_images[0]} />
      </div>
      <div className="list__item-details">
        <h2>{rocket.rocket_name}</h2>
        <p>
          {rocket.description}
        </p>
        <button type="button" className="btn-blue" data-id={rocket.id} onClick={toggleReservation}>Reserve Rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
