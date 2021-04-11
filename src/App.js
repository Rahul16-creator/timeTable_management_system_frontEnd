import { Router, Switch, Route } from "react-router-dom";
import './App.css';

import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import ForgotPasswordPage from "./views/ForgotPasswordPage";
import { PrivateRoute, ProtectFromLoggedInUser } from "./services/ProtectedRoute";
import history from "./utils/history";
import ResetPasswordPage from "./views/ResetPasswordPage";
import Notification from "./services/NotificationService";
import Profile from "./components/profile/profile";
import ChangePassword from "./components/profile/changePassword/changePassword";
import phoneVerification from "./components/PhoneVerification/phoneVerification";
import Firebase from "./components/firebase/firebase_configure";
import NotFoundPage from "./views/NotFoundPage";
import EmailVerification from "./views/emailVerification";
import ManageDept from "./components/ManageDept/manageDept";
import ManageCourse from "./components/managementCourse/manageCourse";
import ManageFaculty from "./components/manageFaculty/manageFaculty";
import ViewTimeTable from "./components/viewTimeTable/viewTimeTable";
import AdminViweTable from "./components/AdminViewTable/adminviewTable";
import FacultyTimeTable from "./components/AdminViewTable/adminChoice/facultyTimeTable";
import ClassTimeTable from "./components/AdminViewTable/adminChoice/classTimeTable";
import ManageTimeTable from "./components/manageTimeTable/ManageTimeTable";



function App() {
  return (
    <Router history={history}>
      <Notification />
      <Switch>

        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/profile/changePassword/" exact component={ChangePassword} />
        <PrivateRoute path="/phoneVerification" exact component={phoneVerification} />
        <PrivateRoute path="/firebase" exact component={Firebase} />


        <ProtectFromLoggedInUser path="/login" exact component={LoginPage} />
        <ProtectFromLoggedInUser path="/forgot-password" exact component={ForgotPasswordPage} />
        <ProtectFromLoggedInUser path="/reset-password" exact component={ResetPasswordPage} />



        <Route path="/manageDept" component={ManageDept} />
        <Route path="/manageCourse" component={ManageCourse} />
        <Route path="/manageFaculty" component={ManageFaculty} />
        <Route path="/viewTimeTable" component={ViewTimeTable} />
        <Route path="/adminviewTimeTable" component={AdminViweTable} />
        <Route path="/facultyTableview" component={FacultyTimeTable} />
        <Route path="/classTableview" component={ClassTimeTable} />
        <Route path="/manageTimeTable" component={ManageTimeTable} />


        <Route path="/emailverification/:name" component={EmailVerification} />
        <Route component={NotFoundPage} />

      </Switch>
    </Router>
  );
}

export default App;