import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileDragon = () => {
  const [arrReserved, setArrReserved] = useState([]);
  const myDragons = useSelector((state) => state.dragonsReducer);
  useEffect(() => {
    setArrReserved(myDragons.filter((obj) => obj.reserved));
  }, []);

  return (
    <div className="profile__group">
      <h2>My Dragons</h2>
      <ul className="profile__list">
        {
          arrReserved.length > 0
            ? arrReserved.map((obj) => <li key={obj.id} className="profile__list-item" data-testid="reservedDragon">{obj.name}</li>)
            : <p>You haven&apos;t booked any dragons yet.</p>
        }
      </ul>
    </div>
  );
};

export default ProfileDragon;
