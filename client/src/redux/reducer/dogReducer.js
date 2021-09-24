import {
  GET_BREEDS,
  GET_BREED,
  GET_TEMPERAMENT,
  CREATE_BREED,
  CLEAN_BREED,
} from "../actions/Actions";

const initialState = {
  breedList: [],
  breed: [],
  temperament: [],
};

function dogReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_BREEDS:
      return { ...state, breedList: payload };
    case GET_BREED:
      return { ...state, breed: payload };
    case GET_TEMPERAMENT:
      return { ...state, temperament: payload };
    case CLEAN_BREED:
      return { ...state, breed: payload };
    case CREATE_BREED:
      return { ...state, breedList: payload };
    default:
      return state;
  }
}

export default dogReducer;
