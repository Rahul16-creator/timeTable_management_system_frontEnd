import React, { Component } from "react";
import Header from "../Header/Header";
import classes from "./viewTimeTable.module.css";
import axios from 'axios'
import http from "../../services/Variables";



class ViewTimeTable extends Component {


    state = {
        loading: true,
        data: {}
    }


    componentDidMount() {

        let token = localStorage.getItem("currentUserToken");
        let email = localStorage.getItem("currentUserEmail");

        axios.get(`${http}/getFacultyTable/${email}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }).then(res => {
                this.setState({ loading: false })
                this.setState({ data: res.data })
                console.log(this.state.data)
            }).catch(err => {
                console.log(err)
                this.setState({ loading: false })

            })
    }



    render() {
        return (

            <div>
                <Header />



                {
                    this.state.loading ? <h1 className="text-center d-flex justify-content-center align-items-start"><i className='bx bx-loader-circle bx-spin color5' style={{ fontSize: '80px', marginTop: '20%' }} ></i></h1> :

                        <div className={classes.ViewTimeTable}>
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
                                        <td>{this.state.data['s1'] ? ` ${this.state.data['s1'].className} /  ${this.state.data['s1'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s2'] ? ` ${this.state.data['s2'].className} / ${this.state.data['s2'].course.name}  ` : null}</td>
                                        <td>{this.state.data['s3'] ? ` ${this.state.data['s3'].className} /  ${this.state.data['s3'].course.name} ` : null}</td>
                                        <td>B</td>
                                        <td>{this.state.data['s4'] ? ` ${this.state.data['s4'].className} /  ${this.state.data['s4'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s5'] ? ` ${this.state.data['s5'].className} /  ${this.state.data['s5'].course.name}   ` : null} </td>
                                        <td>L</td>
                                        <td>{this.state.data['s6'] ? ` ${this.state.data['s6'].className} /  ${this.state.data['s6'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s7'] ? ` ${this.state.data['s7'].className} /  ${this.state.data['s7'].course.name}   ` : null} </td>
                                        <td>B</td>
                                        <td>{this.state.data['s8'] ? ` ${this.state.data['s8'].className} /  ${this.state.data['s8'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s9'] ? ` ${this.state.data['s9'].className} /  ${this.state.data['s9'].course.name}   ` : null} </td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <th scope="row">Tuesday</th>
                                        <td>{this.state.data['s10'] ? ` ${this.state.data['s10'].className} /  ${this.state.data['s10'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s11'] ? ` ${this.state.data['s11'].className} /  ${this.state.data['s11'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s12'] ? ` ${this.state.data['s12'].className} /  ${this.state.data['s12'].course.name}   ` : null} </td>
                                        <td>R</td>
                                        <td>{this.state.data['s13'] ? ` ${this.state.data['s13'].className} /  ${this.state.data['s13'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s14'] ? ` ${this.state.data['s14'].className} /  ${this.state.data['s14'].course.name}   ` : null} </td>
                                        <td>U</td>
                                        <td>{this.state.data['s15'] ? ` ${this.state.data['s15'].className} /  ${this.state.data['s15'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s16'] ? ` ${this.state.data['s16'].className} /  ${this.state.data['s16'].course.name}   ` : null} </td>
                                        <td>R</td>
                                        <td>{this.state.data['s17'] ? ` ${this.state.data['s17'].className} /  ${this.state.data['s17'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s18'] ? ` ${this.state.data['s18'].className} /  ${this.state.data['s18'].course.name}   ` : null} </td>
                                    </tr>
                                    <tr class="table-warning">
                                        <th scope="row">Wednesday</th>
                                        <td>{this.state.data['s19'] ? ` ${this.state.data['s19'].className} /  ${this.state.data['s19'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s20'] ? ` ${this.state.data['s20'].className} /  ${this.state.data['s20'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s21'] ? ` ${this.state.data['s21'].className} /  ${this.state.data['s21'].course.name}   ` : null} </td>
                                        <td>E</td>
                                        <td>{this.state.data['s22'] ? ` ${this.state.data['s22'].className} /  ${this.state.data['s22'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s23'] ? ` ${this.state.data['s23'].className} /  ${this.state.data['s23'].course.name}   ` : null} </td>
                                        <td>N</td>
                                        <td>{this.state.data['s24'] ? ` ${this.state.data['s24'].className} /  ${this.state.data['s24'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s25'] ? ` ${this.state.data['s25'].className} /  ${this.state.data['s25'].course.name}   ` : null} </td>
                                        <td>E</td>
                                        <td>{this.state.data['s26'] ? ` ${this.state.data['s26'].className} /  ${this.state.data['s26'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s27'] ? ` ${this.state.data['s27'].className} /  ${this.state.data['s27'].course.name}   ` : null} </td>

                                    </tr>
                                    <tr class="table-success">
                                        <th scope="row">Thursday</th>
                                        <td>{this.state.data['s28'] ? ` ${this.state.data['s28'].className} /  ${this.state.data['s28'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s29'] ? ` ${this.state.data['s29'].className} /  ${this.state.data['s29'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s30'] ? ` ${this.state.data['s30'].className} /  ${this.state.data['s30'].course.name}   ` : null} </td>
                                        <td>A</td>
                                        <td>{this.state.data['s31'] ? ` ${this.state.data['s31'].className} /  ${this.state.data['s31'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s32'] ? ` ${this.state.data['s32'].className} /  ${this.state.data['s32'].course.name}   ` : null} </td>
                                        <td>C</td>
                                        <td>{this.state.data['s33'] ? ` ${this.state.data['s33'].className} /  ${this.state.data['s33'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s34'] ? ` ${this.state.data['s34'].className} /  ${this.state.data['s34'].course.name}   ` : null} </td>
                                        <td>A</td>
                                        <td>{this.state.data['s35'] ? ` ${this.state.data['s35'].className} /  ${this.state.data['s35'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s36'] ? ` ${this.state.data['s36'].className} /  ${this.state.data['s36'].course.name}   ` : null} </td>
                                    </tr>

                                    <tr class="table-danger">
                                        <th scope="row">Friday</th>
                                        <td>{this.state.data['s37'] ? ` ${this.state.data['s37'].className} /  ${this.state.data['s37'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s38'] ? ` ${this.state.data['s38'].className} /  ${this.state.data['s38'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s39'] ? ` ${this.state.data['s39'].className} /  ${this.state.data['s39'].course.name}   ` : null} </td>
                                        <td>K</td>
                                        <td>{this.state.data['s40'] ? ` ${this.state.data['s40'].className} /  ${this.state.data['s40'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s41'] ? ` ${this.state.data['s41'].className} /  ${this.state.data['s41'].course.name}   ` : null} </td>
                                        <td>H</td>
                                        <td>{this.state.data['s42'] ? ` ${this.state.data['s42'].className} /  ${this.state.data['s42'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s43'] ? ` ${this.state.data['s43'].className} /  ${this.state.data['s43'].course.name}   ` : null} </td>
                                        <td>K</td>
                                        <td>{this.state.data['s44'] ? ` ${this.state.data['s44'].className} /  ${this.state.data['s44'].course.name}   ` : null} </td>
                                        <td>{this.state.data['s45'] ? ` ${this.state.data['s45'].className} /  ${this.state.data['s45'].course.name}   ` : null} </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                }
            </div>
        )

    }
}


export default ViewTimeTable;