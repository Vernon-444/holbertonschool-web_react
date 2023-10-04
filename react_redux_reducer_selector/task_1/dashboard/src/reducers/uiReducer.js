// import all of the action types from uiActionTypes.js
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

/**
 * --------------------------
 * UI Reducer
 * --------------------------
 */

// define the init state of the reducer for the ui,
// should only have 1 bool property called isNotificationDrawerVisible
// should only have 1 bool property called isUserLoggedIn
// should have one empty object property called user

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

// define the reducer for the ui called uiReducer

export function uiReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isUserLoggedIn: true,
            };
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
            };
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true,
            };
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };
        default:
            return state;
    }
}