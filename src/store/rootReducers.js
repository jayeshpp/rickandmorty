import { combineReducers } from "redux";
import listingReducer from "../pages/listing/reducers";
import detailsReducer from "../pages/details/reducers";

const reducers = combineReducers({
    listingReducer,
    detailsReducer,
});

export default reducers;
