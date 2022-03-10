const baseURL = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS_FROM_API = 'missionStore/missions/GET_MISSIONS_FROM_API';
const SET_MISSIONS_JOIN = 'missionStore/missions/SET_MISSIONS_JOIN';
const SET_MISSIONS_UNJOIN = 'missionStore/missions/SET_MISSIONS_UNJOIN';

const initializeState = [];

const getMissionsAPI = () => async (dispatch) => {
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = data.map((obj) => ({
        mission_id: obj.mission_id,
        mission_name: obj.mission_name,
        description: obj.description,
      }));
      dispatch({
        type: GET_MISSIONS_FROM_API,
        payload: newInitializeState,
      });
    });
};

const setMissionsJoin = (missionId) => ({ type: SET_MISSIONS_JOIN, payload: missionId });
const setMissionsUnjoin = (missionId) => ({ type: SET_MISSIONS_UNJOIN, payload: missionId });

const missionsReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_MISSIONS_FROM_API:
      return action.payload;
    case SET_MISSIONS_JOIN: {
      const newState = state.map((obj) => (obj.mission_id === action.payload
        ? { ...obj, reserved: true } : obj));
      return newState;
    }
    case SET_MISSIONS_UNJOIN: {
      const newState = state.map((obj) => (obj.mission_id === action.payload
        ? { ...obj, reserved: false } : obj));
      return newState;
    }
    default:
      return state;
  }
};

export {
  getMissionsAPI,
  setMissionsJoin,
  setMissionsUnjoin,
};

export default missionsReducer;
