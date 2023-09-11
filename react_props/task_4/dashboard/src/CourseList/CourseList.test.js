import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  // renders 5 rows
  it("renders 5 rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow")).toHaveLength(5);
  });
});
