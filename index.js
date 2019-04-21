/**
 * @format
 */
import {Navigation} from "react-native-navigation";
import {RegisterScenes} from "./src/Scenes";
import {AsyncStorage} from "react-native";
import {goToHome, gotToAuth, hideError, showError} from "./src/Navigation";
import ver from "./src/version"
import axios from "axios";
RegisterScenes();
Navigation.events().registerAppLaunchedListener(async () => {

    let accessToken = await AsyncStorage.getItem("accessToken")
    let version = ver.androidVersion
    let url = "http://5.253.26.114/api/check_for_update";
    axios.get(url, { "Content-Type": "application/json"}).
    then(
        response => {
            const currentVersion =response.data.version
            const downloadLink = response.data.link;
            if(currentVersion!==version){
            //redidrect to download
                Navigation.showOverlay({
                    component: {
                        name: 'DownloadUpdate',
                        id: 'downloadUpdate',
                        passProps:{
                            downloadLink:downloadLink
                        },
                        options: {
                            overlay: {
                                interceptTouchOutside: false
                            },
                        }
                    }
                });
            }else{
            //normal
                if(accessToken!=null){
                    goToHome(3)
                }else {
                    gotToAuth()
                }
            }
        }
    ).catch(
        error =>{
            AsyncStorage.setItem("selectedLocale","fa")
            goToHome(3)
        }
    )
});