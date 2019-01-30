/***********************************************************************************
 *  Purpose         : 
 *  @file           : usreService.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import axios from 'axios';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { func } from 'prop-types';
function userRegister(firstname, lastname, email, password) {
    axios.post('/registration',
        {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            toast: false
        })
        .then(function (response) {
            toast("Registered Successfully.....", { position: toast.POSITION.BOTTOM_CENTER });
            console.log(response);
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            toast("User with this Username already exists", { position: toast.POSITION.BOTTOM_CENTER });
        });
}
function userLogin(username, password) {
    //send the data to server
    axios.post('/login',
        {
            email: username,
            password: password,
            toast: false,
        })
        .then(function (response) {
            localStorage.setItem('sender', username);
            localStorage.setItem('password', password);
            localStorage.setItem('token', response.data.token)
            toast("Login Successfully.....", { position: toast.POSITION.BOTTOM_CENTER });
            //console.log(response);
            window.location.href = '/dashboard'
        })
        .catch(function (err) {
            toast("Login Unsuccessful.....", { position: toast.POSITION.BOTTOM_CENTER });
            console.log(err);
        });
}
function userForgetPassword(email) {
    axios.post('/forgetpassword',
        {
            email: email
        })
        .then(function (response) {
            console.log(response);
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
        });
}
export {
    userRegister,
    userLogin,
    userForgetPassword
}
