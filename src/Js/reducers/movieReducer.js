import {
  SEARCH_INPUT,
  RATING_SEARCH,
  DELETE_MOVIE,
  ADD_MOVIE,
  EDIT_MOVIE
} from "../constants/actions-types";

//initial state
const initialState = {
  movieList: [
    {
      id: 1050,
      title: "Casa de papel",
      poster:
        "https://ae01.alicdn.com/kf/Hb2ce8398ccd34e46bc223a17ddbf3835W.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=BU22bD6l-qE"
    },
    {
      id: 1205,
      title: "Elite",
      poster:
        "https://fr.web.img4.acsta.net/pictures/18/10/18/07/54/1893178.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=QNwhAdrdwp0"
    },
    {
      id: 20265,
      title: "The invisible guest",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=epCg2RbyF80"
    },
    {
      id: 336598,
      title: "Begin Again ",
      poster:
        "https://i.pinimg.com/originals/0c/1a/1c/0c1a1c4ac81b7ec000165067d40a6084.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=uTRCxOE7Xzc"
    }
  ],
  searchInput: "",
  ratingSearch: 0
};

// Reducers (it is a fnction that take ation and state as parameter )
// then it changes the state and stores it in store
const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload
      };
    case RATING_SEARCH:
      return {
        ...state,
        ratingSearch: payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieList: state.movieList.filter(el => el.id != payload)
      };
    case ADD_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieList: [...state.movieList, payload]
      };
    case EDIT_MOVIE:
      return {
        ...state,
        //eslint-disable-next-line
        movieList: state.movieList.map(el =>
          el.id === payload.id ? payload : el
        )
      };

    default:
      return state;
  }
};

export default movieReducer;
