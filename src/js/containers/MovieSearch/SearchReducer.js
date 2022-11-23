const defaultState = {
    title: ""
};

export default function SearchReducer (state = defaultState, action) {

    const { type, payload } = action;
    console.log("payload", payload)
    switch(type) {

        case 'UPDATE_SEARCH': {

            return {
                ...state,

                title: payload.title
            };
        }

        case 'GET_MOVIE_PENDING': {
            
            return {
                ...state,

                pending: true
            };
        }

        case 'GET_MOVIE_FULFILLED': {
          
            return {
                ...state,

                searchInput: payload.data.Search.Title,
                movies: payload.data.Search
            };
        }

        case 'GET_MOVIE_INFO_FULFILLED': {
          
            return {
                ...state,

                movieData: payload.data
            };
        }
        default: {
            return state;
        }
    }

    
}