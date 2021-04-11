import React, { Component } from "react";
import Header from "../Header/Header";
import classes from "./manageTimeTable.module.css";
import axios from 'axios';
import http from "../../services/Variables";
import Notification from "../../services/NotificationService";

class ManageTimeTable extends Component {


    state = {
        NumberOfSubject: 0,
        "className": "",
        sub1: "",
        sub2: "",
        sub3: "",
        sub4: "",
        sub5: "",
        sub6: "",
        fac1: "",
        fac2: "",
        fac3: "",
        fac4: "",
        fac5: "",
        fac6: ""
    }


    onSubmit = (e) => {
        e.preventDefault();

        let newObj = {
            "noOfSub": this.state.NumberOfSubject,
            "className": this.state.className,
            "subject1Code": this.state.sub1,
            "faculty1Email": this.state.fac1,
            "subject2Code": this.state.sub2,
            "faculty2Email": this.state.fac2,
            "subject3Code": this.state.sub3,
            "faculty3Email": this.state.fac3,
            "subject4Code": this.state.sub4,
            "faculty4Email": this.state.fac4,
            "subject5Code": this.state.sub5,
            "faculty5Email": this.state.fac5,
            "subject6Code": this.state.sub6,
            "faculty6Email": this.state.fac6
        }

        let token = localStorage.getItem("currentUserToken");

        axios.post(`${http}/createTable`, newObj, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {
            this.setState({
                NumberOfSubject: 0,
                "className": "",
                sub1: "",
                sub2: "",
                sub3: "",
                sub4: "",
                sub5: "",
                sub6: "",
                fac1: "",
                fac2: "",
                fac3: "",
                fac4: "",
                fac5: "",
                fac6: ""
            });
            Notification.show({ status: true, message: res.data.message })
        }).catch(err => {
            this.setState({
                NumberOfSubject: 0,
                "className": "",
                sub1: "",
                sub2: "",
                sub3: "",
                sub4: "",
                sub5: "",
                sub6: "",
                fac1: "",
                fac2: "",
                fac3: "",
                fac4: "",
                fac5: "",
                fac6: ""
            }); Notification.show({ status: false, message: "Error in creating class Timetable" })
        })


    }

    render() {


        return (
            <div>
                <Header />
                <div className={`${classes.manageTimeTable}`}>

                    <h2 className="mb-5 text-center text-uppercase">Time Table Generation</h2>

                    <div className="row">

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Number Of Subjects</label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.NumberOfSubject}
                                onChange={(e) => this.setState({ NumberOfSubject: e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Enter The ClassName</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.className}
                                onChange={(e) => this.setState({ className: e.target.value })}
                            />
                        </div>

                    </div>


                    <div className="row">

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Subject 1 Code</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.sub1}
                                onChange={(e) => this.setState({ sub1: e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Faculty Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.fac1}
                                onChange={(e) => this.setState({ fac1: e.target.value })}
                            />
                        </div>

                    </div>


                    <div className="row">

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Subject 2 Code</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.sub2}
                                onChange={(e) => this.setState({ sub2: e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Faculty Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.fac2}
                                onChange={(e) => this.setState({ fac2: e.target.value })}
                            />
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Subject 3 Code</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.sub3}
                                onChange={(e) => this.setState({ sub3: e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Faculty Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.fac3}
                                onChange={(e) => this.setState({ fac3: e.target.value })}
                            />
                        </div>

                    </div>


                    <div className="row">

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Subject 4 Code</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.sub4}
                                onChange={(e) => this.setState({ sub4: e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Faculty Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.fac4}
                                onChange={(e) => this.setState({ fac4: e.target.value })}
                            />
                        </div>

                    </div>



                    <div className="row">

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Subject 5 Code</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.sub5}
                                onChange={(e) => this.setState({ sub5: e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Faculty Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.fac5}
                                onChange={(e) => this.setState({ fac5: e.target.value })}
                            />
                        </div>

                    </div>



                    <div className="row">

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Subject 6 Code</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.sub6}
                                onChange={(e) => this.setState({ sub6: e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label className="text-muted my-2 text-capitalize">Faculty Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.fac6}
                                onChange={(e) => this.setState({ fac6: e.target.value })}
                            />
                        </div>

                    </div>

                    <button
                        className="btn btn-primary btn-block btn-lg my-4"
                        onClick={this.onSubmit}

                    >Generate Table</button>

                </div>
            </div>
        )
    }
}

export default ManageTimeTable;