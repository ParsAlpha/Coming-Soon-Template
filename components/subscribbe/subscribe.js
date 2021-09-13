import React, { Component } from 'react';
import Swal from 'sweetalert2'
import emailApi from '../api/axios.service'

import axios from 'axios';
import { useState } from 'react'
import { keys } from '@material-ui/core/styles/createBreakpoints';


class EmailPage extends Component {
    constructor(props) {
        super(props);
        this.state = { Email: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        // this.alert(this.state.Email);
        let checkemail = this.validateEmail(this.state.Email)
        if (checkemail) {

            axios
                .post("https://parsalpha.herokuapp.com/newsletter/subscribed/add", {
                    Email: this.state.Email,
                })
                .then(response => this.alert(response.data.status))
                .catch(error => this.alert(error))
        } else {
            this.alert(3)
        }
    }
    myChangeHandler = (event) => {
        this.setState({ Email: event.target.value });
    }
    render() {
        return (

            <form className="emailform" onSubmit={this.mySubmitHandler}>
                <p>برای اطلاع بیشتر ایمیل خود را وارد کنید</p>
                <input
                    className="emailinput"
                    type='email'
                    onChange={this.myChangeHandler}
                    placeholder="Email"
                />
                <input
                    className="emailbutten"
                    type='submit'
                    value="عضویت در اسنپ کلاب"
                />
            </form>
        );
    }


    alert(status) {

        let message;
        let Status = 'error'
        if (status === 1) {
            message = 'آدرس تماس شما با موفقیت ثبت شد';
            Status = 'success';
        } else if (status === 2) {
            message = "شما قبلا ثبت نام کرده اید";
            Status = 'warning'
        } else if (status === 3) {
            message = "لطفا آدرس ایمیل خودرا به درستی وارد کنید";
            Status = 'warning'
        } else (
            message = 'ERROR '
        )
        Swal.fire({

            title: message,
            icon: Status,
            width: 600,
            padding: '3em',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            showConfirmButton: false,
            timer: 2000

        })
    }
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


}
export default EmailPage
