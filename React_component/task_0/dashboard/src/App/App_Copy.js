import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class AppClass extends Component {
  constructor(props) {
    super(props);
    // Initialize state if needed
  }

    // Add your component's methods and lifecycle methods here

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
        </div>
        <div className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

AppClass.defaultProps = {
  isLoggedIn: false,
};

AppClass.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default AppClass;
