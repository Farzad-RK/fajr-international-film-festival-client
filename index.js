/**
 * @format
 */

import {Navigation} from "react-native-navigation";
import {RegisterScenes} from "./src/Scenes";
import {goToHome, gotToAuth} from "./src/Navigation";

RegisterScenes();
Navigation.events().registerAppLaunchedListener(() => {

    // gotToAuth()
    goToHome()
});
