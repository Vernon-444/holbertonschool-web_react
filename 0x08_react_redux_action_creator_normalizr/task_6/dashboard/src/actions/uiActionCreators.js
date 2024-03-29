import { LOGIN, LOGOUT, LOGIN_FAILURE, LOGIN_SUCCESS, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

/**
 * Login - Creates an action that logs the user in
 * @param {string} email
 * @param {string} password
 * @returns {object} action
 */
export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
};

// bound the action creators to dispatch
export const boundLogin = (email, password) => dispatch(login(email, password));


/**
 * Logout - Creates an action that logs the user out
 * @returns {object} action
 */
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// bound the action creators to dispatch
export const boundLogout = () => dispatch(logout());


/**
 * DisplayNotificationDrawer - Creates an action that displays the notification drawer
 * @returns {object} action
 */
export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
};

// bound the action creators to dispatch
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());


/**
 * HideNotificationDrawer - Creates an action that hides the notification drawer
 * @returns {object} action
 */
export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    };
}

// bound the action creators to dispatch
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

/**
 * loginsuccess - return the action type LOGIN_SUCCESS
 */

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    };
}

// bound the action creators to dispatch
export const boundLoginSuccess = () => dispatch(loginSuccess());


/**
 * loginFailure - return the action type LOGIN_FAILURE
 */

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    };
}

// bound the action creators to dispatch
export const boundLoginFailure = () => dispatch(loginFailure());
