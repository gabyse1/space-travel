const baseURL = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS_FROM_API = 'rocketStore/rockets/GET_ROCKETS_FROM_API';

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

const rocketsReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_ROCKETS_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getRocketsAPI,
};

export default rocketsReducer;
