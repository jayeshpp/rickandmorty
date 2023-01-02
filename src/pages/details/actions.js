import { ACTION_TYPES } from "./actionTypes";
import API from "../../lib/axios";

export const setCharacter = (id, config) => {
  let url = `/character/${id}`;
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch({
      type: ACTION_TYPES.SET_CHARACTER,
      data: {}
    })
    API.get(url, { ...config })
      .then((response) => {
        dispatch(setLoading(false));
        dispatch({
          type: ACTION_TYPES.SET_CHARACTER,
          data: response.data,
        });
      })
      .catch(({response}) => {
        dispatch(setValues("error", true));
        dispatch(setValues("message", response?.data?.error));
      })
  };
};

export const setLoading = (loading) => {
  return {
    type: ACTION_TYPES.SET_LOADING,
    loading,
  };
};

export const setValues = (key, value) => {
  return {
    type: ACTION_TYPES.SET_VALUES,
    key,
    value,
  };
};

export const setFilters = (filters) => {
  return {
    type: ACTION_TYPES.SET_FILTERS,
    filters
  };
};
