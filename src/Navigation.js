import { Navigation } from 'react-native-navigation'

export const gotToAuth = () => {

Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
            animate: false,
        }
});
Navigation.setRoot({
    root : {
        stack :{
            children : [
                {
                    component: {
                        id: 'auth',
                        name: 'Authentication',
                        options: {},
                        passProps: {}
                    },
                },
            ],
        }
    }
})
}