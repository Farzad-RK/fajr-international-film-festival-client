import {Navigation} from "react-native-navigation";
import Root from "./Scenes/Root"
import Locale from "./Scenes/Auth/Locale";
import Authentication from "./Scenes/Auth/Authentication";
import SMSverification from "./Scenes/Auth/SMSverification"
import Specials from "./Scenes/Home/Specials";
import Sections from "./Scenes/Home/Sections";
import News from "./Scenes/Home/News";
import LiveStream from "./Scenes/Home/LiveStream";
import Events from "./Scenes/Home/Events";
import MoreSpecial from "./Scenes/SideScenes/MoreSpecial"
import VideoLibrary from "./Scenes/SideScenes/VideoLibrary"
import SectionPage from "./Scenes/SideScenes/SectionPage"
import ContentIndex from "./Scenes/SideScenes/ContentIndex"
import SpinnerOverlay from "./Components/SpinnerOverlay"
import ErrorOverlay from "./Components/ErrorOverlay"
import ContentDetailView from "./Components/ContentDetailView";
import Settings from "./Scenes/SideScenes/Settings";
import EventIndex from "./Scenes/SideScenes/EventIndex";
import LanguageOverlay from "./Components/LanguageOverlay";
import DownloadUpdate from "./Components/DownloadUpdate";

export const  RegisterScenes = () =>{
    Navigation.registerComponent(`Root`, () => Root);
    Navigation.registerComponent(`Locale`,()=>Locale)
    Navigation.registerComponent( `Authentication` , () => Authentication)
    Navigation.registerComponent( `SMSverification` , () => SMSverification)
    Navigation.registerComponent( `Specials` , () => Specials)
    Navigation.registerComponent( `Sections` , () => Sections)
    Navigation.registerComponent( `News` , () => News)
    Navigation.registerComponent( `LiveStream` , () => LiveStream)
    Navigation.registerComponent( `Events` , () => Events)
    Navigation.registerComponent( `MoreSpecial` , () => MoreSpecial)
    Navigation.registerComponent( `SectionPage` , () => SectionPage)
    Navigation.registerComponent( `ContentIndex` , () => ContentIndex)
    Navigation.registerComponent( `SpinnerOverlay` , () => SpinnerOverlay)
    Navigation.registerComponent( `ErrorOverlay` , () => ErrorOverlay)
    Navigation.registerComponent( `ContentDetailView` , () => ContentDetailView)
    Navigation.registerComponent( `Settings` , () => Settings)
    Navigation.registerComponent( `LanguageOverlay` , () => LanguageOverlay)
    Navigation.registerComponent( `VideoLibrary` , () => VideoLibrary)
    Navigation.registerComponent( `DownloadUpdate` , () => DownloadUpdate)
    Navigation.registerComponent( `EventIndex` , () => EventIndex)

};