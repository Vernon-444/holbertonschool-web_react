import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// create function named getAllNotificationsByUser that takes userId as an argument
export function getAllNotificationsByUser(userId) {
  // Return a list containing all the context objects from the notifications.json data when the author id is equal to the userId
    return notificationsData.default.filter((item) => item.author.id === userId).map(({ context }) => context);
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications',
  {
    author: user,
    context: message,
  }
);

const normalizedData = normalize(notificationsData.default, [notification]);

export { normalizedData };
