import React, { Component } from "react";
import Header from "../Header/Header";
import ViewTimeTable from "../viewTimeTable/viewTimeTable";
import classes from "./adminView.module.css";
import { Link } from "react-router-dom";



class AdminViweTable extends Component {



    render() {
        return (
            <>
                <Header />
                <div className={`row ${classes.adminview}`} style={{ marginTop: "8rem" }}>
                    <div className={`col-4 ${classes.box}`}><Link style={{ color: "#fff", textDecoration: "none" }} to="/classTableview" > class Time Table </Link> </div>
                    <div className={`col-4 ${classes.box}`}>  <Link style={{ color: "#fff", textDecoration: "none" }} to="/facultyTableview" > Faculty Time  Table</Link> </div>
                </div>
                <ViewTimeTable />
            </>
        );
    }
}

export default AdminViweTable;