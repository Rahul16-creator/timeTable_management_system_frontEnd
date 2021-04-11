import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/AuthService";
import history from "../../utils/history";
import "./Header.css";
import axios from "axios";
import Http from "../../services/Variables";



class Header extends Component {

  state = {
    isLoggedIn: authService.getCurrentUserDetails(),
    image: "",
    navbar: false,
    handleClick: (e) => {
      if (this.state.isLoggedIn) {
        authService.logout();
        this.setState({ isLoggedIn: null });
      } else {
        history.push("/login");
      }
    },
  };

  componentDidMount() {

    this.setState({ isLoggedIn: authService.getCurrentUserDetails() });
    let token = localStorage.getItem("currentUserToken");

    let email = localStorage.getItem("currentUserEmail");


    //image storage..

    axios
      .get(Http + "/fetchFaculty/" + email, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        this.setState({ image: res.data["image"] });
      });


    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY >= 1) {
      this.setState({ navbar: true });
    }
    else {
      this.setState({ navbar: false });
    }
  }



  render() {

    return (
      <div className={`navbars ${this.state.navbar ? "active" : null}`}>
        {this.state.isLoggedIn ?
          (
            <div>
              <div className="container-fluid py-2" style={{ borderBottom: "2px solid #2827CC" }}>
                <div className="d-flex justify-content-between align-items-center px-4">
                  <div>
                    <Link to="/" className="d-flex align-items-center" style={{ textDecoration: "none" }}>
                      <img src="/assets/images/logo1.png" className="img-fluid" style={{ width: "50px" }} alt="home" />
                      <div className={`ml-2 font-weight-bold color5 ${this.state.navbar ? "text-white" : null}`} style={{ fontSize: "14px" }}>
                        Time Table <br /> MANAGEMENT{" "}
                      </div>
                    </Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="mx-3">
                      {
                        this.state.isLoggedIn.role !== "" ||
                          this.state.isLoggedIn.role !== undefined ||
                          this.state.isLoggedIn.role !== null ?
                          (
                            <span className="fs-large text-capitalize" style={{ fontSize: "20px" }}>
                              {this.state.isLoggedIn.name}
                            </span>
                          ) :
                          (
                            <Link to="/login" style={{ textDecoration: "none" }}>
                              <button type="button" className="btn btn-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-box-arrow-left mr-2 align-content-center" viewBox="0 0 17 17">
                                  <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                  <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                            Logout
                          </button>
                            </Link>
                          )
                      }
                    </div>
                    <div className="header-dropdown">
                      {
                        this.state.image ?
                          (
                            <img src={this.state.image} className="image-fluid w-2 h-2 rounded-circle" alt="image" />
                          ) :
                          (
                            <i className="bx bxs-user-circle fs-8  w-2 h-2  cursor-pointer"></i>
                          )
                      }
                      <div className="flex-column header-dropdown-content text-start">

                        <Link to="/profile" className="link" style={{ textDecoration: "none" }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
                          </svg>
                          <span className="ml-1">Profile</span>
                        </Link>
                        {
                          this.state.isLoggedIn.role === "ADMIN" ?
                            (
                              <>

                                <Link to="/manageDept" className="link" style={{ textDecoration: "none" }}>

                                  <span className="ml-1">Manage department</span>
                                </Link>

                                <Link to="/manageCourse" className="link" style={{ textDecoration: "none" }}>

                                  <span className="ml-1">Manage Courses</span>
                                </Link>

                                <Link to="/manageFaculty" className="link" style={{ textDecoration: "none" }}>

                                  <span className="ml-1">Manage Faculty</span>
                                </Link>

                                <Link to="/manageTimeTable" className="link" style={{ textDecoration: "none" }}>

                                  <span className="ml-1">Manage TimeTable</span>
                                </Link>

                                <Link to="/adminviewTimeTable" className="link mt-2" style={{ textDecoration: "none" }} >
                                  <span className="ml-1"> View TimeTable</span>
                                </Link>


                              </>
                            ) :
                            (
                              [
                                this.state.isLoggedIn.role === "HOD" ?
                                  (
                                    <>
                                  
                                      <Link to="/manageCourse" className="link" style={{ textDecoration: "none" }}>

                                        <span className="ml-1">Manage Courses</span>
                                      </Link>

                                      <Link to="/manageFaculty" className="link" style={{ textDecoration: "none" }}>

                                        <span className="ml-1">Manage Faculty</span>
                                      </Link>

                                      <Link to="/manageTimeTable" className="link" style={{ textDecoration: "none" }}>

                                        <span className="ml-1">Manage TimeTable</span>
                                      </Link>

                                      <Link to="/adminviewTimeTable" className="link mt-2" style={{ textDecoration: "none" }} >

                                        <span className="ml-1"> View TimeTable</span>
                                      </Link>

                                    </>
                                  ) :
                                  (
                                    [
                                      this.state.isLoggedIn.role === "FACULTY" ?
                                        (
                                          <Link to="/viewTimeTable" className="link mt-2" style={{ textDecoration: "none" }} >
                                            <i className="bx bx-user-plus" style={{ fontSize: "22px" }}></i>
                                            <span className="ml-1"> view TimeTable</span>
                                          </Link>
                                        ) : null,
                                    ]
                                  ),
                              ]
                            )}
                        <Link to="/login" className="link" style={{ textDecoration: "none" }} onClick={(e) => this.state.handleClick(e)} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                          </svg>{" "}
                          <span className="ml-1">
                            {" "}
                            {this.state.isLoggedIn ? " Logout" : " Login"}{" "}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
      </div>
    );
  }
}

export default Header;
