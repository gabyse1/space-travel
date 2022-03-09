import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAPI } from '../redux/rockets/rocketsReducer';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((store) => store.rocketsReducer);

  useEffect(() => {
    if (rocketsList.length === 0) dispatch(getRocketsAPI());
  }, []);

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
