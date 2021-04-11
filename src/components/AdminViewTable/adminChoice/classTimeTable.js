import React, { Component } from "react";
import axios from 'axios'
import http from "../../../services/Variables";
import classes from "../adminView.module.css";
import Header from "../../Header/Header";
import Notification from "../../../services/NotificationService";


class ClassTimeTable extends Component {


    state = {
        name: "",
        loading: false,
        data: false
    }


    onSubmit = () => {

        this.setState({ loading: true })
        let token = localStorage.getItem("currentUserToken");


        axios.get(`${http}/getClassTable/${this.state.name}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }).then(res => {
                this.setState({ name: "" })
                this.setState({ loading: false })
                this.setState({ data: res.data })
                console.log(res.data)
                Notification.show({ status: true, message: "Selected Table" })

            }).catch(err => {
                this.setState({ name: "" })
                Notification.show({ status: false, message: "class code does not exist" })

            })
    }


    render() {
        return (
            <div>

                <Header />
                <div className={`${classes.facultyForm}`}>
                    <div className="form-group">
                        <label className={`${classes.form_label}`}>Enter The Class Name</label>
                        <input
                            className="form-control"
                            type="test"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-block"
                        onClick={this.onSubmit}
                    >
                        View</button>
                </div>


                {
                    this.state.data ?


                        <div className={`${classes.fac_table}`}>

                        <h2 className="mb-3"> {this.state.data['className']} </h2>

                            <table class="table table-bordered">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Days/time</th>
                                        <th scope="col">8:30-9:15</th>
                                        <th scope="col">9:15-10:00</th>
                                        <th scope="col">10:00-10:45</th>
                                        <th scope="col">10:45-11:05</th>
                                        <th scope="col">11:05-11:50</th>
                                        <th scope="col">11:50-12:35</th>
                                        <th scope="col">12:35-1:20</th>
                                        <th scope="col">1:20-2:05</th>
                                        <th scope="col">2:05-2:50</th>
                                        <th scope="col">2:50-3:05</th>
                                        <th scope="col">3:05-3:50</th>
                                        <th scope="col">3:50-4:35</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-primary">
                                        <th scope="row">Monday</th>
                                        <td>{this.state.data['s1'] ? ` ${this.state.data['s1'].faculty.name} /  ${this.state.data['s1'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s2'] ? ` ${this.state.data['s2'].faculty.name} / ${this.state.data['s2'].course.name}  ` : null}</td>
                                        <td>{this.state.data['s3'] ? ` ${this.state.data['s3'].faculty.name} /  ${this.state.data['s3'].course.name} ` : null}</td>
                                        <td>B</td>
                                        <td>{this.state.data['s4'] ? ` ${this.state.data['s4'].faculty.name} /  ${this.state.data['s4'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s5'] ? ` ${this.state.data['s5'].faculty.name} /  ${this.state.data['s5'].course.name}   ` : null} </td>
                                        <td>L</td>
                                        <td>{this.state.data['s6'] ? ` ${this.state.data['s6'].faculty.name} /  ${this.state.data['s6'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s7'] ? ` ${this.state.data['s7'].faculty.name} /  ${this.state.data['s7'].course.name}   ` : null} </td>
                                        <td>B</td>
                                        <td>{this.state.data['s8'] ? ` ${this.state.data['s8'].faculty.name} /  ${this.state.data['s8'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s9'] ? ` ${this.state.data['s9'].faculty.name} /  ${this.state.data['s9'].course.name}   ` : null} </td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <th scope="row">Tuesday</th>
                                        <td>{this.state.data['s10'] ? ` ${this.state.data['s10'].faculty.name} /  ${this.state.data['s10'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s11'] ? ` ${this.state.data['s11'].faculty.name} /  ${this.state.data['s11'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s12'] ? ` ${this.state.data['s12'].faculty.name} /  ${this.state.data['s12'].course.name}   ` : null} </td>
                                        <td>R</td>
                                        <td>{this.state.data['s13'] ? ` ${this.state.data['s13'].faculty.name} /  ${this.state.data['s13'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s14'] ? ` ${this.state.data['s14'].faculty.name} /  ${this.state.data['s14'].course.name}   ` : null} </td>
                                        <td>U</td>
                                        <td>{this.state.data['s15'] ? ` ${this.state.data['s15'].faculty.name} /  ${this.state.data['s15'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s16'] ? ` ${this.state.data['s16'].faculty.name} /  ${this.state.data['s16'].course.name}   ` : null} </td>
                                        <td>R</td>
                                        <td>{this.state.data['s17'] ? ` ${this.state.data['s17'].faculty.name} /  ${this.state.data['s17'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s18'] ? ` ${this.state.data['s18'].faculty.name} /  ${this.state.data['s18'].course.name}   ` : null} </td>
                                    </tr>
                                    <tr class="table-warning">
                                        <th scope="row">Wednesday</th>
                                        <td>{this.state.data['s19'] ? ` ${this.state.data['s19'].faculty.name} /  ${this.state.data['s19'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s20'] ? ` ${this.state.data['s20'].faculty.name} /  ${this.state.data['s20'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s21'] ? ` ${this.state.data['s21'].faculty.name} /  ${this.state.data['s21'].course.name}   ` : null} </td>
                                        <td>E</td>
                                        <td>{this.state.data['s22'] ? ` ${this.state.data['s22'].faculty.name} /  ${this.state.data['s22'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s23'] ? ` ${this.state.data['s23'].faculty.name} /  ${this.state.data['s23'].course.name}   ` : null} </td>
                                        <td>N</td>
                                        <td>{this.state.data['s24'] ? ` ${this.state.data['s24'].faculty.name} /  ${this.state.data['s24'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s25'] ? ` ${this.state.data['s25'].faculty.name} /  ${this.state.data['s25'].course.name}   ` : null} </td>
                                        <td>E</td>
                                        <td>{this.state.data['s26'] ? ` ${this.state.data['s26'].faculty.name} /  ${this.state.data['s26'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s27'] ? ` ${this.state.data['s27'].faculty.name} /  ${this.state.data['s27'].course.name}   ` : null} </td>

                                    </tr>
                                    <tr class="table-success">
                                        <th scope="row">Thursday</th>
                                        <td>{this.state.data['s28'] ? ` ${this.state.data['s28'].faculty.name} /  ${this.state.data['s28'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s29'] ? ` ${this.state.data['s29'].faculty.name} /  ${this.state.data['s29'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s30'] ? ` ${this.state.data['s30'].faculty.name} /  ${this.state.data['s30'].course.name}   ` : null} </td>
                                        <td>A</td>
                                        <td>{this.state.data['s31'] ? ` ${this.state.data['s31'].faculty.name} /  ${this.state.data['s31'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s32'] ? ` ${this.state.data['s32'].faculty.name} /  ${this.state.data['s32'].course.name}   ` : null} </td>
                                        <td>C</td>
                                        <td>{this.state.data['s33'] ? ` ${this.state.data['s33'].faculty.name} /  ${this.state.data['s33'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s34'] ? ` ${this.state.data['s34'].faculty.name} /  ${this.state.data['s34'].course.name}   ` : null} </td>
                                        <td>A</td>
                                        <td>{this.state.data['s35'] ? ` ${this.state.data['s35'].faculty.name} /  ${this.state.data['s35'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s36'] ? ` ${this.state.data['s36'].faculty.name} /  ${this.state.data['s36'].course.name}   ` : null} </td>
                                    </tr>
                                    <tr class="table-danger">
                                        <th scope="row">Friday</th>
                                        <td>{this.state.data['s37'] ? ` ${this.state.data['s37'].faculty.name} /  ${this.state.data['s37'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s38'] ? ` ${this.state.data['s38'].faculty.name} /  ${this.state.data['s38'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s39'] ? ` ${this.state.data['s39'].faculty.name} /  ${this.state.data['s39'].course.name}   ` : null} </td>
                                        <td>K</td>
                                        <td>{this.state.data['s40'] ? ` ${this.state.data['s40'].faculty.name} /  ${this.state.data['s40'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s41'] ? ` ${this.state.data['s41'].faculty.name} /  ${this.state.data['s41'].course.name}   ` : null} </td>
                                        <td>H</td>
                                        <td>{this.state.data['s42'] ? ` ${this.state.data['s42'].faculty.name} /  ${this.state.data['s42'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s43'] ? ` ${this.state.data['s43'].faculty.name} /  ${this.state.data['s43'].course.name}   ` : null} </td>
                                        <td>K</td>
                                        <td>{this.state.data['s44'] ? ` ${this.state.data['s44'].faculty.name} /  ${this.state.data['s44'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s45'] ? ` ${this.state.data['s45'].faculty.name} /  ${this.state.data['s45'].course.name}   ` : null} </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        : <h1 className="text-center">No Table selected</h1>
                }


            </div>
        );
    }
}

export default ClassTimeTable;