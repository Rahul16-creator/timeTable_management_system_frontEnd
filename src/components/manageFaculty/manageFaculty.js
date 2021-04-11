import React from "react";
import Header from "../Header/Header";
import classes from "./manageFaculty.module.css";
import axios from 'axios';
import http from "../../services/Variables";
import Notification from "../../services/NotificationService";

class ManageFaculty extends React.Component {

    state = {
        "name": "",
        "email": "",
        "role": "",
        "phoneNumber": "",
        "password": "",
        "Demail": ""
    }



    onAddData = (e) => {
        e.preventDefault();
        let token = localStorage.getItem("currentUserToken");

        let newObj = {
            "name": this.state.name,
            "email": this.state.email,
            "role": this.state.role,
            "phoneNumber": this.state.phoneNumber,
            "password": this.state.password
        }

        axios.post(`${http}/addFaculty`, newObj, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {

            this.setState({
                "name": "",
                "email": "",
                "role": "",
                "phoneNumber": "",
                "password": "",
                "Demail": ""
            })

            Notification.show({ status: true, message: res.data.message })
        }).catch(err => {
            this.setState({
                "name": "",
                "email": "",
                "role": "",
                "phoneNumber": "",
                "password": "",
                "Demail": ""
            })
            Notification.show({ status: false, message: "Faculty Data already exist" })
        })
    }


    onDeleteData = (e) => {
        e.preventDefault();
        let token = localStorage.getItem("currentUserToken");

        let newObj = {
            email: this.state.Demail
        }


        axios.post(`${http}/deleteFaculty`, newObj, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {

            this.setState({
                "name": "",
                "email": "",
                "role": "",
                "phoneNumber": "",
                "password": "",
                "Demail": ""
            })

            Notification.show({ status: true, message: res.data.message })
        }).catch(err => {

            this.setState({
                "name": "",
                "email": "",
                "role": "",
                "phoneNumber": "",
                "password": "",
                "Demail": ""
            })

            Notification.show({ status: false, message: "Error in deleting Faculty  data" })
        })
    }






    render() {
        return (
            <div>
                <Header />
                <div className={classes.manageFaculty}>
                    <div className="row mb-5" style={{ width: "100%", padding: "0px 100px", overflow: "hidden" }} >

                        <div className="col-12 col-md-6">

                            <h2 className="text-uppercase mb-5">Add Faculty</h2>

                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Name</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="text"
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                />
                            </div>
                            <div className="form-group pb-4">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Email</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="email"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Role</label>
                                <select
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    value={this.state.role}
                                    onChange={(e) => this.setState({ role: e.target.value })}
                                >
                                    <option value="" >Choose Role</option>
                                    <option value="ADMIN" >ADMIN</option>
                                    <option value="HOD" >HOD</option>
                                    <option value="FACULTY" >FACULTY</option>
                                </select>
                            </div>

                            <div className="form-group pt-3">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Phone Number</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="text"
                                    value={this.state.phoneNumber}
                                    onChange={(e) => this.setState({ phoneNumber: e.target.value })}

                                />
                            </div>

                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }}>Password</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="password"
                                    value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })}

                                />
                            </div>

                            <button
                                className="btn btn-primary btn-block btn-lg"
                                style={{ width: "80%" }}
                                onClick={this.onAddData}
                            >
                                Add Faculty </button>
                        </div>


                        {/* delete Dept */}

                        <div className="col-12 col-md-6">
                            <h2 className="text-uppercase mb-5">Delete Faculty</h2>

                            <div className="form-group">
                                <label className="text-muted" style={{ fontSize: "18px" }} >Email</label>
                                <input
                                    className="form-control"
                                    style={{ width: "80%" }}
                                    type="email"
                                    value={this.state.Demail}
                                    onChange={(e) => this.setState({ Demail: e.target.value })}
                                />
                            </div>
                            <button
                                className="btn btn-danger btn-block btn-lg"
                                style={{ width: "80%" }}
                                onClick={this.onDeleteData}
                            >
                                Delete</button>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default ManageFaculty;
