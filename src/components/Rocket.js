import { PropTypes } from 'prop-types';

const Rocket = ({ rocket }) => (
  <li className="rocket__list-item">
    <div className="list__item-image">
      <img src={rocket.flickr_images[0]} alt={rocket.flickr_images[0]} />
    </div>
    <div className="list__item-details">
      <h2>{rocket.rocket_name}</h2>
      <p>
        {rocket.description}
      </p>
      <button type="button" className="btn-blue">Reserve Rocket</button>
    </div>
  </li>
);

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
