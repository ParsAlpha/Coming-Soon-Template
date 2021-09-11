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
            // <div class="form-style-3">
            //     <form>
            //         <fieldset><legend>Personal</legend>
            //             <label for="field2"><span>Email <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
            //             <label><span> </span><input type="submit" value="Submit" /></label>

            //         </fieldset>

            //     </form>
            // </div>








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
        if (status === 1) {
            message = 'آدرس تماس شما با موفقیت ثبت شد'
        } else if (status === 2) {
            message = "َشما قبلا ثبت نام کرده اید"
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