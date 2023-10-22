import {
  getMovieReq,
  getMovieSuccess,
  GET_MOVIE_GENRE,
  GET_BY_GENRE,
  GET_DETAIL_MOVIE,
  GET_MOVIE_SEARCH,
  GET_REVIEW_MOVIE,
  GET_CAST_MOVIE, GET_VIDEO_MOVIE
} from '../types/HomePage';
import axios from 'axios';
import {
  movieUrl,
  genreListUrl,
  apiKey,
} from "../../Utils/constants";

export const getMovies = (page = 1) => {
  return (dispatch) => {
    dispatch(getMovieReq);
    return axios
      .get(`${movieUrl}movie/popular?${apiKey}&language=en-US&page=${page}`)
      .then(response => {
        const movies = response.data.results
        dispatch(getMovieSuccess(movies))
      })
      .catch((err) => console.log(err));
  };
};

export const getGenreList = () => {
  return (dispatch) => {
    return axios
      .get(`${genreListUrl}`)
      .then((res) => {
        dispatch({
          type: GET_MOVIE_GENRE,
          payload: res.data.genres,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getMovieByGenre = (id) => {
  return (dispatch) => {
    axios
      .get(
        `${movieUrl}movie/popular?${apiKey}&language=en-US&page=1&with_genres=${id}`
      )
      .then((res) => {
        dispatch({
          type: GET_BY_GENRE,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getSearchValue = (value) => {
  return (dispatch) => {
    axios
      .get(
        `${movieUrl}search/movie?${apiKey}&query=${value}`
      )
      .then((res) => {
        dispatch({
          type: GET_MOVIE_SEARCH,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getDetailMovieById = (id) => {
  return (dispatch) => {
    axios.get(`${movieUrl}movie/${id}?${apiKey}&language=en-US&append_to_response=`)
      .then((res) => {
        dispatch({
          type: GET_DETAIL_MOVIE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getReviewMovieById = (id) => {
  return (dispatch) => {
    axios.get(`${movieUrl}movie/${id}/reviews?${apiKey}&language=en-US&`)
      .then((res) => {
        dispatch({
          type: GET_REVIEW_MOVIE,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getCastMovieById = (id) => {
  return (dispatch) => {
    axios.get(`${movieUrl}movie/${id}/credits?${apiKey}&language=en-US&`)
      .then((res) => {
        dispatch({
          type: GET_CAST_MOVIE,
          payload: res.data.cast,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getVideoMovieById = (id) => {
  return (dispatch) => {
    axios.get(`${movieUrl}movie/${id}/videos?${apiKey}`)
      .then((res) => {
        dispatch({
          type: GET_VIDEO_MOVIE,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};


