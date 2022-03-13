import rocketsReducer from '../redux/rockets/rocketsReducer';

describe('Validate rocket reducers', () => {
  const GET_ROCKETS_FROM_API = 'rocketStore/rockets/GET_ROCKETS_FROM_API';
  const SET_ROCKETS_RESERVED = 'rocketStore/rockets/SET_ROCKETS_RESERVED';
  const SET_ROCKETS_UNRESERVED = 'rocketStore/rockets/SET_ROCKETS_UNRESERVED';

  const defaultData = {
    id: 2,
    rocket_name: 'Falcon 9',
    description: 'Description Falcon 9.',
    flickr_images: ['https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'],
  };

  it('When there is neither an state nor an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(rocketsReducer(undefined, {})).toEqual([]);
  });

  it('When dispatch action GET_ROCKETS_FROM_API, the reducer should update the empty initial state with the API data.', () => {
    const initialState = [];
    const apiData = [defaultData];
    const action = { type: GET_ROCKETS_FROM_API, payload: apiData };

    expect(rocketsReducer(initialState, action)).toEqual(apiData);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = [defaultData];
    expect(rocketsReducer(previousState, {})).toEqual(previousState);
  });

  it('When dispatch action SET_ROCKETS_RESERVED, the reducer should add a property reserved=true to the rocket with id = 2.', () => {
    const previousState = [defaultData];
    const action = { type: SET_ROCKETS_RESERVED, payload: 2 };
    const newState = [{ ...defaultData, reserved: true }];

    expect(rocketsReducer(previousState, action)).toEqual(newState);
  });

  it('When dispatch action SET_ROCKETS_UNRESERVED, the reducer should change the reserved property from true to false of the rocket with id = 2.', () => {
    const previousState = [{ ...defaultData, reserved: true }];
    const action = { type: SET_ROCKETS_UNRESERVED, payload: 2 };
    const newState = [{ ...defaultData, reserved: false }];

    expect(rocketsReducer(previousState, action)).toEqual(newState);
  });
});
