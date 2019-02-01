/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { userverifyEmail } from "../services/userServices";
class VerifyEmailInput extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const verify_token = localStorage.getItem('verifyToken');
        console.log("15--verifyEmailInput.jsx----token: ", verify_token); // getting token
        userverifyEmail(verify_token);
    }
    render() {
        return (
            <div>
                <button type="submit" className="button" onClick={this.handleSubmit}>Click here for login</button>
            </div>
        )
    }
}
export default VerifyEmailInput;