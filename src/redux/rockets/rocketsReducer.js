const baseURL = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS_FROM_API = 'rocketStore/rockets/GET_ROCKETS_FROM_API';
const SET_ROCKETS_RESERVED = 'rocketStore/rockets/SET_ROCKETS_RESERVED';
const SET_ROCKETS_UNRESERVED = 'rocketStore/rockets/SET_ROCKETS_UNRESERVED';

const initializeState = [];

const getRocketsAPI = () => async (dispatch) => {
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = data.map((obj) => ({
        id: obj.id,
        rocket_name: obj.rocket_name,
        description: obj.description,
        flickr_images: obj.flickr_images,
      }));
      dispatch({
        type: GET_ROCKETS_FROM_API,
        payload: newInitializeState,
      });
    });
};

const setRocketsReserved = (rocketId) => ({ type: SET_ROCKETS_RESERVED, payload: rocketId });
const setRocketsUnreserved = (rocketId) => ({ type: SET_ROCKETS_UNRESERVED, payload: rocketId });

const rocketsReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_ROCKETS_FROM_API:
      return action.payload;
    case SET_ROCKETS_RESERVED: {
      const newState = state.map((obj) => (obj.id === action.payload
        ? { ...obj, reserved: true } : obj));
      return newState;
    }
    case SET_ROCKETS_UNRESERVED: {
      const newState = state.map((obj) => (obj.id === action.payload
        ? { ...obj, reserved: false } : obj));
      return newState;
    }
    default:
      return state;
  }
};

export {
  getRocketsAPI,
  setRocketsReserved,
  setRocketsUnreserved,
};

export default rocketsReducer;
