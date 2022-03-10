const baseURL = 'https://api.spacexdata.com/v3/dragons';

const GET_DRAGONS_FROM_API = 'dragonStore/dragons/GET_DRAGONS_FROM_API';
const SET_DRAGONS_RESERVED = 'dragonStore/dragons/SET_DRAGONS_RESERVED';

const initializeState = [];

const getDragonsAPI = () => async (dispatch) => {
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
      const newInitializeState = data.map((obj) => ({
        id: obj.id,
        name: obj.name,
        type: obj.type,
        description: obj.description,
        flickr_images: obj.flickr_images,
        crew_capacity: obj.crew_capacity,
        dry_mass_kg: obj.dry_mass_kg,
        dry_mass_lb: obj.dry_mass_lb,
        first_flight: obj.first_flight,
        material: obj.heat_shield.material,
        size_meters: obj.heat_shield.size_meters,
        temp_degrees: obj.heat_shield.temp_degrees,
        dev_partner: obj.heat_shield.dev_partner,
      }));
      dispatch({
        type: GET_DRAGONS_FROM_API,
        payload: newInitializeState,
      });
    });
};

const setDragonsReserved = (dragonId) => ({ type: SET_DRAGONS_RESERVED, payload: dragonId });

const dragonsReducer = (state = initializeState, action) => {
  switch (action.type) {
    case GET_DRAGONS_FROM_API:
      return action.payload;
    case SET_DRAGONS_RESERVED: {
      const newState = state.map((obj) => (obj.id === action.payload
        ? { ...obj, reserved: true } : obj));
      return newState;
    }
    default:
      return state;
  }
};

export {
  getDragonsAPI,
  setDragonsReserved,
};

export default dragonsReducer;
