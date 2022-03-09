import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocketsAPI } from '../redux/rockets/rocketsReducer';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsAPI());
  }, []);

  const rocketsList = [];

  return (
    <section className="page__section">
      <ul className="rocket__list">
        {
          rocketsList && rocketsList.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
        }
      </ul>
    </section>
  );
};

export default Rockets;
