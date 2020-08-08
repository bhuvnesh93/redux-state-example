import { ADD_PLACE } from '../action/types';

const initialState = {
  placeName: {},
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        placeName: action.payload,
      };
    default:
      return state;
  }
};

export default placeReducer;
