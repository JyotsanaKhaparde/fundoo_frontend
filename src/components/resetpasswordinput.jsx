/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 02/02/2019
 **********************************************************************************/
import React, { Component } from "react";
import { toast } from "react-toastify";
import { userResetPwd } from "../services/userServices";
class ResetPasswordInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirmpassword: '',
            toast: false,
        }
        this.baseState = this.state
    }
    handlepasswordChange = (event) => {
        const password = event.target.value
        this.setState({ password: password })
    }
    handleconfirmpasswordChange = (event) => {
        const confirmpassword = event.target.value
        this.setState({ confirmpassword: confirmpassword })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === "") //validation for password
        {
            toast("password cannot be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else
            if (this.state.password.length < 8) //validation for password length
            {
                toast("Password must be of atleast 8 characters long", { position: toast.POSITION.BOTTOM_CENTER });
            }
            else {
                let url = window.location.pathname;
                console.log('43-reserComponent-Url is---', url);
                const verify_token = url.substr(15);
                // const verify_token = localStorage.getItem('forgetPassToken');
                console.log("15--verifyforgetPassInput.jsx----token: ", verify_token);
                userResetPwd(this.state.password, verify_token); //function of services which pass username ans password
            }
    }
    render() {
        return (
            <div>
                <center>
                    <label>Enter new password</label>
                    <label>Enter Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handlepasswordChange} />
                    <label>Enter Confirm Password</label>
                    <input type="password" placeholder="Enter confirm Password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleconfirmpasswordChange} />
                    <button type="submit" className="button" onClick={this.handleSubmit}>submit</button>
                </center>
            </div>
        )
    }
}
export default ResetPasswordInput;