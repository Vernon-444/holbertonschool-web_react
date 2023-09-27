import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

/**
 * -------------------------------------------
 * Course Action Creators Tests
 * -------------------------------------------
 */

describe("Course Action Creators Tests", () => {
    it("selectCourse", () => {
        const result = selectCourse(1);
        expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
    });

    it("unSelectCourse", () => {
        const result = unSelectCourse(1);
        expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});
