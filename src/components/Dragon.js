import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDragonsReserved } from '../redux/dragons/dragonsReducer';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const toggleReservation = (e) => {
    dispatch(setDragonsReserved(e.target.dataset.id));
  };
  return (
    <li className="dragon__list-item">
      <div className="list__item-details">
        <img src={dragon.flickr_images[0]} alt={dragon.flickr_images[0]} />
        <h2>{dragon.name}</h2>
        <h3>{dragon.type}</h3>
        <p>{dragon.description}</p>
        <ul className="details-more">
          <li>
            <span>First flight: </span>
            <p>{dragon.first_flight}</p>
          </li>
          <li>
            <span>Crew capacity: </span>
            <p>{dragon.crew_capacity}</p>
          </li>
          <li>
            <span>Dry mass: </span>
            <p>
              {`${dragon.dry_mass_lb} lb. / ${dragon.dry_mass_kg} kg.`}
            </p>
          </li>
          <li>
            <span>Dev. partner: </span>
            <p>{dragon.dev_partner}</p>
          </li>
        </ul>
      </div>
      <button type="button" className="btn-blue" data-id={dragon.id} onClick={toggleReservation}>Reserve Dragon</button>
    </li>
  );
};

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    crew_capacity: PropTypes.number.isRequired,
    first_flight: PropTypes.string.isRequired,
    dry_mass_lb: PropTypes.number.isRequired,
    dry_mass_kg: PropTypes.number.isRequired,
    material: PropTypes.string.isRequired,
    size_meters: PropTypes.number.isRequired,
    temp_degrees: PropTypes.number.isRequired,
    dev_partner: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Dragon;
