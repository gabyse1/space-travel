const baseURL = 'https://api.spacexdata.com/v3/dragons';

const GET_DRAGONS_FROM_API = 'dragonStore/dragons/GET_DRAGONS_FROM_API';

const initializeState = [];

const getDragonsAPI = () => async (dispatch) => {
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = data.map((obj) => ({
        id: obj.id,
        name: obj.name,
        type: obj.type,
        flickr_images: obj.flickr_images,
      }));
      dispatch({
        type: GET_DRAGONS_FROM_API,
        payload: newInitializeState,
      });
    });
};

const dragonsReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_DRAGONS_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export {
  getDragonsAPI,
};

export default dragonsReducer;
