import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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

/**
 * Logout - Creates an action that logs the user out
 * @returns {object} action
 */
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

/**
 * DisplayNotificationDrawer - Creates an action that displays the notification drawer
 * @returns {object} action
 */
export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
};

/**
 * HideNotificationDrawer - Creates an action that hides the notification drawer
 * @returns {object} action
 */
export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    };
}
