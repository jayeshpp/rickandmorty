import { createReducer } from "../../store/createReducer";
import { ACTION_TYPES } from "./actionTypes";

const initialState = {
  data: {},
  loading: true,
  error: false,
  message: ''
};

const setCharacter = (state, { data }) => {
  return {
    ...state,
    data: data,
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


export default createReducer(initialState, {
  [ACTION_TYPES.SET_CHARACTER]: setCharacter,
  [ACTION_TYPES.SET_LOADING]: setLoading,
  [ACTION_TYPES.SET_VALUES]: setValues,
});
