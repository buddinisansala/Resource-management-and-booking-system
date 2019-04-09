import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";

import Routes from "../src/components/Routes";



//import Footer from "./components/Footer";
import "./index.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Calender from "./components/Calender/Calender";
import Availabilitytable from "./components/Tables/Availabilitytable";
import BookingForm from "./components/BookingForm/BookingForm";

import Lecturer from "./components/actors/Lecturer";
import AcademicStaff from "./components/actors/AcademicStaff";
import Director from "./components/actors/Director";
import Coordinator from "./components/actors/Coordinator";
import NormalStudent from "./components/actors/NormalStudent";
import UnionStudent from "./components/actors/UnionStudent";

//lecturer routes
import TopNavLecturer from "./components/topNavLecturer";
import SideNavLecturer from "./components/sideNavLecturer";
import HallSelect from "./components/HallSelect/HallSelect";
import HallRegister from "./components/HallRegister/Hallregister";
import AvailableLoad from "./components/commonpages/AvailableLoad";

//union member routes
import TopNavUnion from "./components/topNavUnion";
import SideNavUnion from "./components/sideNavUnion";

//director routes
import TopNavDirector from "./components/topNavDirector";
import SideNavDirector from "./components/sideNavDirector";

//academic staff routes
import TopNavAcademicstaff from "./components/topNavAcademicstaff";
import SideNavAcademicstaff from "./components/sideNavAcademicstaff";

//coodinator routes
import TopNavCoordinator from "./components/topNavCoordinator";
import SideNavCoordinator from "./components/sideNavCoordinator";

//normal student routes
import TopNavNormalStudent from "./components/topNavNormalStudent";
import SideNavNormalStudent from "./components/sideNavNormalStudent";

import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";

import TimeTable from "./components/timetable/TimeTable";
import Template from "./components/layout/Template";

import "./App.css";

//check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    //  Clear current Profile
    store.dispatch(clearCurrentProfile);
    // Redirect to login
    window.location.href = "/login";
  }
}

const style = {
  //this for Calender
  position: "relative",
  margin: "50px auto"
};

class App extends Component {
  render() {
    return (

    //<Lecturer/>
    //<AcademicStaff/>
    //<Director/>  
    //<Coordinator/>
    //<NormalStudent/>
    <UnionStudent/>

      /*<Router>
        <div className="flexible-content">
            <TopNavDirector />
            <SideNavDirector />
            
            
            
            <main id="content" className="p-5">
             
            </main>
        </div>
      </Router>*/

            
    

      /*<Router>
        <div className="flexible-content">
            <TopNavNormalStudent />
            <SideNavNormalStudent/>
            
            
            
            <main id="content" className="p-5">
            
            </main>
        </div>
      </Router>*/



     /* <Router>
        <div className="flexible-content">
            <TopNavUnion/>
            <SideNavUnion/>
            <Route exact path="/available" component={AvailableLoad} />
            <Route exact path="/HallSelect" component={HallSelect} />

            <main id="content" className="p-5">
            
            </main>
        </div>
      </Router>*/


    

      

      



      // <Provider store={store}>
      //   <Router>
      //     <div className="App">
      //       <Navbar />
      //       <Route exact path="/" component={Landing} />
      //       <div className="container">
      //         <Route exact path="/register" component={Register} />
      //         <Route exact path="/login" component={Login} />
      //         <Route exact path="/union" component={Union} />
      //         <Route exact path="/Lecturer" component={Lecturer} />
      //         <Switch>
      //           <PrivateRoute exact path="/dashboard" component={Dashboard} />
      //         </Switch>
      //         <Switch>
      //           <PrivateRoute
      //             exact
      //             path="/create-profile"
      //             component={CreateProfile}
      //           />
      //         </Switch>

      //         <Switch>
      //           <PrivateRoute
      //             exact
      //             path="/edit-profile"
      //             component={EditProfile}
      //           />
      //         </Switch>

      //         <Switch>
      //           <PrivateRoute
      //             exact
      //             path="/add-experience"
      //             component={AddExperience}
      //           />
      //         </Switch>

      //         <Switch>
      //           <PrivateRoute
      //             exact
      //             path="/add-education"
      //             component={AddEducation}
      //           />
      //         </Switch>
      //       </div>

      //       <Footer />
      //       <Calender
      //         style={style}
      //         width="302px"
      //         onDayClick={(e, day) => this.onDayClick(e, day)}
      //       />
      //     </div>
      //   </Router>
      // </Provider>
    );
  }
}

export default App;
