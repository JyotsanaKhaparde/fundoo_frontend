/***********************************************************************************
 *  Purpose         : To render atlist onece and give the path of components.
 *  @file           : login.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import VerifyEmailInput from "../components/verifyEmailinputinput";
class VerifyEmail extends Component {
    render() {
        return (
            <div>
                <h1><center>Verifying email is in progress</center></h1>
                <div>
                    <VerifyEmailInput />
                </div>
            </div>
        )
    }
}
export default VerifyEmail; 