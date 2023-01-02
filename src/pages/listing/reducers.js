import { createReducer } from "../../store/createReducer";
import { ACTION_TYPES } from "./actionTypes";

const initialState = {
  characters: [],
  info: {},
  loading: true,
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

export default createReducer(initialState, {
  [ACTION_TYPES.SET_CHARACTERS]: setCharacters,
  [ACTION_TYPES.SET_LOADING]: setLoading,
});
