import React, { Component } from 'react';
import Swal from 'sweetalert2'
import emailApi from '../api/axios.service'

import axios from 'axios';
import { useState } from 'react'


class EmailPage extends Component {
    constructor(props) {
        super(props);
        this.state = { Email: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        // this.alert(this.state.Email);

        axios
            .post("https://parsalpha.herokuapp.com/newsletter/subscribed/add", {
                Email: this.state.Email,
            })
            .then(response => this.alert(response.data.status))
            .catch(error => this.alert(error))
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
                    placeholder="user@host.domian"
                />
                <input
                    className="emailbutten"
                    type='submit'
                    value="ارسال"
                />
            </form>
        );
    }






    alert(status) {

        let message;
        if (status === 1) {
            message = 'Thanks for subscribe '
        } else if (status === 2) {
            message = "You had submit this form"
        } else (
            'ERROR '
        )
        Swal.fire({

            title: message,
            width: 600,
            padding: '3em',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
        })
    }

}
export default EmailPage









// return (
//     <form className="emailform" onSubmit={this.emailSubscriptions}>
//         <label> Enter your email  </label>
//         <input className="emailinput" type="email" name="email" />
//         <input className="emailbutten" type="submit" value="Send" onClick={this.alert} />
//     </form>
// )