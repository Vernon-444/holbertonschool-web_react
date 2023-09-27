import * as notificationsData from '../../notifications.json';

// create function named getAllNotificationsByUser that takes userId as an argument
export function getAllNotificationsByUser(userId) {
  // Return a list containing all the context objects from the notifications.json data when the author id is equal to the userId
    return notificationsData.default.filter((item) => item.author.id === userId).map(({ context }) => context);
}
