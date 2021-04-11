import React from "react";
import Header from "../Header/Header";
import classes from "./manageCourse.module.css";
import axios from 'axios';
import http from "../../services/Variables";
import Notification from "../../services/NotificationService";

class ManageCourse extends React.Component {


    state = {
        "Acode": "",
        "Aname": "",
        "Adept": "",
        "Dcode": ""
    }


    onAddData = (e) => {
        e.preventDefault();
        let token = localStorage.getItem("currentUserToken");

        let newObj = {
            "code": this.state.Acode,
            "name": this.state.Aname,
            "dept": this.state.Adept
        }

        axios.post(`${http}/addCourse`, newObj, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {
            this.setState({ Acode: "", Aname: "", Adept: "", Dcode: "" });
            Notification.show({ status: true, message: res.data.message })
        }).catch(err => {
            this.setState({ Acode: "", Aname: "", Adept: "", Dcode: "" });
            Notification.show({ status: false, message: "Course Code already exist" })
        })
    }


    onDeleteData = (e) => {
        e.preventDefault();
        let token = localStorage.getItem("currentUserToken");

        let newObj = {
            code: this.state.Dcode
        }


        axios.post(`${http}/deleteCourse`, newObj, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {
            this.setState({ Acode: "", Aname: "", Adept: "", Dcode: "" });
            Notification.show({ status: true, message: res.data.message })
        }).catch(err => {
            console.log(err)
            this.setState({ Acode: "", Aname: "", Adept: "", Dcode: "" });
            Notification.show({ status: false, message: "Error in deleting Course data" })
        })
    }





    render() {
        return (
            <div>
                <Header />
                <div className={classes.manageCourse}>
                    <div className="row" style={{ width: "100%", padding: "0px 100px", overflow: "hidden" }} >

                        {/* Add Dept */}
                        <div className="col-12 col-md-6">

                            <h2 className="text-uppercase mb-5">Add Course</h2>

                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Course Code</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="text"
                                    value={this.state.Acode}
                                    onChange={(e) => this.setState({ Acode: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Course Name</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="text"
                                    value={this.state.Aname}
                                    onChange={(e) => this.setState({ Aname: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Dept Name</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="text"
                                    value={this.state.Adept}
                                    onChange={(e) => this.setState({ Adept: e.target.value })}
                                />
                            </div>

                            <button
                                className="btn btn-primary btn-block btn-lg"
                                style={{ width: "80%" }}
                                onClick={(e) => this.onAddData(e)}
                            >
                                Add</button>
                        </div>


                        {/* delete Dept */}

                        <div className="col-12 col-md-6">
                            <h2 className="text-uppercase mb-5">Delete Course</h2>

                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }} >Course Code</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="text"
                                    value={this.state.Dcode}
                                    onChange={(e) => this.setState({ Dcode: e.target.value })}
                                />
                            </div>
                            <button
                                className="btn btn-danger btn-block btn-lg"
                                style={{ width: "80%" }}
                                onClick={(e)=>this.onDeleteData(e)}
                            >
                                Delete</button>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default ManageCourse;
