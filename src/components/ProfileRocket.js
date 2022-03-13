import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileRocket = () => {
  const [arrReserved, setArrReserved] = useState([]);
  const myRockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    setArrReserved(myRockets.filter((obj) => obj.reserved));
  }, []);

  return (
    <div className="profile__group">
      <h2>My Rockets</h2>
      <ul className="profile__list">
        {
          arrReserved.length > 0
            ? arrReserved.map((obj) => <li key={obj.id} className="profile__list-item" data-testid="reservedRocket">{obj.rocket_name}</li>)
            : <p>You haven&apos;t booked any rocket yet.</p>
        }
      </ul>
    </div>
  );
};

export default ProfileRocket;
