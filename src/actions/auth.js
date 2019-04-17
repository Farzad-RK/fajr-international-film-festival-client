import axios from 'axios';
import {AsyncStorage} from 'react-native'
import {goToHome, gotToSMS, hideError, hideSpinner, showError, showSpinner} from "../Navigation";
const baseUrl = "http://5.253.26.114/";
// const CancelToken = axios.CancelToken
export const authenticatePhoneNumber = (phoneNumber) =>{

    //timeout in milliseconds
    showSpinner()
    axios.defaults.timeout = 5*1000;
    axios({
        method: "POST",
        url:baseUrl+"api/send_otp",
        headers: {
            "Content-Type": "application/json"
        },
        data:JSON.stringify({
            phone_number:phoneNumber
        })
      }).then( response => {
         hideSpinner()
         gotToSMS(phoneNumber)
        })
        .catch( error =>{
        console.log(error)
        hideSpinner()
        showError("invalidInput")
        setTimeout( ()=> hideError(),2000)
        })
};

export  const  sendSMScode =  (phoneNumber,code) =>{

    //timeout in milliseconds
    showSpinner()
    axios({
        method: "POST",
        url:baseUrl+"/api/auth/signup",
        headers: {
            "Content-Type": "application/json"
        },
        data:JSON.stringify({
            phone_number:phoneNumber,
            token:code
        })
    }).then( response => {
        hideSpinner()
        storeCredntials(phoneNumber,response).then(
            ()=>{
                const defaultIndex = 4
                goToHome(4)
            }
        ).catch( e =>{

        } )

    })
        .catch( error =>{
        hideSpinner()
        showError("invalidInput")
        setTimeout( ()=> hideError(),2000)
    })
};

export const resendSMS = (phoneNumber)=>{
    showSpinner();
    axios.defaults.timeout = 5*1000;
    axios({
        method: "POST",
        url:baseUrl+"api/send_otp",
        headers: {
            "Content-Type": "application/json"
        },
        data:JSON.stringify({
            phone_number:phoneNumber
        })
    }).then( response => {
        hideSpinner()
    }).catch( error =>{
            hideSpinner();
            showError("noConnection");
            setTimeout( ()=> hideError(),2000)
        })
};

const storeCredntials = async (phoneNumber,response) =>{
    try {
        await  AsyncStorage.setItem('phoneNumber',phoneNumber);
        await  AsyncStorage.setItem('accessToken',response.data.access_token);
    } catch (e) {
        // saving error
    }
}