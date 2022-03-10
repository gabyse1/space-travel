const ProfileRocket = () => {
  const myRockets = [
    {
      id: 1,
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      rocket_name: 'Falcon 1',
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
        'https://imgur.com/azYafd8.jpg',
      ],
      reserved: true,
    },
    {
      id: 2,
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      rocket_name: 'Falcon 9',
      flickr_images: [
        'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
        'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg',
        'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
        'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg',
        'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg',
      ],
      reserved: true,
    },
  ];

  return (
    <div className="profile__group">
      <h2>My Rockets</h2>
      <ul className="profile__list">
        {
          myRockets.length > 0 ? myRockets.filter((obj) => obj.reserved).map((obj) => <li key={obj.id} className="profile__list-item">{obj.rocket_name}</li>) : <p>You haven&apos;t booked any rockets yet.</p>
        }
      </ul>
    </div>
  );
};

export default ProfileRocket;
