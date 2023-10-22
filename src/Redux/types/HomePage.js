export const GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST';
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_GENRE = 'GET_MOVIE_GENRE';
export const GET_BY_GENRE = 'GET_BY_GENRE';
export const GET_MOVIE_SEARCH = 'GET_MOVIE_SEARCH';
export const GET_DETAIL_MOVIE = "GET_DETAIL_MOVIE";
export const GET_REVIEW_MOVIE = "GET_REVIEW_MOVIE";
export const GET_CAST_MOVIE = "GET_CAST_MOVIE";
export const GET_VIDEO_MOVIE = "GET_VIDEO_MOVIE";


export const getMovieReq = () => {
    return {
        type: GET_MOVIE_REQUEST
    }
}

export const getMovieError = () => {
    return {
        type: GET_MOVIE_ERROR
    }
}

export const getMovieSuccess = (payload) => {
    return {
        type: GET_MOVIE_SUCCESS,
        payload,
    }
}

export const getList = (payload) => {
    return {
        type: GET_MOVIE_GENRE,
        payload,
    }
}

export const getMovieGenre = (payload) => {
    return {
        type: GET_BY_GENRE,
        payload,
    }
}

export const getDetailMovie = (payload) => {
    return {
        type: GET_DETAIL_MOVIE,
        payload,
    }
}

export const getReviewMovie = (payload) => {
    return {
        type: GET_REVIEW_MOVIE,
        payload,
    };
};

export const getCastMovie = (payload) => {
    return {
        type: GET_CAST_MOVIE,
        payload,
    };
};

export const getValue = (payload) => {
    return {
        type: GET_MOVIE_SEARCH,
        payload,
    }
}

export const getVideoMovie = (payload) => {
    return {
        type: GET_VIDEO_MOVIE,
        payload,
    }
}