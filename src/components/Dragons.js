import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dragon from './Dragon';
import { getDragonsAPI } from '../redux/dragons/dragonsReducer';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsList = useSelector((state) => state.dragonsReducer);

  useEffect(() => {
    if (dragonsList.length === 0) dispatch(getDragonsAPI());
  });

  return (
    <section className="page__section">
      <ul className="dragon__list rocket__list">
        {
          dragonsList && dragonsList.map((dragon) => <Dragon key={dragon.id} dragon={dragon} />)
        }
      </ul>
    </section>
  );
};

export default Dragons;
