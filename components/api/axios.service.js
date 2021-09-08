import axios from 'axios'

var serverinfo = {
    Hostname: "https://parsalpha.herokuapp.com",
    Url: "/newsletter/subscribed/add",

}

function sendEmail(Email) {
    return new Promise((resolve, reject) => {
        axios.post(serverinfo.Hostname + serverinfo.Url, { "Email": Email }).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err)
        })
    })
}

export default sendEmail