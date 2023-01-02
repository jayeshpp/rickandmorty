import { combineReducers } from "redux";
import listingReducer from "../pages/listing/reducers";

const reducers = combineReducers({
    listingReducer,
});

export default reducers;
