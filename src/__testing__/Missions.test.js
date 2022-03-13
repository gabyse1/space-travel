import missionsReducer from '../redux/missions/missionsReducer';

describe('Validate missions reducers', () => {
  const GET_MISSIONS_FROM_API = 'missionStore/missions/GET_MISSIONS_FROM_API';
  const SET_MISSIONS_JOIN = 'missionStore/missions/SET_MISSIONS_JOIN';
  const SET_MISSIONS_UNJOIN = 'missionStore/missions/SET_MISSIONS_UNJOIN';

  const defaultData = {
    mission_id: '9D1B7E0',
    mission_name: 'Thaicom',
    description: 'Description Thaicom',
  };

  it('When there is neither an state nor an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(missionsReducer(undefined, {})).toEqual([]);
  });

  it('When dispatch action GET_MISSIONS_FROM_API, the reducer should update the empty initial state with the API data.', () => {
    const initialState = [];
    const apiData = [defaultData];
    const action = { type: GET_MISSIONS_FROM_API, payload: apiData };

    expect(missionsReducer(initialState, action)).toEqual(apiData);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = [defaultData];
    expect(missionsReducer(previousState, {})).toEqual(previousState);
  });

  it('When dispatch action SET_MISSIONS_JOIN, the reducer should add a property reserved=true to the rocket with id = 2.', () => {
    const previousState = [defaultData];
    const action = { type: SET_MISSIONS_JOIN, payload: '9D1B7E0' };
    const newState = [{ ...defaultData, reserved: true }];

    expect(missionsReducer(previousState, action)).toEqual(newState);
  });

  it('When dispatch action SET_MISSIONS_UNJOIN, the reducer should change the reserved property from true to false of the rocket with id = 2.', () => {
    const previousState = [{ ...defaultData, reserved: true }];
    const action = { type: SET_MISSIONS_UNJOIN, payload: '9D1B7E0' };
    const newState = [{ ...defaultData, reserved: false }];

    expect(missionsReducer(previousState, action)).toEqual(newState);
  });
});
