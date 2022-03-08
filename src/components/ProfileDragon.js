const ProfileDragon = () => {
  const myDragons = [
    {
      id: 'dragon1',
      name: 'Dragon 1',
      type: 'capsule',
      flickr_images: [
        'https://i.imgur.com/9fWdwNv.jpg',
        'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
        'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
        'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
      ],
      reserved: true,
    },
    {
      id: 'dragon2',
      name: 'Dragon 2',
      type: 'capsule',
      flickr_images: [
        'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
        'https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg',
        'https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg',
      ],
      reserved: true,
    },
  ];

  return (
    <div className="profile__group">
      <h2>My Dragons</h2>
      <ul className="profile__list">
        {
          myDragons && myDragons.filter((obj) => obj.reserved).map((obj) => <li key={obj.id} className="profile__list-item">{obj.name}</li>)
        }
      </ul>
    </div>
  );
};

export default ProfileDragon;
