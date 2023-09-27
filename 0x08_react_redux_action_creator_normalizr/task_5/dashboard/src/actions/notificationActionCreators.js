import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
/**
 * -----------------------------------------------------------
 * Action creator functions for the Notification component
 * -----------------------------------------------------------
 */

/**
 * Marks a notification as read
 * @param {Number} index - index of the notification to mark as read
 * @return {Object} action object
 */
export const markAsRead = (index) => {
    return {
      type: MARK_AS_READ,
      index,
    };
  };

/**
 * Sets the filter for the notification list
 * @param {String} filter - filter to apply to the notification list
 * @return {Object} action object
 */
export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};

