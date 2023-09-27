import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

/**
 * ------------------------
 * uiActionCreators.test.js
 * ------------------------
 */

// Describe action creators tests
describe("action creators tests", function () {

    // Test login action
    it("login", function () {
        const user = { email: "sampleText@email.com", password: "TomBradyIsNotTheGoat5FlukeRings"};
        const expectedReturn = { type: LOGIN, user };
        const result = login(user.email, user.password);
        expect(result).toEqual(expectedReturn);
    });

    // Test logout action
    it("logout", function () {
        const expectedReturn = { type: LOGOUT };
        const result = logout();
        expect(result).toEqual(expectedReturn);
    });

    // Test displayNotificationDrawer action
    it("displayNotificationDrawer", function () {
        const expectedReturn = { type: DISPLAY_NOTIFICATION_DRAWER };
        const result = displayNotificationDrawer();
        expect(result).toEqual(expectedReturn);
    });

    // Test hideNotificationDrawer action
    it("hideNotificationDrawer", function () {
        const expectedReturn = { type: HIDE_NOTIFICATION_DRAWER };
        const result = hideNotificationDrawer();
        expect(result).toEqual(expectedReturn);
    });
});
