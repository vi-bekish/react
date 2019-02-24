import { GET_GENRES_REQUEST, GET_GENRES_SUCCESS } from '../services';
import { store, api } from '../services';

export const getGenres = () => {
  const request = () => ({ 
    type: GET_GENRES_REQUEST 
  });
  const success = genres => ({ 
    type: GET_GENRES_SUCCESS, 
    genres 
  });

  return async dispatch => {
    if (store.getState().genres.genres === undefined) {
      dispatch(request());
      const response = await api.getGenres();
      dispatch(success(response.data));
    }
  };
};
