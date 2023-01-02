import { ACTION_TYPES } from "./actionTypes";
import API from '../../lib/axios'

export const setCharacters = (page,config) => {
    let url = `/character`
    if(page) {
        url += `?page=${page}`
    }
    return (dispatch) => {
        API.get(url, {...config}).then(response => {
            dispatch(setLoading(false))
            dispatch({
              type: ACTION_TYPES.SET_CHARACTERS,
              data: response.data.results,
              info: response.data.info
            });
        })
    }
};

export const setLoading = (loading) => {
    return({
        type: ACTION_TYPES.SET_LOADING,
        loading
    })
}
