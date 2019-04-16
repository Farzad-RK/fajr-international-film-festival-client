import axios from 'axios';
import {getText} from "../Locale";
import {Navigation} from "react-native-navigation";
import {goToHome, gotToSMS, hideAlert, hideError, hideSpinner, showAlert, showError, showSpinner} from "../Navigation";
const baseUrl = "http://5.253.26.114/";
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

export  const  sendSMScode = (phoneNumber,code) =>{

    //timeout in milliseconds
    showSpinner()
    axios.defaults.timeout = 5*1000;
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
        console.log(response)
        // try {
        //     await AsyncStorage.setItem('token', response.access_token);
        // } catch (error) {
        //     // Error retrieving data
        //     // console.log(error.message);
        // }
        const defaultIndex = 4 ;
        goToHome(defaultIndex)
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