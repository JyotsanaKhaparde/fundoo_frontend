/***********************************************************************************
 *  Purpose         : To render atlist onece and give the path of components.
 *  @file           : login.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 02/02/2019
 **********************************************************************************/
import React, { Component } from "react";
import ResetPasswordInput from "../components/resetpasswordinput";
class ResetPassword extends Component {
    render() {
        return (
            <div>
                <h1><center>Reset Password</center></h1>
                <div>
                    <ResetPasswordInput />
                </div>
            </div>
        )
    }
}
export default ResetPassword; 