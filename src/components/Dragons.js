import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dragon from './Dragon';
import { getDragonsAPI } from '../redux/dragons/dragonsReducer';

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragonsAPI());
  });
  const dragonsList = [];

  return (
    <section className="page__section">
      <ul className="dragon__list">
        {
          dragonsList && dragonsList.map((dragon) => <Dragon key={dragon.id} dragon={dragon} />)
        }
      </ul>
    </section>
  );
};

export default Dragons;
