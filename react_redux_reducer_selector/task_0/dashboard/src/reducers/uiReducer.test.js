/**
 * -----------------------------------------------------------------------
 * Testing the uiReducer.js file:
 * -----------------------------------------------------------------------
 */

// import the uiReducer function from the uiReducer.js file
import { uiReducer } from './uiReducer';
// import all of the action types from uiActionTypes.js
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
// import immutable
import immutable from 'immutable';

/**
 * Tests:
 * Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
 * Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
 * Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property
 *
 * tests to be update to reflect the addition of immutable.js
 */

describe('uiReducer', () => {
    it('returns the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
        });
    });

    it('returns the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
        });
    });

    it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state).toEqual({
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: {},
        });
    });
});
