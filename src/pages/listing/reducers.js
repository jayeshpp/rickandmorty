import { createReducer } from "../../store/createReducer";
import { ACTION_TYPES } from "./actionTypes";

const initialState = {
  characters: [],
  info: {},
  loading: true,
  error: false,
  message: '',
  filters: {
    page: 0
  }
};

const setCharacters = (state, { data, info }) => {
  return {
    ...state,
    characters: data,
    info: info
  };
};

const setLoading = (state, { loading }) => {
  return {
    ...state,
    loading: loading
  };
};

const setValues = (state, { key, value }) => {
  return {
    ...state,
    [key]: value
  };
};

const setFilters = (state, { filters }) => {
  return {
    ...state,
    filters: {...state.filters, ...filters}
  };
};

export default createReducer(initialState, {
  [ACTION_TYPES.SET_CHARACTERS]: setCharacters,
  [ACTION_TYPES.SET_LOADING]: setLoading,
  [ACTION_TYPES.SET_VALUES]: setValues,
  [ACTION_TYPES.SET_FILTERS]: setFilters,
});
