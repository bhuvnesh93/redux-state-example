import { ADD_PLACE } from './types';

export const addPlace = (placeName) => ({
  type: ADD_PLACE,
  payload: { placeName },
});

export const test = () => {
  //
};
