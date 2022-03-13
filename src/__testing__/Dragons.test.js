import dragonsReducer from '../redux/dragons/dragonsReducer';

describe('Validate dragons reducers', () => {
  const GET_DRAGONS_FROM_API = 'dragonStore/dragons/GET_DRAGONS_FROM_API';
  const SET_DRAGONS_RESERVED = 'dragonStore/dragons/SET_DRAGONS_RESERVED';
  const SET_DRAGONS_UNRESERVED = 'dragonStore/dragons/SET_DRAGONS_UNRESERVED';

  const defaultData = {
    id: 'dragon1',
    name: 'Dragon 1',
    type: 'capsule',
    description: 'Description Dragon 1',
    flickr_images: ['https://i.imgur.com/9fWdwNv.jpg'],
    crew_capacity: 0,
    dry_mass_kg: 4200,
    dry_mass_lb: 9300,
    first_flight: '2010-12-08',
    dev_partner: 'NASA',
  };

  it('When there is neither an state nor an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(dragonsReducer(undefined, {})).toEqual([]);
  });

  it('When dispatch action GET_DRAGONS_FROM_API, the reducer should update the empty initial state with the API data.', () => {
    const initialState = [];
    const apiData = [defaultData];
    const action = { type: GET_DRAGONS_FROM_API, payload: apiData };

    expect(dragonsReducer(initialState, action)).toEqual(apiData);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = [defaultData];
    expect(dragonsReducer(previousState, {})).toEqual(previousState);
  });

  it('When dispatch action SET_DRAGONS_RESERVED, the reducer should add a property reserved=true to the rocket with id = 2.', () => {
    const previousState = [defaultData];
    const action = { type: SET_DRAGONS_RESERVED, payload: 'dragon1' };
    const newState = [{ ...defaultData, reserved: true }];

    expect(dragonsReducer(previousState, action)).toEqual(newState);
  });

  it('When dispatch action SET_DRAGONS_UNRESERVED, the reducer should change the reserved property from true to false of the rocket with id = 2.', () => {
    const previousState = [{ ...defaultData, reserved: true }];
    const action = { type: SET_DRAGONS_UNRESERVED, payload: 'dragon1' };
    const newState = [{ ...defaultData, reserved: false }];

    expect(dragonsReducer(previousState, action)).toEqual(newState);
  });
});
