/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from "react";
//import { TextField, Button, MenuItem } from '@material-ui/core'
class DashboardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            usersData: [],
        }
    }
    render() {
        return (
            <div>
                <label>Forget password</label>
            </div>
        )
    }
}
export default DashboardInput;