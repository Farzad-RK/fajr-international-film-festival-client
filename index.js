/**
 * @format
 */

import {Navigation} from "react-native-navigation";
import {RegisterScenes} from "./src/Scenes";
import {AsyncStorage} from "react-native";
import {goToHome, gotToAuth} from "./src/Navigation";

RegisterScenes();
Navigation.events().registerAppLaunchedListener(async () => {
    // try {
    //     let accessToken = await AsyncStorage.getItem("accessToken")
    //     if(accessToken!=null){
    //         goToHome(2)
    //     }else {
    //         gotToAuth()
    //     }
    // }catch (e) {
    //     gotToAuth()
    // }
    await AsyncStorage.setItem("selectedLocale","fa")
    await goToHome(2)


});