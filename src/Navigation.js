import { Navigation } from 'react-native-navigation'
import liveStream from '../assets/img/live-stream.png'
import specials from '../assets/img/specials.png'
import sections from '../assets/img/sections.png'
import news from '../assets/img/news.png'
import events from '../assets/img/events.png'
import {getText} from "./Locale";
import {getFont} from "./Data";

export const gotToAuth = () => {

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
            children : [
                {
                    component: {
                        id: 'SMSverification',
                        name: 'SMSverification',
                        options: {},
                        passProps: {}
                    },
                },
                {
                    component: {
                        id: 'authentication',
                        name: 'Authentication',
                        options: {},
                        passProps: {}
                    },
                }
            ],
        }
    }
})
}
export const goToHome = (currentIndex)=>{
    Navigation.setRoot({
        root : {
            bottomTabs:{
                id:'bottomTabs',
                options:{
                    bottomTabs:{
                        titleDisplayMode: 'alwaysShow',
                        currentTabIndex: currentIndex,
                        hideShadow:true,
                    }
                },
                children: [
                    {
                        component: {
                            id:'liveStream',
                            name: 'LiveStream',
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    text: getText('liveStream'),
                                    icon: liveStream,
                                    selectedTextColor:'#c1272d',
                                    fontFamily:getFont('regular'),
                                    selectedIconColor: '#c1272d'
                                }
                            }
                        },
                    },
                    {
                        component: {
                            id:'events',
                            name: 'Events',
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    text: getText('events'),
                                    icon: events,
                                    selectedTextColor:'#c1272d',
                                    fontFamily:getFont('regular'),
                                    selectedIconColor: '#c1272d'
                                }
                            }
                        },
                    },
                    {
                        component: {
                            id:'news',
                            name: 'News',
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    text: getText('news'),
                                    fontFamily:getFont('regular'),
                                    icon: news,
                                    selectedTextColor:'#c1272d',
                                    selectedIconColor: '#c1272d'
                                }
                            }
                        },
                    },
                    {
                        component: {
                            id:'sections',
                            name: 'Sections',
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    text: getText('sections'),
                                    fontFamily:getFont('regular'),
                                    icon: sections,
                                    selectedTextColor:'#c1272d',
                                    selectedIconColor: '#c1272d'
                                }
                            }
                        },
                    },
                    {
                        component: {
                            id:'specials',
                            name: 'Specials',
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    fontFamily:getFont('regular'),
                                    selectedTextColor:'#c1272d',
                                    text: getText('specials'),
                                    icon: specials,
                                    selectedIconColor: '#c1272d',

                                }
                            }
                        },
                    }
                ]
            }
        }
    })
}
export const gotToSectionPage = (title) => {

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
                children : [
                    {
                        component: {
                            id: 'sectionPage',
                            name: 'SectionPage',
                            options: {},
                            passProps:{
                                title:title
                            }
                        },
                    },
                ],
            }
        }
    })
}
export const showSpinner = () =>{
    Navigation.showOverlay({
        component: {
            name: 'SpinnerOverlay',
            id: 'SpinnerOverlay',
            options: {
                overlay: {
                    interceptTouchOutside: false
                }
            }
        }
    });
}
export const hideSpinner = () =>{
    Navigation.dismissOverlay("SpinnerOverlay");
}
export const showError = (type) =>{
    Navigation.showOverlay({
        component: {
            name: 'ErrorOverlay',
            id: 'ErrorOverlay',
            options: {
                overlay: {
                    interceptTouchOutside: false
                }
            },
            passProps :{
                type:type
            }
        }
    });
}
export const hideError = () =>{
    Navigation.dismissOverlay("ErrorOverlay");
}
export const gotToSMS = (phoneNumber)=>{
    Navigation.push('authentication', {
        component: {
            id:'SMSverification',
            name: 'SMSverification',
            passProps: {
                phoneNumber:phoneNumber
            }
        }
    });
}
export const backToAuth = () =>{
    Navigation.pop('SMSverification');
}
