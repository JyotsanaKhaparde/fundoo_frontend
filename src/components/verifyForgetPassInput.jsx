/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { userverifyForgetPassword } from "../services/userServices";
class VerifyForgetPassInput extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const verify_token = localStorage.getItem('forgetPassToken');
        console.log("15--verifyEmailInput.jsx----token: ", verify_token); // getting token
        userverifyForgetPassword(verify_token);
    }
    render() {
        return (
            <div>
                <center>
                    <button type="submit" className="button" onClick={this.handleSubmit}>Click here to redirect into forget password page</button>
                </center>
            </div>
        )
    }
}
export default VerifyForgetPassInput;