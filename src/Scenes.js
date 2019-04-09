import {Navigation} from "react-native-navigation";
import Root from "./Scenes/Root"
import Locale from "./Scenes/Auth/Locale";
import Authentication from "./Scenes/Auth/Authentication";
import SMSverification from "./Scenes/Auth/SMSverification"

export const  RegisterScenes = () =>{
    Navigation.registerComponent(`Root`, () => Root);
    Navigation.registerComponent(`Locale`,()=>Locale)
    Navigation.registerComponent( `Authentication` , () => Authentication)
    Navigation.registerComponent( `SMSverification` , () => SMSverification)
};