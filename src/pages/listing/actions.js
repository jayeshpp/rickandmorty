import { ACTION_TYPES } from "./actionTypes";
import API from "../../lib/axios";
import { getQueryString } from "../../lib/utils/getQueryString";

export const setCharacters = (payload, config) => {
  let url = `/character`;
  if(payload) {
    let qs = getQueryString(payload)
    url += qs
  }

  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setValues("error", false));
    dispatch({
      type: ACTION_TYPES.SET_CHARACTERS,
      data: [],
      info: {},
    });
    API.get(url, { ...config })
      .then((response) => {
        dispatch(setLoading(false));
        dispatch({
          type: ACTION_TYPES.SET_CHARACTERS,
          data: response.data.results,
          info: response.data.info,
        });
      })
      .catch(({ response }) => {
        dispatch(setLoading(false));
        dispatch(setValues("error", true));
        dispatch(setValues("message", response?.data?.error));
      });
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
