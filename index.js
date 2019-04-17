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
    //         goToHome()
    //     }else {
    //         gotToAuth()
    //     }
    // }catch (e) {
    //     gotToAuth()
    // }
    // goToHome(4)
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
            animate: false,

        },

    });
    Navigation.setRoot({
        root : {
            stack :{
                options:{
                    layout: {
                        orientation: ['portrait']
                    }
                },
                id:'sectionStack',
                children : [
                    {
                        component: {
                            id: 'ContentDetailView',
                            name: 'ContentDetailView',
                            options: {},
                            // passProps:{
                            //     title:title,
                            //     sectionId:id
                            // }
                        },
                    },
                ],
            }
        },
        layout: {
            orientation: ['portrait']
        }
    })

});