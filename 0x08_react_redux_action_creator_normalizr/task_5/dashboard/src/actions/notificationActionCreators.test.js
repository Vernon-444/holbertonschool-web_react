import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter} from "./notificationActionCreators";

/**
 * ------------------------------------
 * notificatoinActionCreators.test.js
 * ------------------------------------
 */

describe("Notification Action Creators Testing", function () {

    // verify that markAsRead returns the correct action
    it("markAsRead returns the correct action type and payload", function () {
        const action = markAsRead(1);
        expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
    });

    // verify that setNotificationFilter returns the correct action
    it("setNotificationFilter returns the correct action type and payload", function () {
        const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
        expect(action).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
    });

    // verify that setNotificationFilter returns the correct action
    it("returns correct action for setNotificationFilter", function () {
        const expectedReturn = { type: SET_TYPE_FILTER, filter: "DEFAULT",};

        const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

        expect(result).toEqual(expectedReturn);
    });
});
