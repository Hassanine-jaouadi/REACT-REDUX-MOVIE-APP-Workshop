import {
  SEARCH_INPUT,
  RATING_SEARCH,
  DELETE_MOVIE,
  ADD_MOVIE,
  EDIT_MOVIE
} from "../constants/actions-types";

//Actions are objects that tell reducer how to change data
//Actions are payloads of information that send data from your application to your store.
//  Each action creator contains an action and payload which contains the data we need to pass to the reducers.
export const searchHandler = payload => ({
  type: SEARCH_INPUT,
  payload
});

export const ratingSearch = payload => ({
  type: RATING_SEARCH,
  payload
});

export const deleteMovie = payload => ({
  type: DELETE_MOVIE,
  payload
});

export const addNewMovie = payload => ({
  type: ADD_MOVIE,
  payload: {
    ...payload,
    id: Date.now()
  }
});
export const editMovie = payload => ({
  type: EDIT_MOVIE,
  payload
});
