const baseURL = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS_FROM_API = 'missionStore/missions/GET_MISSIONS_FROM_API';

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

const missionsReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_MISSIONS_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getMissionsAPI,
};

export default missionsReducer;
