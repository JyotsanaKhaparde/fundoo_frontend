/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 1/0/2019
 **********************************************************************************/
import React, { Component } from "react";
import { userverifyEmail } from "../services/userServices";
class VerifyEmailInput extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // const verify_token = localStorage.getItem('verifyToken');
        let url = window.location.pathname;
        console.log('16--Url is---', url);
        const verify_token = url.substr(13);
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