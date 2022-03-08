import { PropTypes } from 'prop-types';

const Dragon = ({ dragon }) => (
  <li className="dragon__list-item">
    <div className="list_item-image">
      <img src={dragon.flickr_images[0]} alt={dragon.flickr_images[0]} />
    </div>
    <div className="list__item-details">
      <h2>{dragon.name}</h2>
      <h2>{dragon.type}</h2>
      <button type="button" className="btn-blue">Reserve Dragon</button>
    </div>
  </li>
);

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Dragon;