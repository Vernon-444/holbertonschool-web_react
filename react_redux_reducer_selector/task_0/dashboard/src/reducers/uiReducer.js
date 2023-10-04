// import all of the action types from uiActionTypes.js
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import immutable from 'immutable';

/**
 * --------------------------
 * UI Reducer
 * --------------------------
 */

// define the init state of the reducer for the ui,
// should only have 1 bool property called isNotificationDrawerVisible
// should only have 1 bool property called isUserLoggedIn
// should have one empty object property called user

const initialState = immutable.Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
});

// define the reducer for the ui called uiReducer using set from map

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN:
            return state.set('isUserLoggedIn', true);
        case LOGOUT:
            return state.set('isUserLoggedIn', false);
        default:
            return state;
    }
}

export default uiReducer;
