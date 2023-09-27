import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

/**
 * ---------------------------------------------------
 * | SELECT_COURSE & UNSELECT_COURSE Action Creators |
 * ---------------------------------------------------
 */

export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index,
    };
};

// bound the action creators to dispatch
export const boundSelectCourse = (index) => dispatch(selectCourse(index));


export const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index,
    };
}

// bound the action creators to dispatch
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
